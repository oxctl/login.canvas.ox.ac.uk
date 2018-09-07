// Hostnames we allow for displaying message
var allowed_referrers = ["idp.shibboleth.ox.ac.uk"];

var ready = function (fn) {
    if (document.attachEvent ? document.readyState === "complete" : document.readyState !== "loading") {
        fn();
    } else {
        document.addEventListener('DOMContentLoaded', fn);
    }
}

var getParameterByName = function (name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}

var getLocation = function (href) {
    var l = document.createElement("a");
    l.href = href;
    return l;
};

// This prevents arbitrary hosts from displaying messages.
var checkAllowed = function (referrer) {
    if (referrer) {
        var ref_hostname = getLocation(referrer).hostname;
        return allowed_referrers.indexOf(ref_hostname) != -1;
    }
    return false;

}


if (checkAllowed(document.referrer)) {
    var message = getParameterByName("message");
    if (message) {
        ready(function () {
            var error_message = document.getElementById("error-message");
            error_message.classList.remove("d-none");
            // This prevents XSS as all text is escaped
            var text_message = document.createTextNode("❌ " + message);
            error_message.appendChild(text_message);
        });
    }
}

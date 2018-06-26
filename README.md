# login.canvas.ox.ac.uk site

This is the discovery page for https://canvas.ox.ac.uk/ At the moment is't as 
simple as possible. We have 3 copies, one for each environment. There is no
magic about how each copy is built and at the moment it's a manual process.

## Errors

The login page attempts to look for any error message supplied by Canvas and
if present and if the user came through idp.shibboleth.ox.ac.uk then show it
to the user. We don't allow any HTML to be displayed to the user, just plain
text. This is to prevent random hosts on the internet displaying messages
to users.

## Deployment

This set of pages is deployed to an AWS S3 bucket that is served up by AWS
Cloudfront to allow TLS on a custom domain. At the moment this content is
just copied to the S3 bucket when a new change is requested and an 
invalidation is performed against the Cloudfont cache to get the change out
to the users.

## TODO

 * Better performance on mobile.
 * Automatic building of 3 versions.
 * Better styling.


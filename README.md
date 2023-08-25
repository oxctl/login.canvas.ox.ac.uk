# login.canvas.ox.ac.uk site

This is the discovery page for https://canvas.ox.ac.uk/ At the moment is't as 
simple as possible.

## Errors

The login page attempts to look for any error message supplied by Canvas and
if present and if the user came through idp.shibboleth.ox.ac.uk then show it
to the user. We don't allow any HTML to be displayed to the user, just plain
text. This is to prevent random hosts on the internet displaying messages
to users.

## Deployment

This set of pages is deployed to [Cloudflare](https://dash.cloudflare.com/1adb0f307cf4b14f583113668c4cd5fa/pages/view/login-canvas-ox-ac-uk)

To release the latest code merge the master branch into the release branch Cloudflare will then deploy this to production.
The best way to do this is to create a PR from `master` to `release`, this allows you to check what's going to be released.
There is a GitHub action that can be manually run to do this.

Alternatively to do this locally run checkout the release branch, fetch the latest code from the origin and run:
```shell
git merge origin/master
```

To see what is about to go into a release you can preview the changes between [master and release](https://github.com/oxctl/login.canvas.ox.ac.uk/compare/release...master), then to double check a PR can be created to merge the changes, reviewed and merged (at which point the release branch is built and deployed).

## TODO

 * Automatic building of the project
 * Make sure the .github folder contents are not served.
 * CSS and JSS Invalidation


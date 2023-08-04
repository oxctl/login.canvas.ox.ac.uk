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

This set of pages is deployed to [Cloudflare](https://dash.cloudflare.com/1adb0f307cf4b14f583113668c4cd5fa/pages/view/login-canvas-ox-ac-uk)

To release the latest code merge the master branch into the release branch. To do this locally run checkout the release
branch, fetch the latest code from the origin and run:
```shell
git merge origin/master
```

To see what is about to go into a release you can preview the changes between [master and release](https://github.com/oxctl/login.canvas.ox.ac.uk/compare/release...master), then to double check a PR can be created to merge the changes, reviewed and merged (at which point the release branch is built and deployed).

## TODO

 * Automatic building of 3 versions.
 * CSS Invalidation


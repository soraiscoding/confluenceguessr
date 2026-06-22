# ConfluenceGuessr

ConfluenceGuessr is a Forge app for Confluence that delivers a knowledge-discovery, interactive guessing game.

See [developer.atlassian.com/platform/forge/](https://developer.atlassian.com/platform/forge) for documentation and tutorials explaining Forge.

## What to do before coding anything i.e. setup

If you can't run forge commands then you should set up your machine for forge app development.
https://developer.atlassian.com/platform/forge/getting-started/


### How we will collaborate on this app?

1. Clone this repo.
2. Create your own Atlassian developer site. 
3. Then you should run forge login.
4. In the root folder run `forge environments create`. Create your own development environment. You will work in this environment. Think of it as something like your personal branch on git.
    You will install what's in this environment onto your developer site. This ensures that you don't overwrite or interfere with other people's code and you only install your version of the app to your developer site.
5. Run `forge login` to be able to deploy and install this app (more specfically your version of this app) onto your developer site.
6. Run `forge deploy -e <your-environment-name>` to deploy to your development environment. 
    If you deploy to someone else's development environment you will overwrite the code in their development environment.
7. Run `forge install -e <your-environment-name>` to install the app (that's in your development environment) to your developer site.
    Select confluence as the product and install ConfluenceGuessr onto your personal Atlassian developer site. 
    Once the app is installed on a site, the site picks up the new app changes you deploy without needing to rerun the install command. 

Now you can start developing and working on ConfluenceGuessr.
Forge install overwrites everything on a given website so we can't share developer sites as we'd be overwriting each other's app all the time. Not sharing developer sites ensures that you can test and see how your specific version of this app works on Confluence, without fear of another person's code breaking your specific version of the app.

### Pushing changes to your confluence developer site

- Configure your default development environment to be <your-environment-name> by running `forge settings set default-environment <your-environment-name>`. This makes <your-environment-name> the default environment you deploy to when you run `forge deploy`.
- Whenever you make a change to your code and you want to see it/test it on your developer site just run `forge deploy` again. You can also run `forge tunnel`.
```diff
However, if you change your frontend and want to deploy the new frontend to your site, 
you must move into the static folder before running npm run build.
- Then cd .. and run forge deploy normally.
```

### Pushing to git

Better to keep your code able to be deployed onto confluence.
Just in case I want to set up CI/CD so that forge linting is done automatically when code is pushed to github.

## Explanation of the branches

- main. main branch only houses fully working code.
- feature/{feature}. 
Those that are responsible for a feature will work in their feature branches.
I have separated the features into separate branches because when testing and coding up a feature we should be able to do so without interfering with other people; we should be able to code and test freely. When a feature has been tested and is thought to be completely done, we push the feature's code to the staging branch.
- staging. this houses the code for a feature we want to double check works with other features before pushing to main.

## Environments

For the majority of the term we'll be working with the development environment (more specifically your own development environment). As we near sprint 3, we may discuss more about
the staging and production environments and using them. They are shared environments so discussions should be had before deploying to them.

There are three environments available:
Development, Staging and Production
When you forge deploy and forge install onto your developer site what environment the app is in will be in parenthesis e.g. (Development) or sora (Dev)

"We recommend using the development environment for testing your changes, staging for a stable version of your app, and production as the version of your app that’s ready for use."
read more here: https://developer.atlassian.com/platform/forge/environments-and-versions/

## Handing off the code

When handing off the code we'll delete app id and any other personal details.

## Notes

- Forge Confluence does not allow for apps with the same app id but different development environments to be installed on the same atlassian site. So, if you have the default development version of an app
installed on example.atlassian.net then you can't install a {your_dev_environment} version of the app to that exact site. You MUST uninstall the app from your developer site (with forge uninstall and then specifying the environment) before running forge install again if you want to change what development environment/version of the app you want to run on your site.

- There was a very strange problem where I run forge tunnel and any changes I made to the App.js file in the static/src folder wouldn't be saved and wouldn't cause the app to reload on my developer site. 
Apparently forge tunnel and custom ui only reacts to changes in the backend index.js file since custom ui code is inside an iframe.
So I had to manually run npm run build while in the static folder then run forge deploy whenever I want to reload the frontend and see its changes on the ui. I'm looking into an automated way of doing this later. For now it seems running that command manually in the static file, cd .. to the root folder then deploying is the fastest way to reload the frontend.

- If the UI doesn't show anything, there's a bug somewhere in the frontend files probably. It's not a forge server issue probably.

## Support

See [Get help](https://developer.atlassian.com/platform/forge/get-help/) for how to get help and provide feedback.

# ConfluenceGuessr

This project contains a Forge app written in Javascript that displays `Hello World!` in a Confluence global page for now.

See [developer.atlassian.com/platform/forge/](https://developer.atlassian.com/platform/forge) for documentation and tutorials explaining Forge.

## What to do before coding anything i.e. setup
- Install top-level dependencies:
```
npm install
```

### About Forge App Ids
App Ids are linked to a single developer by default. Since I (Richard) created this project only I can deploy and install changes to this app.
However, if you take this project repo and created your own App Id suddenly you can edit this project and deploy and install changes to it albeit to your own personal developer site connected to your
own account. When we push finalised features to main we will probably use the app creator's app id (ci cd in place to replace the app id of the manifest.yml file that gets pushed to main with my (richard) app id) with everyone as a collaborator for the app, and not a "service account" (although that's not totally off the table).

When handing off the code we'll delete it and any other personal details.

For everyone to test their code without interefering with other team members, everyone should clone this repo then run forge register in the root directory of this project.
If you can't run forge commands then you should set up your machine for forge app development.
https://developer.atlassian.com/platform/forge/getting-started/

Then you should create your own Atlassian cloud developer site.

The forge register CLI command links your app’s directory to your Atlassian account, fetches the App Id, and associates it with your selected Developer Space.
The App id generated for you will be put into the manifest.yml file and from there you can write code and test for ConfluenceGuessr on your personal environment.

- Then you run forge install
Select confluence as the product and install ConfluenceGuessr onto your Atlassian developer site. Now you can start developing and working on ConfluenceGuessr.

### Pushing changes to your developer site and onto Confluence
- When you want to push changes to your personal developer space and confluence site, you deploy your app by running:
```
forge deploy
```

- Install your app in an Atlassian site by running: (you don't have to do this everytime you push and/or test a change)
```
forge install
```
- Once the app is installed on a site, the site picks up the new app changes you deploy without needing to rerun the install command.

## Explanation of the branches

- main. main branch
- feature/{feature}. 
Those that are responsible for a feature will work in the feature branches.
I have separated the features into separate branches because when testing and coding up a feature we should be able to do so without interfering with other people; we should be able to code and test freely. When a feature has been tested and is thought to be completely done, we push the feature's code to the testing branch.
- testing. this houses the code for a feature we want to double check works with other features before pushing to main.

The different branches we may have
- Development (Where you build and test): You write code on a feature branch. You use forge tunnel or forge deploy -e development to do initial testing of your new UI components or macro logic.
- Staging (Where you test the final package): You merge your code into the staging branch. You deploy using forge deploy -e staging. Here, you run integration and user acceptance testing on a private Confluence instance to ensure the app won't break when live.
- Production (Where it goes live): You merge into main and deploy to your real users using forge deploy -e production.

## Notes

## Support

See [Get help](https://developer.atlassian.com/platform/forge/get-help/) for how to get help and provide feedback.

# ConfluenceGuessr

This project contains a Forge app written in Javascript that displays `Hello World!` in a Confluence global page for now.

See [developer.atlassian.com/platform/forge/](https://developer.atlassian.com/platform/forge) for documentation and tutorials explaining Forge.

## What to do before coding anything i.e. setup
- Install top-level dependencies:
```
npm install
```

### About Forge App IDs
For everyone to test their code without interefering with other team members, everyone should run forge register in the root directory of this project.
If you can't run forge commands then you should set up your machine for forge app development.
https://developer.atlassian.com/platform/forge/getting-started/

The forge register CLI command links your app’s directory to your Atlassian account, fetches the App id, and associates it with your selected Developer Space.
The App id generated for you will be put into the manifest.yml file and from there you can write code and test for ConfluenceGuessr on your personal environment.

- Then you run forge install
Select confluence as the product and install ConfluenceGuessr onto your Atlassian site. Now you can start developing and working on ConfluenceGuessr.

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

### Notes

The different branches we may have
- Development (Where you build and test): You write code on a feature branch. You use forge tunnel or forge deploy -e development to do initial testing of your new UI components or macro logic.
- Staging (Where you test the final package): You merge your code into the staging branch. You deploy using forge deploy -e staging. Here, you run integration and user acceptance testing on a private Confluence instance to ensure the app won't break when live.
- Production (Where it goes live): You merge into main and deploy to your real users using forge deploy -e production.

## Support

See [Get help](https://developer.atlassian.com/platform/forge/get-help/) for how to get help and provide feedback.

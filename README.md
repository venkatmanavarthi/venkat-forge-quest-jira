# Venkat's first Jira quest

This is my first jira forge application. Displays
<br>
<br>
<br>
<font size="5">Venkat's first Jira quest</font>

<font size="6">Hello {user}</font><br>
<font>Welcome to the {project_key} project!</font>

<font>Current theme: LIGHT</font>

## Quick start
- Install dependecies
```
npm install
```
- Modify your app frontend by editing the `src/frontend/index.jsx` file.

- Modify your app backend by editing the `src/resolvers/index.js` file to define resolver functions. See [Forge resolvers](https://developer.atlassian.com/platform/forge/runtime-reference/custom-ui-resolver/) for documentation on resolver functions.

- Build and deploy your app by running:
```
forge deploy
```

- Install your app in an Atlassian site by running:
```
forge install
```

- Develop your app by running `forge tunnel` to proxy invocations locally:
```
forge tunnel
```

### Notes
- Use the `forge deploy` command when you want to persist code changes.
- Use the `forge install` command when you want to install the app on a new site.
- Once the app is installed on a site, the site picks up the new app changes you deploy without needing to rerun the install command.


[Project Name]
==
This document was created by Tina Castillo

*Last updated: [date]*

Styling
==
**Sass files:**

- `basic-content.scss` = all content area styles (may not include specific site area styles)
- `footer.scss` = all footer styles
- `global.scss` = global site styles
- `header.scss` = all header styles
- `ie.scss` = specific ie styles
- `mixins.scss` = contains mixins used within the other stylesheets
- `normalize.scss` = resets default browser styles
- `print.scss` = print styles

**fonts:**

- FontAwesome icons

Code
==
**js:**

- `modernizr.js` - http://modernizr.com/
- 'main.js' - custom scripts
- 'plugins.js' - list all plugins and link to them here
- 'custom.min.js' - (minified plugins.js and main.js files)
- 'breakpoint.js' - http://xoxco.com/projects/code/breakpoints/

Front-End Dev
==
**Use the Bundler gemfile to make sure you have the correct development dependencies:**

- Install Bundler = 'gem install bundler'
- Install dependencies = 'bundle install'
- *For more information: http://bundler.io/*

**Use the gulpfile to automate you system:**

**Start following these steps here if you do not have node or gulp globally installed on your machine (you may need to use sudo)**
- Download Node.js: http://nodejs.org/download/
- Install Node.js globally = 'npm install node'
- Install Gulp globally = 'npm install -g gulp'
**Follow these steps if node and gulp are already installed globally on your machine**
- Go to the project directory and install the project dependencies on your machine = 'npm install'
- Run the 'gulp' command within the project to begin automation
- *For more information: http://gulpjs.com/*
- *To remove a plugin: delete the task from the gulpfile.js and run 'npm remove pluginname'
- *To add a plugin: run 'npm install --save-dev pluginname'

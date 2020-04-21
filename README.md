# CYOA App builder Page

Builds a CYOA standalone html page, not optimised for web hosting but more as a shareable app/webpage file.

### Notes

Data is saved to local storage, but the logical next step will be an exportable json, so your character/jump data can be used elsewhere (if goes well a journal will be the next app).

## Backup Data

Click on Tools +, then backup (or download file), copy the string given.

#### Currently includes:

img embedding -<img> not css, 

Done: Gen Layout, Bg,
#### TODO

Template: header, cyoa choices Layout, cyoa choice styling,
mobx state management, switchable template (for easier testing), simple templating file


## Building a CYOA

- Option 1: build a templater from the example, test it, create message in github issues requesting creation
- Option 2: (requires some web dev experience, yarn installed) : following usual protocol, within folder run, `yarn install`, `yarn start`, test changes to templater file in `src/cyoadata`, once happy, run `yarn build`

## -
## Setup & other stuff

Bootstrapped with [Create React App](https://github.com/facebook/create-react-app). Then Ejected to Webpack to allow for single html packaging thanks to [pomo](https://stackoverflow.com/questions/51949719/is-there-a-way-to-build-a-react-app-in-a-single-html-file)

#### Available Scripts

In the project directory, you can run:

- `yarn start`

Runs the development mode @ <br />
Open [http://localhost:3000](http://localhost:3000). Hot reloads.

- `yarn build`

Builds the app for production to the `build` folder.<br />
Other files will be in the folder but only the index.html is required.

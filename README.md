# CYOA App builder Page

Builds a CYOA standalone html page, not optimised for web hosting but more as a shareable app/webpage file.

You character can be exported and opened in a [journalling app](https://github.com/aronedwards91/CYOA-Journal/releases)

To build your own App, a web form App has been build that exports working html Apps, [CYOA-Form](https://github.com/aronedwards91/CYOA-Form/releases)

## Embedding Everything , why & how

- WHY ; a standalone .html is easily shareable, cross platform, also for safety modern browser don't let html files natively pull from your drive (security), so any linked files wouldn't be read.

- Image linked will auto embed up to 6MB (over 6 is left out just as a warning as this creates very slow & large html files, most images are small and only require around 300x400 for big screens, but for smaller file sizes may be best to go lower.)

- Fonts: Need to be converted to [Base64](https://www.opinionatedgeek.com/codecs/base64encoder) then add the string to public as a json (see example),
- Font tip: to format export from linked site correctly to .json, use 
vscode's replace to remove the line endings.


#### Todo
- display max

#### Possible future additions
- discount logic (requires bigger rewrite)

## Building a CYOA

- Requires some js/dev knowledge, until a simpler process can be built.
- Clone the repo `git clone https://github.com/aronedwards91/CYOA-Viewer.git`
- at the root run  `yarn install` (npm may work, but haven't tested)
- Then use `yarn start` to run dev, or if just want the .html file run `yarn build`, only he .html is required.

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

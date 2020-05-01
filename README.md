# CYOA App builder Page - Testing branch for string based creation

Builds a CYOA standalone html page, not optimised for web hosting but more as a shareable app/webpage file.

### Notes

Data is not saved locally, but can be exported as .json file, coming is a journal app taht these will be imported into.

## Embedding Everything , why & how

- WHY ; a standalone .html is easily shareable, cross platform, also for safety modern browser don't let html files natively pull from your drive (security), so any linked files wouldn't be read.

- Image linked will auto embed up to 6MB (over 6 is left out just as a warning as this creates very slow & large html files, most images are small and only require around 300x400 for big screens.)

- Fonts: Need to be converted to [Base64](https://www.opinionatedgeek.com/codecs/base64encoder) then add the string to public as a json (see example),
- Font tip: to format export from linked site correctly to .json, use vscode's replace to remove the line endings.

#### Currently includes:

img embedding -<img> not css,

Done: Gen Layout, Bg, font embed, header, intro, data prop drilled (for later switching), cyoa choices present, remove prop drill data

Build Style Priority; string addition, inject storage reset

#### TODO
test custom build, simpler build process, design journal

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

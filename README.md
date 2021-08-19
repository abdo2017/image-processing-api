# Image Processing API project

it is a simple Node.js-Express.js project using sharp.js for processing the image.

## tools used:

-   Node.js
-   Express.js
-   Typescript
-   Jasmine (Testing)
-   Sharp.js

## Get started

clone the app locally `https://github.com/abdo2017/image-processing-api`
and install all dependencies using `npm install` or `yarn install` if you are using Yarn.

## How to use

you can put the image you want to resize in `assets/full` and the output file will be in `assets/thumb`

-   you can `npm run start` to start the server
-   to do the processing go to and add parameters `/api/images?filename={filename}&width={width}&height={height}`

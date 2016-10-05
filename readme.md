# Static Landing Page Starter [![Build Status](https://travis-ci.com/treehouseaustin/landing.svg?token=XLiSh4zTSbnj7fMscxCm&branch=master)](https://travis-ci.com/treehouseaustin/landing)

This repository serves as a starting point for all static marketing pages and
micro-sites that TreeHouse hosts. It includes an asset compilation pipeline as
well as the full component library to ensure the final visuals are on-brand.

Pages designed using this starter project are directly compatible with the
TreeHouse build system and will be uploaded to both the live and dev servers
once the build passes in TravisCI.

It is important to review the component library before designing any custom
user interface elements. You can view the source for the library
[here](https://github.com/treehouseaustin/treehouse-ui) or view a demo of the
latest components [here](http://ui.dev.tree.house)

## Getting started

Run `npm install` and then `npm start` to boot a development server at
http://localhost:8000. Changes to assets and partials will be recompiled through
Webpack and the browser will be refreshed automatically.

## Contributing

All files required for the landing page are located in the `/src` folder and
organized by their type. The [JTS template](https://github.com/Ignigena/jts)
engine is used to allow pages with re-usable layouts and partials.

Webpack is used to compile all front-end Javascript code and includes the Babel
transpiler allowing ES6 code to be written.

Only files in the `dist` folder will be deployed to S3. The current Webpack
configuration copies all assets and compiled JS/CSS to the `dist` folder along
with the rendered JTS template.

## Publishing

The following must be done in order to publish a landing page:

- A `development` and `master` branch should be created to allow for hosting the
  production version and a development version for preview purposes.
- The Travis configuration have the following encrypted environment variables:
  - `NPM_TOKEN` should contain a private NPM token with access to private NPM
    modules under the `@treehouse` organization.
  - `AWS_ACCESS_KEY` and `AWS_SECRET_KEY` IAM user for S3 deployments.
- An entry must be created in the marketing site repo to proxy requests based on
  the short URL which is required for this micro-site.

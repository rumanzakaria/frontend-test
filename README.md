# Drawboard Test

## Brief

The stuff we build at Drawboard is all about annotating/marking up engineering/construction/architecture documents, in real-time, across multiple devices.
If someone draws a rectangle on the windows app, it must look and behave exactly the same on everyother device; for example maybe in chrome on a linux environment or an exported pdf opened in a users favourite pdf viewer.
This coding challenge is based on an actual smaller issue we have had to solve in all of our apps and one we see as a right of passage.
We have supplied a couple similified annotations in a format similar to how our api would return them, as well as a basic React application to render them, and a picture that shows how the annotations are supposed to look.
You will notice that the annotations are currently a bit distored and stretched after we apply the matrix transformation, this is bad, they shouldnt look like that.

We want you (in your own fork on your own github profile) to make the annotations look correct (by matching the provided picture) by only modifying the `<Annotation/>` component found at `./src/Annotation/index.js`.
You may create files as needed (only in the `./src/Annotation/` directory) and use any file already present in the `./src/` directory.
There should be no need for additional libraries.
When you are done, send us (or your contact) a link to your fork.

## Getting things running

> NOTE: we use `yarn` as our package manager [info here](https://yarnpkg.com/), there are corresponding `npm` commands [info here](https://yarnpkg.com/en/docs/migrating-from-npm#toc-cli-commands-comparison).

```
// Install Deps
$ yarn

// Start Dev Environment
$ yarn start
```

### What the annotations should look like

![Expected Outcome]()


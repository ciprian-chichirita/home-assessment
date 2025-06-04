# React + TypeScript + Vite Project called "home-assessment"

### Prerequsites

- bash terminal
- nvm or node version `22.16.0` and npm version `10.9.2`

### How to install the project

- navigate to the root folder of the project and
  run `nvm use` if nvm is installed, else, make sure to have node ^v22 and npm ^v10 installed
- run

```
npm i
```

### How to run in dev mode

- open bash terminal, navigate to the root folder of the project and run

```
npm start
```

- this will open concurrently a mock server and our SPA

### How to build the project

- open bash terminal, navigate to the root folder of the project and run

```
npm run build
```

### How to run the built (dist folder) version of the project

- open bash terminal, navigate to the root folder of the project and run

```
npm run preview
```

- this will open concurrently a mock server and our SPA from our `/dist` folder

### Theming

- we use css variables to theme the application
- the entire theme is inside index.css file

### Folder structure

```
TODO: add here folder structure with tree cmd
```

### Note

- To be honest I would not use pure .css in a production setup, I would have used styled-components or tailwindCSS or a similar framework and make theming possible (dark and light) and use tokens (I tried the same here with CSS variables)
- Another thing, I would use a global state manager instead of React Context approach if the team is a large one (we will vote inside out team to chose one)
- And lastly I would actually use an existing framework for components instead of making them from scratch

### To Be Continued...

- add tests (vitest with react testing library)
- add visual tests (playwright)
- add a way to get Endpoint DTO typescript.d.ts files automatically
- maybe transform this in a monorepo and create separate packages for styles and icons
- add github actions (or other types of scripts) to:
  - run tests (unit, visual and integration) on PRs and block merging if they fail
  - if the PR is merged, run deployment scripts for QA env
  - add script to deploy in production (this one can be run automatically or manually)
- add sentry logs or something similar to it
- prefix css if we will use normal css (so we dont get naming conflicts) or make them css modules
- add i18n
- add a11y
- add storybook page for our components (so we can see how they work and have all the documentation for them) and add a a11y plugin to make sure our components are compliant

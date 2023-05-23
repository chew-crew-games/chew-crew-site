# [chew-crew-site](https://chewcrew.games)

[![Netlify Status](https://api.netlify.com/api/v1/badges/4488e818-bc0a-4088-ae0a-d8eb2543b25d/deploy-status)](https://app.netlify.com/sites/chewcrew/deploys)

A [server-side-rendered](https://nuxt.com/docs/getting-started/introduction#server-side-rendering) web app using:

- [Nuxt](https://nuxt.com)
- [Bulma](https://bulma.io)
- [Decap CMS](https://decapcms.org)

## Setup

This project requires [Node.js 18+](https://nodejs.org/en/download).

1. Clone the project.
2. Run `npm install` within the project to install dependencies.
3. Use `npm run dev` to run the site via the dev server locally.
   - You will also need to run `npm run netlify-cms-server` if you wish to try the Decap CMS interface. Refer to the [Decap CMS docs](https://decapcms.org/docs/intro/).
   - If you are using Visual Studio Code, you can also run both of these in parallel by pressing `Ctrl+Shift+B` or running the [default build task](https://code.visualstudio.com/docs/editor/tasks) from the command palette.
4. Use `npm run generate` to build the application and generate static files for deployment.
5. Consider installing [Vue Language Features](https://github.com/vuejs/language-tools#packages) for your editor if you are developing for this application.

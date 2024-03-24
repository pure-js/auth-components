# React Auth Components

## Tech Stack

### Core

- React
- TypeScript
- Vanilla Extract CSS (best of CSS-in-JS and css modules combined)

### Bundling

- Vite

## Links

[Storybook published to Chromatic](https://main--650d730a03965a33ff21d7d8.chromatic.com/?path=/story/form-button--primary) with UI components

App Deployed as [Static SPA](pure-js.github.io/auth-components/)

## Available Scripts

In the project directory, you can run:

> Please note that we are using `pnpm` but you can also use `npm` and everything will work fine, just a bit slower

### `pnpm start`

Runs the app in the development mode.\
Open [http://localhost:5173](http://localhost:5173) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `pnpm test` | _Not working at the moment - please check back later_

Launches the test runner in the interactive watch mode.\

### `pnpm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

## CSS naming convention

<!-- prettier-ignore -->
```css
/*-- For CSS Modules --*/

.beautiful_input {} /* Block */
.beautiful_input.ivalid_txt {} /* Element */
.beautiful_input.m_invalid {} /* Modificator */
.beautiful_input.--large {} /* Size Modificator */
```

## ESLint Notes

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
   parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
   },
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list

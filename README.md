# web-mcm-2022
 Frontend project copy of jusan.kz and jmart.kz for MCM Web Programming 2022 course


Getting Started with Project

This project was bootstrapped with [create-vite](https://github.com/vitejs/vite/tree/main/packages/create-vite).

## Prerequisites

1. You need to read [CONTRIBUTING.md](/CONTRIBUTING.md)
2. You need to install:

- [nvm](https://github.com/nvm-sh/nvm) in order to use different versions of node
- [yarn](https://classic.yarnpkg.com/lang/en/docs/install) - package manager

## Install Dependencies

Run following script to install `node_modules`:

```bash
yarn install
```
## Used Technologies

1. [Tailwind](https://tailwindcss.com/) is used for creating UI, has range of classes, is easy to customize
2. [Axios](https://axios-http.com/docs/intro) is used for http requests, has features like [interceptors](https://axios-http.com/docs/interceptors), is easy to configure
3. [React Query](https://react-query.tanstack.com/) is used to fetch, cache and update data in application all without touching any "global state"

## Scripts
### `yarn dev`

Runs the app in the development mode.\
Open [http://localhost:5173](http://localhost:5173) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.
## Code Structure

Most things are located in `src` folder:

1. `components` has all project components
2. `core` consists of helper functions and custom hooks
3. `pages` contains pages, page components are exported with default, in order to implement [code splitting](https://reactjs.org/docs/code-splitting.html) via [React.lazy](https://reactjs.org/docs/code-splitting.html#reactlazy)
4. `routes` imports pages and wrap them into `RootRouter` component
5. `store` contains all logic for integration with API.
   Modules(`auth`, `reviews`, etc.) in store basically have the following structure:
   - `api.ts` exports function which makes http request
   - `types.ts` contains types that describe Request and Response objects
   - `parsers.ts` has functions that parse Response objects got from API to objects appropriate for Frontend
   - `hooks.ts` here we create our [custom hooks](https://react-query.tanstack.com/examples/custom-hooks) that are based on core hooks of `React Query` like `useQuery`, `useMutation`
   - `index.ts` import all from files above and exports them, in order to make more comfortable to import something from store modules
6. `templates` some pages have the same structure, most of them have `Header`. Instead of putting `Header` in each page, we create `AppTemplate` and wrap necessary pages via [outlets](https://reactrouter.com/docs/en/v6/getting-started/concepts#outlets)


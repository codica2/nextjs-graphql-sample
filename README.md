# Next.js project with TypeScript & GraphQl example

This is an `example/boilerplate` of a simple [nextjs](https://github.com/zeit/next.js) project written with [Typescript](https://github.com/Microsoft/TypeScript) and [Apollo](https://www.apollographql.com/docs/react/).

## The idea behind the example

Use the [@zeit/next-typescript](https://github.com/zeit/next-plugins/tree/master/packages/next-typescript) plugin to inject [@babel/preset-typescript](https://github.com/babel/babel/tree/master/packages/babel-preset-typescript) into Next.js, allowing for fast TypeScript transpilation. It also implements a `tsconfig.json` as recommended by [the @zeit/next-typescript plugin page](https://github.com/zeit/next-plugins/tree/master/packages/next-typescript/#readme).

[Apollo](https://www.apollographql.com/docs/react/) is a GraphQL client that allows you to easily query the exact data you need from a GraphQL server. In addition to fetching and mutating data, Apollo analyzes your queries and their results to construct a client-side cache of your data, which is kept up to date as further queries and mutations are run, fetching more results from the server.

In this simple example, Apollo is integrated by wrapping our pages with [HOC](https://reactjs.org/docs/higher-order-components.html). Using the HOC pattern we're able to pass down a central store of query result data created by Apollo into our React component hierarchy defined inside each page of our Next application.

### Table of Contents

- [Usage](#usage)
- [Configuration](#configuration)
- [File structure](#file-structure)
- [Styling](#styling)
- [Features](#features)
  - [GraphQL types](#graphql-types)
  - [Protected routes](#protected-routes)

## Usage

Install it and run:

```
npm install
npm run dev

# or

yarn
yarn dev
```

## Configuration

Also, this example is easily configurable. The main config file `next.config.js` is placed in the root. You can engage all the needed [plugins](https://github.com/zeit/next-plugins) there. For composing all the plugins together we use [next-compose-plugins](https://github.com/cyrilwanner/next-compose-plugins), It provides a cleaner API for enabling and configuring plugins for next.js because the default way that next.js suggests is unclear and confusing when you have many plugins.

```
const withPlugins = require('next-compose-plugins');
const withTypescript = require('@zeit/next-typescript')
const withLess = require('@zeit/next-less')

module.exports = withPlugins([

  // add a plugin without a configuration
  withTypescript,

  // add a plugin with specific configuration
  [withLess, {
    lessLoaderOptions: {
      javascriptEnabled: true,
    }
  }],
], nextConfig); // next.js configuration

```

## File structure

```
    .
    ├── ...
    ├── generated/             # generated graphql types
    ├── graphql/               # graphql quries and mutations
    ├── interfaces/            # custom ts interfaces
    ├── lib/                   # lib files
    ├── pages/                 # next js pages
    ├── server/                # custom server
    ├── src
    │   ├── components/        # components folder
    │   ├── layouts/           # layouts folder
    │   ├── styled/            # styled components
    │   └── ui/                # ui components
    └── ...
```

## Styling

This exapmle uses styled-components along with styled-system approach.

[Styled-components](https://github.com/styled-components/styled-components) is a CSS-in-JS library which allows you to write actual CSS code to style your components.

[Styled-System](https://github.com/styled-system/styled-system) provides you with a set of utilities that map props to your design system. It uses the concept of style functions. Each style function exposes its own set of props that style elements based on values defined in your design system theme. It has a rich [API](https://github.com/styled-system/styled-system#api) with functions for most CSS properties.

```
import { space, width, fontSize, color } from 'styled-system';
import styled from 'styled-components';

const Box = styled.div`
  ${space}
  ${width}
  ${fontSize}
  ${color}
`;

```

Design system theme example:

```
const theme = {
  breakpoints: [32, 48, 64],
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  fontSizes: [12, 14, 16, 20, 24, 36, 48, 80, 96],
  fontWeights: [100, 200, 300, 400, 500, 600, 700, 800, 900],
  lineHeights: {
    solid: 1,
    title: 1.25,
    copy: 1.5,
  },
  ...
```

Style functions will try to find a value from the theme object, these could be deeply nested values, and fallback to a hard-coded value if they are unable to.

```
// font-size: 24px (theme.fontSizes[4])
<Box fontSize={4} />

// margin: 16px (theme.space[3])
<Box m={2} />

// color: #333 (theme.colors.blacks[0])
<Box color="blacks.3" />
```

## Features

### GraphQL types

To generate GraphQL types out of GraphQL schemas we use [GraphQL Code Generator](https://github.com/dotansimha/graphql-code-generator), it takes all our GraphQL queries and mutations from `graphql/**/*` and generate typed components into a `generated/apolloComponents.tsx` file, so after you could use it inside your components. In order to generate it run `npm run generate` or `yarn generate` command. You should regenerate types every time any graphql mutation or query changes.

### Protected routes

For catching authentication errors we use HOC, it makes a GraphQL query to get the authenticated user if it exists and then pass it to the component. If there is no authenticated user it redirects to the login page.

```
export const withAuth = <T extends object>(
  C: React.ComponentClass<T> | React.FC
) => {
  return class AuthComponent extends React.Component<T> {
    static async getInitialProps({
      apolloClient,
      ...ctx
    }: NextContextWithApollo) {
      const response = await apolloClient.query<MeQuery>({ query: meQuery });
      if (!response || !response.data || !response.data.me) {
        redirect(ctx, "/login");

        return {
          me: null
        };
      }

      return {
        me: response.data.me
      };
    }

    render() {
      return <C {...this.props} />;
    }
  };
};

```

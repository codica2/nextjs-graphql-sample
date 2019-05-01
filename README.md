<h1 align="center">Next.js project example with TypeScript & GraphQl</h1>

<p align="center">
  <a href="https://nextjs.org/" target="_blank"><img src="https://img.shields.io/badge/Next.js-v8.0.3-blueviolet.svg"></a>
  <a href="https://reactjs.org/" target="_blank"><img src="https://img.shields.io/badge/React-v16.8.3-%238DD6F9.svg?logo=React"></a>
  <a href="https://www.typescriptlang.org/" target="_blank"><img src="https://img.shields.io/badge/Typescript-v3.2.4-blue.svg?logo=TypeScript"></a>
  <a href="https://graphql.org/" target="_blank"><img src="https://img.shields.io/badge/GraphQL-v14.1.1-ff69b4.svg?logo=GraphQL"></a>
  <a href="https://www.styled-components.com/" target="_blank"><img src="https://img.shields.io/badge/%F0%9F%92%85%20Styled%20Components-v4.1.3-%23de9b62.svg"></a>
  <a href="https://styled-system.com/" target="_blank"><img src="https://img.shields.io/badge/Styled_system-v4.0.5-%EC4A3F.svg"></a>
  <a href="https://github.com/prettier/prettier" target="_blank"><img src="https://img.shields.io/badge/styled_with-prettier-ff69b4.svg"></a>
  <a href="https://github.com/codica2" target="_blank"><img src="https://img.shields.io/badge/licence-MIT-green.svg" /></a>
</p>

## Description

This is an `example/boilerplate` of a [nextjs](https://github.com/zeit/next.js) project using [Typescript](https://github.com/Microsoft/TypeScript) and [Apollo](https://www.apollographql.com/docs/react/).

The main idea behind the example is to show the best typescript and GraphQL usage by integration of the Apollo client and types generating using [GraphQL Code Generator](https://github.com/dotansimha/graphql-code-generator).

Moreover, for writing styles it suggests no less interesting approach with combining styled-components and styled-system [Read more](#styling). :smiley:

In this example, Apollo is integrated by wrapping our pages with [HOC](https://reactjs.org/docs/higher-order-components.html). Using the HOC pattern we're able to pass down a central store of query result data created by Apollo into our React component hierarchy defined inside each page of our Next application.

### Table of Contents

- [Usage](#usage)
- [File structure](#file-structure)
- [Configuration](#configuration)
- [Making GraphQl queries and mutations](#making-graphql-queries-and-mutations)
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

## File structure

```
    .
    ├── ...
    ├── generated/             # generated graphql types
    ├── graphql/               # graphql queries and mutations splitted by entities
    ├── interfaces/            # custom ts interfaces
    ├── utils/                 # app utilities
    ├── pages/                 # next.js pages
    ├── server/                # custom server
    ├── views
    │   ├── components/        # components
    │   ├── layouts/           # application layouts
    │   ├── styled/            # styled components + styled system types
    │   └── ui/                # ui components(Button, Inputs, etc.)
    └── ...
```

## Configuration

Also, this example is easily configurable. The main config file `next.config.js` is placed in the root. You can engage all the needed [plugins](https://github.com/zeit/next-plugins) there. [Next-compose-plugins](https://github.com/cyrilwanner/next-compose-plugins) is used for composing all the plugins together, It provides a cleaner API for enabling and configuring plugins.

```ts
const withPlugins = require("next-compose-plugins");
const withTypescript = require("@zeit/next-typescript");
const withLess = require("@zeit/next-less");

module.exports = withPlugins(
  [
    // add a plugin without a configuration
    withTypescript,

    // add a plugin with specific configuration
    [
      withLess,
      {
        lessLoaderOptions: {
          javascriptEnabled: true
        }
      }
    ]
  ],
  nextConfig // next.js configuration
);
```

## Making GraphQl queries and mutations

In order to make a GraphQL query or request, firstly we should describe the schemas, all of them should be placed in the `graphql folder`, we actually splitted them by entities for convenience of use.

Then we must generate typescript types [read more](#graphql-types). After this, you could use these generated components:

```tsx
<LoginComponent>
{(<LoginMutation>, <LoginVariables>) => (
  ...code
)}
</LoginComponent>

```

## Styling

This exapmle uses styled-components along with styled-system approach.

[Styled-components](https://github.com/styled-components/styled-components) is a CSS-in-JS library which allows you to write actual CSS code to style your components.

[Styled-System](https://github.com/styled-system/styled-system) provides you with a set of utilities that map props to your design system. It uses the concept of style functions. Each style function exposes its own set of props that style elements based on values defined in your `design system theme`. It has a rich [API](https://github.com/styled-system/styled-system#api) with functions for most CSS properties.

The `Design Styled System` theme object is intended to be a general purpose format for storing design system style values and scales:

```ts
const theme = {
  breakpoints: [32, 48, 64],
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  fontSizes: [12, 14, 16, 20, 24, 36, 48, 80, 96],
  fontWeights: [100, 200, 300, 400, 500, 600, 700, 800, 900],
  colors: {
    primary: "#000",
    secondary: "#ccc",
    ...
  },
   buttonSizes: {
    xs: `
      height: 16px;
      padding: 0 16px;
      font-size: 10px;
    `,
    sm: `
      height: 24px;
      padding: 0 24px;
      font-size: 13px;
    `,
    md: `
      height: 34px;
      padding: 0 34px;
      font-size: 14px;
      letter-spacing: 0.4px;
    `
  ...
```

Our styled components utilize what we call `system props` to apply a custom set of props to a component. We adopted this approach by creating seperate types like layout, typography, flexbox, and others. This means that every component is guaranteed to have the same API.

Here is an example of the `common type`, we use the `compose` utility to create custom type that each new component can use.

```ts
import * as SS from "styled-system";

// typescript type
export type CommonProps = SS.SpaceProps &
  SS.WidthProps &
  SS.HeightProps &
  SS.ColorProps &
  SS.FontSizeProps;

// common type
export default SS.compose(
  SS.space,
  SS.width,
  SS.height,
  SS.color,
  SS.fontSize
);
```

This is a component for styling `headings`, here we import our custom `common` and `typography` functions, moreover, we could extend it with our custom css styles. Also, we add some default `styled-system` props.

```ts
import styled, { StyledComponent } from "styled-components";
import { borders, BordersProps } from "styled-system";

import common, { CommonProps } from "./types/common";
import typography, { TypographyProps } from "./types/typography";

type Props = CommonProps & TypographyProps & BordersProps;

const Heading: StyledComponent<Props> = styled("h1")(
  { margin: "0 0 20px" },

  common,
  borders,
  typography
);

Heading.defaultProps = {
  fontSize: [2, 3, 4],
  fontWeight: 5,
  color: "primary"
};

Heading.displayName = "Heading";

export default Heading;
```

Eventually, we can easily reuse this styled component adding different props.

```ts
// (theme.fontSizes[4])
<Heading fontSize={4} />

// (theme.space[3])
<Heading m={2} />

// (theme.colors.blacks[0])
<Heading color="blacks.3" />
```

## Features

### GraphQL types

To generate GraphQL types out of GraphQL schemas we use [GraphQL Code Generator](https://github.com/dotansimha/graphql-code-generator), it takes all our GraphQL queries and mutations from `graphql/**/*` and generates typescript components into a `generated/apolloComponents.tsx` file, so after you could use it inside your components. In order to generate it run `npm run generate` or `yarn generate` command. You should regenerate types every time any graphql mutation or query changes :exclamation:

### Protected routes

For catching authentication errors we use HOC, it makes an initial GraphQL query to get the authenticated. If there is no authenticated user it redirects to the login page.

```ts
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

## License

nextjs-graphql-sample is Copyright © 2015-2019 Codica. It is released under the [MIT License](https://opensource.org/licenses/MIT).

## About Codica

[![Codica logo](https://www.codica.com/assets/images/logo/logo.svg)](https://www.codica.com)

We love open source software! See [our other projects](https://github.com/codica2) or [hire us](https://www.codica.com/) to design, develop, and grow your product.

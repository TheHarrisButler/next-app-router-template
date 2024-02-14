## Overview

This is a project template for building modern web applications that comes pre configured with.

- Next app router
- Tailwind css
- Next Auth

> Thanks to the [NextAuth](https://github.com/nextauthjs/next-auth-example) team for providing the foundation for this template.

## Getting Started

### 1. Configure your local environment

Copy the .env.local.example file in this directory to .env.local (which will be ignored by Git):

```
cp .env.local.example .env.local
```

### 2. Configure Authentication Providers

1. Review and update options in `auth.ts` as needed.

2. When setting up OAuth, in the developer admin page for each of your OAuth services, you should configure the callback URL to use a callback path of `{server}/api/auth/callback/{provider}`.

e.g. For Google OAuth you would use: `http://localhost:3000/api/auth/callback/google`

A list of configured providers and their callback URLs is available from the endpoint `api/auth/providers`. You can find more information at https://authjs.dev/getting-started/providers/oauth-tutorial

1. You can also choose to specify an SMTP server for passwordless sign in via email.

### 3. Start the application

To run your site locally, use:

```
yarn dev
```

To run it in production mode, use:

```
yarn build
yarn start
```

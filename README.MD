# Expo Supabase Auth

This is a template for using [Supabase](https://supabase.io) with [Expo SDK 48](https://expo.io) built with [React Native Rapi UI](https://rapi-ui.kikiding.space/). This repo uses the Supabase V2 Client

## Requirements

- [Node.js](https://nodejs.org/en/)
- [Yarn](https://yarnpkg.com/)
- [Expo CLI](https://docs.expo.io/workflow/expo-cli/)
- [Supabase CLI](https://supabase.io/docs/guides/cli)
- [ngrok](https://ngrok.com/)

## Getting Started

1. Clone this repo
2. Run `yarn` to install dependencies
3. Run `yarn start:expo` to start the expo dev server
4. Run `yarn start:supabase` to start the supabase dev server

## Deploying

When you are ready to deply the app, please modify the supabase url and supbase key in `src/utils/supabase.ts` to your own.

## Thank you

This template is based on the [React Native Expo Template Repo](https://github.com/codingki/react-native-expo-template)`/template-typescript-bottom-tabs-supabase-auth-flow` and updated to use the supabase v2 client and the Expo SDK 48.
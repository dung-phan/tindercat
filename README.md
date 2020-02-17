# CATINDER

## [ Check out the deployed version on Firebase! ](https://catinder-2020.firebaseapp.com/)

## What this project is about

My own attempt to learn and build an Angular app using the Cat API.

## Table of contents:

- **[Technologies used](#technologies-used)**
- **[Features](#features)**
- **[Instructions](#instructions)**
- **[File Structure](#file-structure)**
- **[Improvements](#improvements)**
- **[Angular-Cli](#angular-cli)**

## Technologies used

#### Click links to view some samples in this project

- **[Angular](./src/app/cats/cats.component.ts)**
- **[RxJS](./src/app/cats/cats-list/cats-search/cats-search.service.ts)**
- **[Front-end routing](./src/app/app-routing.module.ts)**
- **[Form validation (real-time)](./src/app/cats/cats-list/cats-search/cats-search.component.ts)**
- **[TypeScript](./src/app/cats/cats-list/cats-details/cats-details.model.ts)**
- **[API Fetching](./src/app/cats/cats.component.ts)**

## Features

As a user:

- You can browse cat images, by either voting like or dislike to see the next picture
- You can search for a breed and see some piece of information about it.

## Instructions

1. Navigate to the [repository](https://github.com/dung-phan/catssignment)
2. Clone locally using
   `git@github.com:dung-phan/catssignment.git`
3. Install dependencies using `npm install`
4. Start your server using `ng serve`
5. Navigate to app in [browser](http://localhost:4200)
6. Enjoy!

## File Structure

```
-src
 -app
  -cats
   - cats-list
     - cats-details
     - cats-search
  -home
  -images
  -navigation
-README.md
```

## Improvements

- There is currently no state management due to the scope of this app. This can be helpful to see a user's vote for images
- The app is designed for laptop users only and therefore is not responsive.

## Angular Cli

This project was scaffolded using the Angular Cli

**[The standard docs can be found in here](./angular-cli.docs.md)**

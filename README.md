<div align="center">
  <p align="center">
    <img src="./logo.svg" alt="Yumpingo" width="750px" />
  </p>
</div>

# Yumpingo front-end tech challenge

Yumpingo is a data-driven award-winning platform that helps restaurant leaders to take better decisions, faster, and with a
complete certainty of how to optimize customer satisfaction across their business at location, shift, server and dish level.

Yumpingo is seen as a game-changer in the industry and we're happy you applied to be part of our big team.

The tech challenge is designed to understand the candidate's knowledge of basic Javascript principles as well as the React
ecosystem.

## Prerequisites

This project requires [Node](http://nodejs.org/) (at least version 14) and [NPM](https://npmjs.org/) (at least version 6).
To make sure you have them available on your machine, try running the following command:

```shell
$ node --version
v14.6.0

$ npm --version
6.14.0
```

## Table of contents

- [Yumpingo front-end tech challenge](#yumpingo-front-end-tech-challenge)
    - [Prerequisites](#prerequisites)
    - [Table of contents](#table-of-contents)
    - [Tasks](#tasks)
        - [Task 1](#task-1)
        - [Task 2](#task-2)
        - [Task 3](#task-3)
    - [Usage](#usage)

## Tasks

The challenge divides into 3 main tasks:

### Task 1

Have a look at the Homepage's code, you will notice data arrives from a (mocked) API and are saved in the
page component's state.

Rewrite the `fetchUser` function to fetch "real" data from the following url: 
`https://random-data-api.com/api/users/random_user`.

Then use a state manager to save and brought the data to the component.

### Task 2

Write the body of the `fetchRestaurants` function so that it fetches the list of available restaurants from
the following url:
`https://random-data-api.com/api/restaurant/random_restaurant?size=10`

Then use the retrieved data to create the master/detail page

### Task 3

Given the created master/detail page, give the user the possibility to edit the detail of your restaurants:
Once the user changes an entry into the detail view, inform the store so that the change is reflected into the master view

## Usage

### Serving the app

To run the app in the development mode, type;
```shell
$ npm start
```

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any linting or compiling errors in the console.

## Delivery

* Fork this repository and make it private.
* Once your code is ready to be delivered, add [antonioru](https://github.com/antonioru) as collaborator
* Write a friendly email :)

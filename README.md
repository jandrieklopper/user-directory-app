# React User Directory

## Description

A React app being used to fetch a list of users and populate the table with the API data. Using the search field the user can search for a known user using their name or email. The API data returned in this application comes from Mock API Users and populates the fields. A user can also add a new user to the list using the Add User Form.

## Table of Contents
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [Technologies and APIs used](#technologies-and-apis-used)

## Prerequisites

Before you begin setting up the User Directory App, ensure you have the following prerequisites installed:
1. Node.js LTS: [Download for Windows/Mac](https://nodejs.org/en/).
2. If you have Node.js LTS installed, ensure you have the latest version installed by running the following command

```
node --version
```

3. If you don't have the latest version of Node.js LTS installed, follow step 1.

## Installation

Follow these steps to set up the User Directory App on your local environment:

1. Open the Command Prompt or Terminal: Navigate to the root directory of your project. For example, use the cd command to move to your project directory: 

```
cd C:\Downloads\user-directory-app
```

2. Install the project dependencies by running the command below:

```
npm install
```

3. Start the project on your local environment by running the command below:

```
npm start
```

Runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Usage

- Enter a name or email in the search box to query any of the columns.
- To add a new user enter the name, email, phone number and company name.
- This is a single page React app.

## Technologies and APIs used

- Bootstrapped with [Create React App](https://github.com/facebook/create-react-app)
- React
- Bootstrap
- Mock API: https://jsonplaceholder.typicode.com/users.
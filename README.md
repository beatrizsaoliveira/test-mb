# Task 2: Automation Testing

Test project for a big car company, where the scope of the project is to make a workflow on their website to find the values of cars, for a certain model, between £15000 and £60000.

### 1. Clone the repository
```$ git clone https://github.com/beatrizsaoliveira/test-mb.git```

### 2. Install the dependencies
```$ npm install```

or

```$ yarn install```

### 3. Run it through one of the browsers:
- Chrome

```$ yarn cy:open --browser chrome```

or

```$ npm run cy:open --browser chrome```

- Edge

```$ yarn cy:open --browser edge```

or

```$ npm run cy:open --browser edge```

- Firefox

```$ yarn cy:open --browser firefox```

or

```$ npm run cy:open --browser firefox```

-------------------------------------------------------------------------------------------

## The result will be saved in the root of the project, in the file *"price.txt"* and the screenshot in the folder *"screenshot/test"*.

-------------------------------------------------------------------------------------------

## The following errors were found:
- When entering the site, a tooltip of the login component appears;
- During the test runs some react errors were noticed in the browser dev tools console;
- Cookies did not persist between some test steps, even using a method for this;
- In some test runs, two overlapping cookie banners opened.
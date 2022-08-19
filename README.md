
## Table of Contents

- [Table of Contents](#table-of-contents)
- [Abstract](#abstract)
- [Deployed Link](#deployed-link])
- [Technologies Used](#technologies-used)
- [Application & Component Wireframes](#application-and-component-wireframes)
- [Context and Features](#context-and-features)
- [User Stories](#user-stories)
- [Future Features](#future-features)
- [Application Set-Up](#application-set-up)
- [Contributor LinkedIns and GitHubs](#contributor-linkedin-and-github)
- [Project Specs](#project-specs)

## Abstract

- Curious Reader is built with TypeScript in the React.js framework.  Our application is built for users that are wanting to find some awesome new books to read per _New York Times Best Sellers_ lists. 

## Deployed Link

- Check out our application [here!]() 

## Application Wireframe and Component Architecture

### Application Wireframes

![Curious Reader Wireframe](https://user-images.githubusercontent.com/95496577/181833601-0fab9089-edde-493d-a01a-3c8ebe30d9e9.png) 

### Component Architecture

![Curious Reader Component Wireframe](https://user-images.githubusercontent.com/95496577/181833596-9272083a-7b94-4cf4-871c-7c801fc6e87e.png) 

## Technology Stack

- React.js
- TypeScript
- React Router
- CSS
- Cypress.io
- Fetch API
- Postman

## User Stories

- As a user I should see a homepage that previews the book genres with the top book from each category. 

- As a user I should be able to select different book genres, which filters the books and book details displayed based on genre. 

- As a user I should be able to go back to the homepage where I can select a different genre of books to see. 

## Context and Features

- NY Times Primes is a React.js application built with TypeScript and React hooks. As such, it required thorough type checking of the API data, and properties that were being passed around to other components. Given the design and data structure of our application it made the most sense to make an interfaces file. The interfaces were designed to be reusable type checks for our data. This allowed us to import said types wherever we needed them throughout our component architecture. We kept our typing strict on our data sets which allowed us to develop our application without any type errors. 

- Aside from TypeScript, one of the primary features of our application is the ability to see the top books from each specific genre. This took some very careful page and endpoint manipulation using React Router. Our `Navbar` component contains every genre from _The New York Times Best Sellers_ lists. Each genre in the `Navbar` component is a `NavLink` that navigates to the respective genre page `Route`.


## Future Features

Some future features we’d like to add to this application are:

- Add a search/filtering functionality for books.

- Random book suggestion game. 

- Searching for books based on the date they were published in _The New York Times Best Sellers_ lists.

- Supplement our Cypress tests with unit tests and integration tests by using the React Testing Library.

## Application Set-Up

1. Fork repository on GitHub.

2. `Git clone` the repository to your local machine.

4. `Cd` into the directory.

5. Run `npm install` in your terminal to install project dependencies.

6. Run `npm start` in the terminal to see the application. 

7. Run `npm run cypress` in the terminal  to run cypress tests. 

8. When finished with the application, type `Control + C` in the terminal to stop running the application. 

## Contributor LinkedIn’s

- [Catlyn Bowles: LinkedIn](https://www.linkedin.com/in/catlyn-bowles/)      
- [Megan Schuetz: LinkedIn](https://www.linkedin.com/in/megan-schuetz/)     
- [Michael Harrison: LinkedIn](https://www.linkedin.com/in/michael-j-harrison57/)    
- [Nickolai Orlov: LinkedIn](https://www.linkedin.com/in/nickolaio/)     

## Contributor GitHubs’s

- [Catlyn Bowles: GitHub](https://github.com/catlynbowles)       
- [Megan Schuetz: GitHub](https://github.com/megschuetz)       
- [Michael Harrison: GitHub](https://github.com/mikeharrison57)     
- [Nickolai Orlov: GitHub](https://github.com/orlov-n)      

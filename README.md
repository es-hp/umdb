# Coding Templte SE Assignment: Bootstrap Basics...

To create a mock website using HTML and Bootstrap without using CSS.

# User Management Database (UMDB)

A mock website for a user management database software

## settings.html (and its sub-links), about.html, contact.html

Placeholder pages with no content (except nav bar).

## index.html

### <nav>

- Side navigation that is open at larger screen sizes and collapses at smaller screen sizes with a hamburger menu
  - Used a "workaround" method by splitting the screen using <div class="row"> and <div class="col"> (has its flaws)
  - Used @media to make the position "absolute" on smaller screens
- Included a dropdown menu for "settings" link

### Main body/section

- Has background image that covers the entire section.
- Has an image using .img-fluid
- Has two images that use .rounded-circle that resizes with screen size
- Has two buttons where one uses .d-none on smaller screens

## registration.html

- Only accessible by primary button on homepage (index.htm)
- Has form created using only Bootstrap classes.
- Form validation done using Bootstrap.

## form-validation.JS

- Copied from Bootstrap Document

## dashboard.html

- Uses the .row and .col Bootstrap classes to create three responsive cards
- Used icons from Bootstrap, which were imported using cdn method

## users.html

- Incorporated dropdown class from Bootstrap where the "Add new user" form expands from collapsed button.
- "Add new user" form has form validation (using Bootstrap's JS)
- Created a hard coded table that is responsive and highlights rows on hover using Bootstrap classes.
- Has an input group for mock search bar
- Created a simple JS code (user-status.JS) for changing the color of text for user status (green/success for "active" and gray/secondary for "inactive")

## gitignore

- Created test files and folders to test how .gitignore file works

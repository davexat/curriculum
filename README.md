# Curriculum Vitae Website

## Description

This project is a personal curriculum vitae website built using HTML, CSS, JavaScript, and Sass. It showcases my skills, experience, and projects in a visually appealing and interactive way. The main goal is to provide an online platform to present my professional background and skills to potential employers and collaborators.

## Table of Contents

- [Description](#description)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Features

- Responsive Design: The website is designed to be responsive and accessible on various devices.
- Interactive Elements: JavaScript adds dynamic elements.
- Sass Styling: Sass is used for modular and maintainable CSS.
- Sections: Includes About, Projects, and Contact sections.

## Technologies Used

<a href="https://www.javascript.com/">![Static Badge](https://img.shields.io/badge/JavaScript-black?style=for-the-badge&logo=javascript&logoColor=white&logoSize=auto&labelColor=%23d8c108)</a>
<a href="https://www.w3.org/html/">![Static Badge](https://img.shields.io/badge/HTML-black?style=for-the-badge&logo=html5&logoColor=white&logoSize=auto&labelColor=%23E34F26)</a>
<a href="https://www.w3.org/Style/CSS/">![Static Badge](https://img.shields.io/badge/CSS-black?style=for-the-badge&logo=css&logoColor=white&logoSize=auto&labelColor=%23663399)</a>
<a href="https://sass-lang.com/">![Static Badge](https://img.shields.io/badge/Sass-black?style=for-the-badge&logo=sass&logoColor=white&logoSize=auto&labelColor=%23CC6699)</a>

## Project Structure

```
curriculum/
├── components/
│   ├── Footer.jsx                  <- Footer component
│   ├── Navbar.jsx                  <- Navbar component
│   └── TechItem.jsx                <- TechItem component
├── pages/
│   ├── _app.jsx                    <- Main App component
│   ├── about.jsx                   <- About page
│   ├── contact.jsx                 <- Contact page
│   ├── index.jsx                   <- Home page
│   └── projects.jsx                <- Projects page
├── public/
│   ├── fonts/                      <- Website fonts
│   ├── icons/                      <- Website icons
│   ├── images/                     <- Website images
│   ├── scripts/                    <- Website scripts
├── styles/
│   ├── _base.scss                  <- Base styles
│   ├── _components.scss            <- Components styles
│   ├── _contact.scss               <- Contact styles
│   ├── _footer.scss                <- Footer styles
│   ├── _layout.scss                <- Layout styles
│   ├── _mixins.scss                <- Sass Mixins for the website
│   ├── _navbar.scss                <- Navbar styles
│   ├── _sections.scss              <- Sections styles
│   ├── _social-links.scss          <- Social links styles
│   ├── _variables.scss             <- Sass variables for the website
│   └── main.scss                   <- Main styles
├── LICENSE                         <- MIT License
├── README.md                       <- This README file
└── package.json                    <- Package dependencies
```

## Installation

To view the website locally, first install the dependencies by running `npm install`. Then, compile the Sass files using the command `npm run build:sass`.

## Usage

Feel free to browse the website. To run the project locally, follow these steps:

1.  Clone the repository: `git clone https://github.com/davexat/curriculum`
2.  First install the dependencies by running `npm install`.
3.  Then, compile the Sass files using the command `npm run build:sass`.
4.  Open `pages/index.html` in your browser.

## Contributing

Contributions are welcome! If you find any issues or have suggestions, please feel free to submit a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

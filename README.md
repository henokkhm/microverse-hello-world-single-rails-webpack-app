<a name="readme-top"></a>

<!-- TABLE OF CONTENTS -->

# 📗 Table of Contents

- [📗 Table of Contents](#-table-of-contents)
- [Hello Rails - Webpack - React](#hello-rails---webpack---react)
  - [🛠 Built With ](#-built-with-)
    - [Tech Stack ](#tech-stack-)
    - [Key Features ](#key-features-)
  - [🚀 Live Demo ](#-live-demo-)
  - [💻 Getting Started ](#-getting-started-)
    - [Prerequisites](#prerequisites)
    - [Setup](#setup)
    - [Install](#install)
    - [Usage](#usage)
    - [Run tests](#run-tests)
    - [Deployment](#deployment)
  - [👥 Authors ](#-authors-)
  - [🔭 Future Features ](#-future-features-)
  - [🤝 Contributing ](#-contributing-)
  - [⭐️ Show your support ](#️-show-your-support-)
  - [🙏 Acknowledgments ](#-acknowledgments-)
  - [📝 License ](#-license-)

<!-- PROJECT DESCRIPTION -->

# Hello Rails - Webpack - React<a name="about-project"></a>

This project bootstraps a [Ruby on Rails](https://rubyonrails.org/) application and uses [Webpack](https://webpack.js.org/) to add [React.js](https://react.dev/) to it. On the frontend, the app uses [React Router](https://reactrouter.com/en/main) for navigation and [Redux Toolkit](https://redux-toolkit.js.org/) for state management. The app fetches a random greeting from the Rails backend, and displays it on the homepage. The user can click on the "Randomize" button to get a greeting in a different language.

## 🛠 Built With <a name="built-with"></a>

### Tech Stack <a name="tech-stack"></a>

<details>
  <summary>Client</summary>
  <ul>
    <li><a href="https://rubyonrails.org/">Ruby on Rails</a></li>
    <li><a href="https://react.dev/">React</a></li>
    <li><a href="https://reactrouter.com/en/main/">React Router v6</a></li>
    <li><a href="https://redux-toolkit.js.org/">Redux Toolkit</a></li>
    <li><a href="https://developer.mozilla.org/en-US/docs/Web/HTML">HTML</a></li>
    <li><a href="https://developer.mozilla.org/en-US/docs/Web/CSS">CSS</a></li>
  </ul>
</details>

<details>
  <summary>Linters</summary>
  <ul>
    <li><a href="https://github.com/rubocop/rubocop">Rubocop</a></li>
    <li><a href="https://stylelint.io/">Stylelint</a></li>
  </ul>
</details>

<!-- Features -->

### Key Features <a name="key-features"></a>

- **Homepage:** displays a greeting  in a random language 
- **Randomize:** fetches a new greeting from the backend when clicked


<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 🚀 Live Demo <a name="live-demo"></a>


The app is currently not deployed.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->

## 💻 Getting Started <a name="getting-started"></a>

To get a local copy up and running, follow these steps.

### Prerequisites

In order to run this project you need:

- <a href="https://www.ruby-lang.org/en/">Ruby</a>
- <a href="https://rubyonrails.org/">Ruby on Rails</a>
- <a href="https://nodejs.org/en/download">Node.js</a>
- <a href="https://docs.npmjs.com/downloading-and-installing-node-js-and-npm">npm</a>

### Setup

Clone this repository to your desired folder:

```sh
  cd desired-folder
  git clone https://github.com/henokkhm/microverse-hello-world-single-rails-webpack-app
```

### Install

Install this project with:

```sh
  cd microverse-hello-world-single-rails-webpack-app
  bundle install
  npm install
```

### Usage

- Before you can run the project, you have to use the build command to generate the HTML, CSS and JS assets using Webpack.
  
`npm run build`

- To start the app in the development mode on your local machine, simply run:

`bin/dev`

Then open [http://localhost:3000](http://localhost:3000) to view it in your browser. The page will reload when you make changes. You may also see any lint errors in the console.

> **Note:** After making changes in the JavaScript files, you have to run the build command again for the changes to be reflected in the app.
> The following command that combines the build and run steps may be helpful.
> 
>  `npm run build && bin/dev`
>
> You will also need to refresh the page in the browser in order to see the changes.
> 

- To run the linters, run: 

`bundle exec rubocop`
`npm run lint`

### Run tests

There are currently no tests for this app.

### Deployment

This application is currently not deployed.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- AUTHORS -->

## 👥 Authors <a name="authors"></a>

👤 **Henok K Hailemariam**

- GitHub: [@henokkhm](https://github.com/henokkhm)
- Twitter: [@henokkhm](https://twitter.com/henokkhm)
- LinkedIn: [henokkhm](https://www.linkedin.com/in/henokkhm/)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- FUTURE FEATURES -->

## 🔭 Future Features <a name="future-features"></a>

- [ ] **Add tests**

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTRIBUTING -->

## 🤝 Contributing <a name="contributing"></a>

Contributions, issues, and feature requests are welcome!

Feel free to check the [issues page](../../issues/).

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- SUPPORT -->

## ⭐️ Show your support <a name="support"></a>

If you like this project, you can contribute to it. You are also welcome to give it a star on GitHub.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ACKNOWLEDGEMENTS -->

## 🙏 Acknowledgments <a name="acknowledgements"></a>

I would like to thank Microverse for teaching and enforcing professional level practices.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- LICENSE -->

## 📝 License <a name="license"></a>

This project is [MIT](./LICENSE) licensed.

<p align="right">(<a href="#readme-top">back to top</a>)</p>
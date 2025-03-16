<div align="center">
  <img alt="KS_LOGO" src="docs/logo-dark.svg" height="64" />
</div>

<br>
<p align="center">
Another Portfolio
</p>
<p align="center">
crafted with <span style="color: #8b0000;">&hearts;</span> by <a href="https://kaifsaleem.me">Kaif Saleem</a>.
</p>
<p align="center">
    <img src="https://img.shields.io/badge/version-1.0.0-yellowgreen" alt="version 1.0.0"/>
    <img src="https://img.shields.io/badge/license-MIT-brightgreen" alt="license MIT"/>
    <img src="https://img.shields.io/github/issues-pr-raw/kaifsaleem1405/another-portfolio.svg" />
    <img src="https://img.shields.io/github/issues-raw/kaifsaleem1405/another-portfolio.svg"/>
    <img src="https://img.shields.io/badge/author-Kaif%20Saleem-orange" alt="author Kaif Saleem"/>
</p>

> Kaif's Portfolio showcasing software testing and development expertise, built on NextJS!

## Built With

This website is built with <span style="color: #8b0000;">&hearts;</span> on [NextJS](https://nextjs.org/), statically typed in [TypeScript](https://www.typescriptlang.org/) following the best practises in the market.

## Installation 🔧

Install dependencies

```
$ yarn
```

Building

```
$ yarn build
```

## Setup Database 📦

1. Create a MongoDB database
2. Import the provided JSON files from the `data/` directory:
```bash
$ mongoimport --uri="your-mongodb-uri" --collection=details --file=data/personal-details.json
$ mongoimport --uri="your-mongodb-uri" --collection=companies --file=data/companies.json
$ mongoimport --uri="your-mongodb-uri" --collection=projects --file=data/projects.json
```
3. Copy `.env.example` to `.env` and update with your MongoDB URI

## Required Assets 🖼️

Place the following files:
1. Profile picture: `public/images/kaif_saleem.svg`
2. Resume: `public/KAIF_SALEEM_RESUME.pdf`
3. Company logo: `public/images/companies/cubosquare.png`
4. Project image: `public/images/projects/examcell.webp`

## Running Server 🚀

Start the development server

```
$ yarn dev
```

Start the server

```
$ yarn start
```

## Other Commands 🚧

Use ESLint to check all files

```
$ yarn lint
```

Format the code using Prettier

```
$ yarn format
```

## Features Added ⭐

1. Loading states added to main components:
   - Landing page shows loader until personal details are loaded
   - Projects section shows loader until project details are loaded
   - Work section shows loader until company details are loaded

## License 📜

`Portfolio` is available under the MIT license. See the LICENSE file for more info.

## Contributing 🤝

1. Fork this repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m '✨ Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

Please read `Contributing.md` for details on our code of conduct, and the process for submitting pull requests to us.

## Credits 🙏

This portfolio is based on the template created by [Harsh Goel](https://harshgoel.me). Thank you for the amazing work!

## Forking this repo 🚨

You are free to use this code for your own portfolio, but please give appropriate credit by linking back to [Harsh Goel](https://harshgoel.me) and [Kaif Saleem](https://kaifsaleem.me).
# portfolio-nextjs

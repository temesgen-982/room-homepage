# Frontend Mentor - Room homepage solution

This is a solution to the [Room homepage challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/room-homepage-BtdBY_ENq). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Navigate the slider using either their mouse/trackpad or keyboard

### Screenshot

![](./screenshot.jpg)

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow

### What I learned

I created this bat file to automate creating a simple scss folder structure.

```
@echo off
REM Create root folder
mkdir scss
cd scss

REM Create subfolders
mkdir abstract
mkdir globals
mkdir blocks
mkdir composition
mkdir utility

REM Create files in abstract
cd abstract
type nul > _breakpoints.scss
type nul > _functions.scss
(
    echo @forward "breakpoints";
    echo @forward "functions";
) > _index.scss
cd ..

REM Create files in globals
cd globals
type nul > _colors.scss
type nul > _fonts.scss
type nul > _resets.scss
type nul > _boilerplate.scss
(
    echo @forward "colors";
    echo @forward "fonts";
    echo @forward "resets";
    echo @forward "boilerplate";
) > _index.scss
cd ..

REM Create empty _index.scss for remaining folders
cd blocks
type nul > _index.scss
cd ..

cd composition
type nul > _index.scss
cd ..

cd utility
type nul > _index.scss
cd ..

REM Create main entry SCSS file
(
    echo @use "abstract";
    echo @use "globals";
    echo @use "blocks";
    echo @use "composition";
    echo @use "utility";
) > styles.scss

echo SCSS architecture setup complete! 🎉
pause

```

### Useful resources

- [Example resource 1](https://www.example.com) - This helped me for XYZ reason. I really liked this pattern and will use it going forward.
- [Example resource 2](https://www.example.com) - This is an amazing article which helped me finally understand XYZ. I'd recommend it to anyone still learning this concept.

## Author

- Website - [Add your name here](https://www.your-site.com)
- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/yourusername)
- Twitter - [@yourusername](https://www.twitter.com/yourusername)

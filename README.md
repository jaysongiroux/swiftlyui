A lightweight, accessible and responsive react component library for your next project.


<p align="center"><img src="https://github.com/jaysongiroux/swiftlyui/blob/master/public/SWIFTLY-UI.png" alt="drawing" width="200"/></p>

# SwiftlyUI *(In development)*
A lightweight, accessible and responsive react component library for your next project.

![Master Branch CICD](https://github.com/jaysongiroux/swiftlyui/actions/workflows/main.yml/badge.svg?branch=master)
![GitHub commits since latest release (by date) for a branch](https://img.shields.io/github/commits-since/jaysongiroux/swiftlyui/latest/master)
![GitHub Release Date](https://img.shields.io/github/release-date/jaysongiroux/swiftlyui)
[![npm version](https://badge.fury.io/js/swiftlyui.svg)](https://badge.fury.io/js/swiftlyui)


# Installation 
## npm: 
```
npm install swiftlyui
```
## yarn: 
```
yarn add swiftlyui
```

# Getting started with SwiftlyUI
`index.css` Needs to be imported in your project for swiftlyUI's styles to be applied to each of the components. `index.css` needs to be imported once in the project, it is recommended that `swiftlyui/index.css` is imported at the base of your project.
```js
import React from 'react';
import { Button } from 'swiftlyui'
import 'swiftlyui/index.css'

function App(){
  return (
    <Button 
      className="swiftlyButton" 
      buttonColor="#fff" 
      contentColor="#123" 
      onClick={() => console.log('clicked')}
    >
      Click me!
    </Button>)
}
```

# Documentation 
## Docs Hosting
[Online Hosting](master--633e84e96532344a299022b4.chromatic.com/)

## Running documents locally
We use storybook for local docs!
```
yarn storybook
```

# Roadmap
Future plans for the library are to fill Swiftly-UI with more accessible components that help developers build out their projects more quickly

# License 
This project is licensed under the terms of the [MIT License](https://github.com/mui/material-ui/blob/master/LICENSE)

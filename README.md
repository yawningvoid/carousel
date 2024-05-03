# Carousel Music Browser

## Description

This project is a React application that uses the Subsonic API to display a carousel of the 10 most recently added music albums. The carousel is composed of two main components: a gallery and an album. This is an example of the compound component design pattern, where the `Carousel` component is composed of smaller, more specific components.

The gallery displays album covers in a horizontal scrolling view, with left and right buttons to select an album. The currently selected album is always centered in the view, and scrolling past the end of the list wraps around to the other end. The title and track list for the currently selected album are also displayed.

## Installation

1. Clone the repository: `git clone https://github.com/yawningvoid/carousel`
2. Navigate to the project directory: `cd project`
3. Install dependencies: `npm install`

## Usage

To start the application, run `npm start`. This will start the application and open it in your default web browser.

## API

This project uses the Subsonic API. The base URL is http://demo.subsonic.org/rest/. 
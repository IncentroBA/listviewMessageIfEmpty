## ListviewMessageIfEmpty

Pluggable web widget to display custom input in case a listview is empty. The widget also works with nested listviews.

## Typical usage scenario

When an empty listview should have a custom message in case it's empty.

## Features and limitations

### Features

Place a listview inside the widget. Place other text / widgets inside the empty listview widget section.

1. Install NPM package dependencies by using: `npm install`. If you use NPM v7.x.x, which can be checked by executing
   `npm -v`, execute: `npm install --legacy-peer-deps`.
1. Run `npm start` to watch for code changes. On every change:
    - the widget will be bundled;
    - the bundle will be included in a `dist` folder in the root directory of the project;
    - the bundle will be included in the `deployment` and `widgets` folder of the Mendix test project.

### Limitations

The widget doesn't really do any more than described.

With nested listviews, you would need to use another Listview Message If Empty to configure the inner listview(s).

## Dependencies

A listview, selected by the same classname as defined in the widget.

## Installation

Install the widget and configure it:

1. Place a listview widget inside the 'Listview widget ' section.
2. Add the text / widget(s) for when the listview is empty inside the 'Empty Listview content' section.

## Configuration

-   Insert a classname to select a listview.
-   Configure a message to show if the listview is empty.
-   Boolean to toggle show / hide listview bottombar

## Bugs

none known at this moment.

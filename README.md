## Description

Pluggable web widget to display custom input in case a listview is empty. The widget also works with nested listviews.

## Typical usage scenario

When an empty listview should have a custom message in case it's empty.

## Features and limitations

### Features

Place a listview inside the widget. Place other text / widgets inside the empty listview widget section.

### Limitations

The widget doesn't really do any more than described.

With nested listviews, the custom message cannot be separately configured between nested listviews.

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

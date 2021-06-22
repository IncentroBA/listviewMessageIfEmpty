## Description
Pluggable web widget to display custom text in case a listview is empty. The widget also works with nested listviews.

## Typical usage scenario
When an empty listview should have a custom message in case it's empty.

## Features and limitations

### Features
Display a custom string of text. One or more Attributes can be used. It's even possible do display fallback text if there is no available data to display the attribute string.

The widget is applied to listviews with the specified classname. this could be one or multiple listviews on a page.

Toggle a boolean to display / hide the listview's bottom border.

### Limitations
The widget doesn't really do any more than described.

With nested listviews, the custom message cannot be separately configured between nested listviews.

## Dependencies
A listview, selected by the same classname as defined in the widget.

## Installation
Install the widget and configure it.

## Configuration
- Insert a classname to select a listview.
- Configure a message to show if the listview is empty.
- Boolean to toggle show / hide listview bottombar

## Bugs
none known at this moment.
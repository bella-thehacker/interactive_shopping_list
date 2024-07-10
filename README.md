# Wk2 Code Challenge - Interactive Shopping List

## Objectives

Develop a webpage with a shopping list. Users can add items to the list, mark items as purchased, and clear the list.

## Project Requirements

- **Array**: Maintain a JavaScript array to store shopping list items.

- **DOM Manipulation**:
  Create an HTML structure with an input field for adding items, a list container to display items, and buttons for "Add", "Mark Purchased", and "Clear List".
  Use JavaScript to dynamically add new items to the list container when the user clicks the "Add" button. (The new items do not have to be persisted once the page refreshes)
  Update the list item visually to indicate purchased items (e.g., strikethrough text, different background color).

- **Event Handling**:
  - Attach event listeners to the `Add` button to capture user input and add items to the list.
  - Attach event listeners to the list of items to allow users to mark them as purchased.
  - Attach an event listener to the `Clear List` button to remove all items from the list.

### Bonus Features:

- Allow users to edit existing list items.
- Implement persistence using local storage to save the list even after the page reloads.

## System Requirements

- Node 18+
- A browser capable of running JavaScript (Chrome, Firefox, Safari, or Edge)
- Operating System (Windows 10+, MacOS, Linux, etc.)
- A text editor capable of running JavaScript (Visual Studio Code, Vim, Nano, Emacs, Atom, Sublime Text, etc.)
- RAM >= 4GB
- Disk space >= 1GB

## Installation

To use this repo, follow these steps:

### Alternative One

1.  Open the terminal/CLI on your computer.

2.  Clone the repository by running the following command:

        git clone https://github.com/oyieroyier/interactive_shopping_list.git

3.  Change directory to the repo folder:

        cd interactive_shopping_list

4.  Open it in your Code Editor of choice. If you use VS Code, run the command:

        code .

### Alternative Two

- On the top right corner of this page there is a button labelled `Fork`.

- Click on that button to create a copy of the repository to your own account.

- Follow the process described in `Alternative One` above.

- Remember to replace your username when cloning.

      git clone https://github.com/your-github-username-here/interactive_shopping_list.git

## Running the application locally

- Open the index.html file in Mozilla Firefox, Safari or any Chromium-based browser.

- If using VS Code, you can use the Live Server extension to run the file on the browser for live reloading.

- Click [HERE](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) to install the Live Server extension and to read instructions on how to use it.

## Functionality

- The shopping list is initially empty. Add items to it using the input field and clicking on the `Add Items` button.

- Click on an item to mark it as already purchased.

- Double click on an item to edit it.

- Click on the `Clear List` button to clear your shopping list.

## Authors

This project was contributed to by:

- [Bob Oyier](https://github.com/oyieroyier/)

## License

[![License: ICL](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)

// Utility Functions for DOM Manipulation.

function createAnElement(element) {
	return document.createElement(element);
}

function addText(element, text) {
	return (element.innerText = text);
}

function appendChild(child, parent) {
	return parent.appendChild(child);
}

function select(selector) {
	return document.querySelector(selector);
}

function listen(element, event, callback) {
	return element.addEventListener(event, callback);
}

function addAttribute(element, attribute, content) {
	return element.setAttribute(attribute, content);
}

const shoppingList = [];

const ol = select('ol');

listen(document, 'DOMContentLoaded', displayItems);

function displayItems() {
	ol.innerHTML = '';
	shoppingList.map(createAListItem);
}

function createAListItem(item, index) {
	const li = createAnElement('li');
	addText(li, item);
	appendChild(li, ol);

	listen(li, 'click', toggleChecked);

	function toggleChecked() {
		li.classList.toggle('checked');
	}

	// Trigger editing when a user double clicks on each menu item.
	listen(li, 'dblclick', editItem);
	function editItem() {
		addAttribute(li, 'contenteditable', true);
		li.focus();
	}

	// Listen when the item is not in focus and stop editing. This could happen when the cursor is clicked outside the list item or when (as will be done with the keydown listener, when a user hits "Enter")
	listen(li, 'blur', stopEditingTheItem);

	function stopEditingTheItem() {
		li.removeAttribute('contenteditable');
		li.blur();
	}

	// Listen when a key is pressed. We want the content to stop being editable when a user hits "Enter"
	listen(li, 'keydown', stopEditingWhenEnterIsPressed);

	function stopEditingWhenEnterIsPressed(event) {
		if (event.key === 'Enter') {
			event.target.blur();
			shoppingList[index] = event.target.innerText;
		}
	}
}

const form = select('form');
listen(form, 'submit', addItem);

function addItem(event) {
	event.preventDefault();

	shoppingList.push(event.target[0].value);

	displayItems();

	event.target.reset();
}

const deleteButton = select('.delete');
listen(deleteButton, 'click', clearList);

function clearList() {
	shoppingList.length = 0;
	displayItems();
}

// ADVANCED TASKS: LocalStorage usage.

// ADVANCED TASK 1: Save the initial empty shopping list array to localStorage immediately the DOM loads.
/* 
	 If you want to use this code, add the following line where the DOM Content loads:


	listen(document, 'DOMContentLoaded', saveList); 
*/
function saveList() {
	localStorage.setItem('shoppingListItems', JSON.stringify(shoppingList));
}

// ADVANCED TASK 2: Load the shopping list from localStorage
/*
	 If you want to use this code, uncomment the last line inside this comment and comment out the displayItems event listener where the DOM Content loads.

	listen(document, 'DOMContentLoaded', loadList);
*/
function loadList() {
	const savedList = localStorage.getItem('shoppingListItems');
	if (savedList) {
		shoppingList = JSON.parse(savedList);
		displayItems();
	}
}

// ADVANCED TASK: Delete the list from localStorage
/*

	 If you want to use this code, replace the line setting the delete button's click event handler/callback `clearList() with the one below:
	 
	 listen(deleteButton, 'click', deleteList);

*/
function deleteList() {
	localStorage.removeItem('shoppingListItems');
	shoppingList.length = 0;
	displayItems();
}

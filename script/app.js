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
	shoppingList.forEach(createAListItem);
}

function createAListItem(item) {
	const li = createAnElement('li');
	addText(li, item);
	appendChild(li, ol);

	listen(li, 'click', toggleChecked);

	function toggleChecked() {
		li.classList.toggle('checked');
	}

	listen(li, 'dblclick', editItem);

	function editItem() {
		addAttribute(li, 'contenteditable', true);
		li.focus();
	}

	listen(li, 'blur', stopEditing);

	function stopEditing(event) {
		event.preventDefault();
		event.target.removeAttribute('contenteditable');
	}

	listen(li, 'keydown', saveList);

	function saveList(event) {
		if (event.key === 'Enter') {
			event.preventDefault();
			event.target.blur();
			console.log(shoppingList);
			console.log(event.target.innerText);
		}
	}

	console.log(shoppingList);
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

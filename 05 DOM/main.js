// -=-=-=-=-=-=-=- Working with DOM -=-=-=-=-=-=-=-

// ------- find elements
console.log(document);
console.log(document.body);

const list = document.getElementById('main-list'); // ul
console.log(list);

console.log(document.getElementsByClassName('important'));

console.log(document.querySelector('ul.my-list li.important')); // get single element
console.log(document.querySelectorAll('ul.my-list > li:nth-child(even)')); // get collection of element

// ----------------- get child nodes
console.log(list.childNodes);  // get tag elements, text nodes (useless)
console.log(list.children);    // get tag elements only

console.log('First item:', list.firstChild); // list.childNodes[0]
console.log('Last item:', list.lastChild);   // list.childNodes[list.childNodes.length-1]

console.log('First item:', list.firstElementChild); // list.children[0]
console.log('Last item:', list.lastElementChild);   // list.children[list.children.length-1]

// ------- node properties
const item = document.querySelector('#third-item'); // li
console.log(`Item props: ${item.id}, ${item.nodeName}, ${item.className}, ${item.nodeType}`);

console.log("Item content:", item.textContent);
console.log("Item inner text:", item.innerText);
console.log("Item inner HTML:", item.innerHTML);
console.log("Item outer HTML:", item.outerHTML);

// simple way to change the element content
item.innerHTML = "New <abbr title='Test'>CSS</abbr> styles";
// item.innerHTML = "";
item.innerHTML += "!";

// ----------------- create elements dynamically
// 1 - using innerHTML
list.innerHTML += '<li class="muted" title="Hello">New item created with innerHTML</li>';
// list.innerHTML = "";

// 2 - using methods
const newItem = document.createElement('li');

newItem.textContent = 'New item created with methods';
newItem.setAttribute('title', 'Hello');
newItem.classList.add('important');

// ----------------- add elements to DOM 
// list.append(newItem);
list.appendChild(newItem);

list.prepend("Prepended item"); // insert first list item
list.append("Appended item");   // insert last list item

list.before("Before item");       // insert outside the list before
list.after("After item");         // insert outside the list after

// ----------------- working with CSS classes
// 1 - using style property
// newItem.style.textTransform = "uppercase";
// newItem.style.fontSize = "24px";

// 2 - using CSS classes
newItem.classList.remove('important');
newItem.classList.add('important');

// ------- set event handler
list.lastElementChild.onClick = function (e) {
    // executes when the item was clicked
    //debugger;
    //alert("afrae");

    //newItem.classList.toggle('important');
    // e.target.classList.toggle('important');
    this.classList.toggle('important');         // e.target === this
}

// ----------------- working with attributes
newItem.setAttribute("name", 'test');
newItem.getAttribute('name'); // test
newItem.removeAttribute('name');

// ----------------- get items by hierarchy
const secondItem = list.children[1];

console.log("Next sibling:", secondItem.nextSibling);         // include elements and text nodes
console.log("Previous sibling:", secondItem.previousSibling); // include elements and text nodes

console.log("Next sibling element:", secondItem.nextElementSibling); // include elements only
console.log("Previous sibling element:", secondItem.previousElementSibling); // include elements only

console.log('Parent item:', secondItem.parentNode);

// ------ remove item from DOM
newItem.remove();

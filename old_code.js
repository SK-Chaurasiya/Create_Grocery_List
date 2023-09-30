/* =================================================================================
          If you are coming to this code you have an understanding of 
          the basics of HTML, CSS and JavaScript.
   ================================================================================= */ 

/* ==============================================
        ! first code write !
   ============================================== */
let grocery = document.getElementById('grocery');
grocery.addEventListener('submit', addItem);

function addItem(e) {
  e.preventDefault();
  let data = this.elements.writeList.value;
  let list = document.querySelector('ol');
  let item = document.createElement('li');
  let text = document.createElement('p');

  text.textContent = data;
  this.elements.writeList.value = "";
  item.append(text);
  list.append(item);

  let rmvBtn = document.createElement('span');
  rmvBtn.classList.add('remove')
  item.append(rmvBtn)

  rmvBtn.addEventListener('click', deleteItem);
  item.addEventListener('click', doneItem);
}

function deleteItem(e) {
  this.parentElement.remove();
}

function doneItem(e) {
  this.classList.toggle('done')
}

/* All Copy-Rights Received by White Hat Designer */




/* ======================================================
        ! Write second code with advanced features !
   ====================================================== */
/*
// Execute the following code after the DOM has fully loaded
document.addEventListener('DOMContentLoaded', () => {
  const groceryForm = document.getElementById('grocery');
  // Attach the addItem function to the form submission event
  groceryForm.addEventListener('submit', addItem);

  // Load existing items from local storage or initialize an empty array
  const savedItems = JSON.parse(localStorage.getItem('groceryItems')) || [];
  const list = document.querySelector('ol');

  // Display existing items from local storage
  savedItems.forEach(itemText => {
    const item = createListItem(itemText);
    list.appendChild(item);
  });
});


// Function to handle adding an item to the grocery list
function addItem(e) {
  e.preventDefault();
  const data = this.elements.writeList.value.trim();

  if (data !== '') {
    const item = createListItem(data);

    const list = document.querySelector('ol');
    list.appendChild(item);

    // Save the updated items to local storage
    saveToLocalStorage();

    this.elements.writeList.value = '';
  }
}

// Function to create a list item with the provided text
function createListItem(itemText) {
  const item = document.createElement('li');
  const text = document.createElement('p');
  text.textContent = itemText;

  const rmvBtn = document.createElement('span');
  rmvBtn.classList.add('remove');
  // rmvBtn.textContent = 'Remove';

  rmvBtn.addEventListener('click', deleteItem);
  item.addEventListener('click', doneItem);

  item.append(text, rmvBtn);
  return item;
}

// Function to handle deleting an item
function deleteItem(e) {
  const item = e.target.parentElement;
  item.remove();
  saveToLocalStorage();
}

// Function to toggle the 'done' class when an item is clicked
function doneItem(e) {
  e.target.classList.toggle('done');
  saveToLocalStorage();
}

// Function to save the current state of the grocery list to local storage
function saveToLocalStorage() {
  const list = document.querySelectorAll('ol li p');
  const items = Array.from(list).map(item => item.textContent);
  localStorage.setItem('groceryItems', JSON.stringify(items));
}
*/

/* All Copy-Rights Received by White Hat Designer */


/* ==========================================================
        ! Write Third code with small advanced features !
   ========================================================== */

   // check out the main.js file


/* All Copy-Rights Received by White Hat Designer */
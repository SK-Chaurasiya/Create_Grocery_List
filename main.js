// Execute the following code after the DOM has fully loaded
document.addEventListener('DOMContentLoaded', () => {
  const groceryForm = document.getElementById('grocery');
  // Attach the addItem function to the form submission event
  groceryForm.addEventListener('submit', addItem);

  // Load existing items from local storage or initialize an empty array
  const savedItems = JSON.parse(localStorage.getItem('groceryItems')) || [];
  const list = document.querySelector('ol');

  // Display existing items from local storage
  savedItems.forEach(item => {
    const listItem = createListItem(item.text, item.done);
    list.appendChild(listItem);
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
function createListItem(itemText, done) {
  const item = document.createElement('li');
  const text = document.createElement('p');
  text.textContent = itemText;

  if (done) {
    text.classList.add('done');
  }

  const rmvBtn = document.createElement('span');
  rmvBtn.classList.add('remove');
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
  if (e.target.tagName === 'P') {
    e.target.classList.toggle('done');
    saveToLocalStorage();
  }
}

// Function to save the current state of the grocery list to local storage
function saveToLocalStorage() {
  const list = document.querySelectorAll('ol li p');
  const items = Array.from(list).map(item => ({
    text: item.textContent,
    done: item.classList.contains('done')
  }));
  localStorage.setItem('groceryItems', JSON.stringify(items));
}



/* All Copy-Rights Received by White Hat Designer */
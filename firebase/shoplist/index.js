import {initializeApp} 
    from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import {getDatabase, ref, push, onValue, remove} 
    from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";

const appSettings = {
    databaseURL: 'https://playground-f79c0-default-rtdb.firebaseio.com/',
};

const dbName = "shoppingList";
const app = initializeApp(appSettings);
const database = getDatabase(app);
const shoppingListInDB = ref(database, dbName);

const inputFieldEl = document.getElementById("input-field");
const addButtonEl = document.getElementById("add-button");
const shoppingListEl = document.getElementById("shopping-list");

onValue(shoppingListInDB, onValueCallback)

addButtonEl.addEventListener("click", function() {
    let inputValue = inputFieldEl.value

    additem(inputValue);

    inputFieldEl.value = '';
    inputFieldEl.focus();
})

function additem(item) {
    push(shoppingListInDB, item);
}

function addItemToTheList(item) {
    const [id, text] = item;
    const li = document.createElement('li');
    li.setAttribute('data-id', id);
    li.innerHTML = text;
    li.addEventListener('click', onClickCallback);
    shoppingListEl.append(li);
}

function onValueCallback(snapshot) {
    shoppingListEl.innerHTML = '';
    if (!snapshot.exists()) return;
    const list = Object.entries(snapshot.val());
    for(const item of list) {
        addItemToTheList(item);
    }
}

function onClickCallback(event) {
    const id = event.target.getAttribute('data-id');
    if (id) {
        const shoppingListInItem = ref(database, `${dbName}/${id}`);
        remove(shoppingListInItem);
    }
}
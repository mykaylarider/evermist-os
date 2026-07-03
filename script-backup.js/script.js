// ======================================
// EVERMIST OS v2
// ======================================

// ---------- Elements ----------

const productInput = document.getElementById("productInput");
const ideaInput = document.getElementById("ideaInput");
const taskInput = document.getElementById("taskInput");
const noteInput = document.getElementById("noteInput");

const productList = document.getElementById("productList");
const ideaList = document.getElementById("ideaList");
const taskList = document.getElementById("taskList");
const noteList = document.getElementById("noteList");

const productCount = document.getElementById("productCount");
const ideaCount = document.getElementById("ideaCount");
const taskCount = document.getElementById("taskCount");



// ---------- Buttons ----------

document.getElementById("addProduct").addEventListener("click", () => {
    addItem(productInput, productList);
});

document.getElementById("addIdea").addEventListener("click", () => {
    addItem(ideaInput, ideaList);
});

document.getElementById("addTask").addEventListener("click", () => {
    addTask();
});

document.getElementById("addNote").addEventListener("click", () => {
    addItem(noteInput, noteList);
});

// ---------- Enter Key ----------

[productInput, ideaInput, taskInput, noteInput].forEach(input => {

    input.addEventListener("keydown", (event) => {

        if(event.key !== "Enter") return;

        if(input === productInput) addItem(productInput, productList);

        if(input === ideaInput) addItem(ideaInput, ideaList);

        if(input === noteInput) addItem(noteInput, noteList);

        if(input === taskInput) addTask();

    });

});

// ---------- Generic Lists ----------

function addItem(input, list){

    const text = input.value.trim();

    if(text === "") return;

    const li = document.createElement("li");

    const span = document.createElement("span");

    span.textContent = text;

    const button = document.createElement("button");

    button.textContent = "🗑️";

    button.className = "delete-btn";

    button.addEventListener("click", () => {

        li.remove();

        updateCounts();

    });

    li.appendChild(span);

    li.appendChild(button);

    list.appendChild(li);

    input.value = "";

    updateCounts();

}

// ---------- Tasks ----------

function addTask(){

    const text = taskInput.value.trim();

    if(text === "") return;

    const li = document.createElement("li");

    const span = document.createElement("span");

    span.textContent = text;

    span.style.cursor = "pointer";

    span.addEventListener("click", () => {

        li.classList.toggle("completed");

    });

    const button = document.createElement("button");

    button.textContent = "🗑️";

    button.className = "delete-btn";

    button.addEventListener("click", () => {

        li.remove();

        updateCounts();

    });

    li.appendChild(span);

    li.appendChild(button);

    taskList.appendChild(li);

    taskInput.value = "";

    updateCounts();

}

// ---------- Dashboard ----------

function updateCounts(){

    productCount.textContent = productList.children.length;

    ideaCount.textContent = ideaList.children.length;

    taskCount.textContent = taskList.children.length;

}

updateCounts();

console.log("🌿 Evermist OS v2 Loaded");
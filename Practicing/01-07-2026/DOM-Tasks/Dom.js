// Live Character Counter
// Display the number of characters typed into a textarea.

var textarea = document.getElementById('message')
var count = document.getElementById('count')
textarea.addEventListener("input", ()=>{
    count.textContent = textarea.value.length
})

// Dynamic To-Do List
// Add tasks dynamically and remove them when clicked.

const input = document.getElementById("taskInput");
const button = document.getElementById("addBtn");
const list = document.getElementById("taskList");
button.addEventListener("click", () => {
    const li = document.createElement("li");
    li.textContent = input.value;
    li.addEventListener("click", () => {
        li.remove();
    });
    list.appendChild(li);
    input.value = "";
});


// Dark Mode Toggle
const btn = document.getElementById("themeBtn");
btn.addEventListener("click", () => {
    document.body.classList.toggle("dark");
});

// image gallery
const main = document.getElementById("mainImage");
const thumbs = document.querySelectorAll(".thumb");
thumbs.forEach(img => {
    img.addEventListener("click", () => {
        main.src = img.src;
    });
});

// search filter
const search = document.getElementById("search");
const items = document.querySelectorAll("#list li");
search.addEventListener("input", () => {
    const value = search.value.toLowerCase();
    items.forEach(item => {
        item.style.display =
            item.textContent.toLowerCase().includes(value)
            ? "list-item"
            : "none";
    });
});

// form validation
document.getElementById("form")
.addEventListener("submit", (e) => {
    const name =
      document.getElementById("name").value;

    if (name.trim() === "") {
        e.preventDefault();
        alert("Name required");
    }
});


// progress bar
let progress = 0;
document.getElementById("increase")
.addEventListener("click", () => {

    progress += 10;

    document.getElementById("bar")
        .style.width = progress + "%";
});



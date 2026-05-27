
const navbar = document.createElement("div");
navbar.className = "navbar";


const logo = document.createElement("div");
logo.className = "logo";
 


const logoImg = document.createElement("img");
logoImg.src = "https://navayuvabharatinfotech.com/wp-content/uploads/2024/04/WhatsApp-Image-2024-04-15-at-12.17.20-PM-2-220x113.jpeg";   // Image file name
logoImg.alt = "Company Logo";


logo.appendChild(logoImg);


const menu = document.createElement("ul");
menu.className = "menu";

const menuItems = ["Home", "About", "Services", "Careers", "Blog", "Contact"];

menuItems.forEach(item => {
    const li = document.createElement("li");
    li.textContent = item;
    menu.appendChild(li);
});


const followBtn = document.createElement("button");
followBtn.className = "follow-btn";
followBtn.textContent = "FOLLOW US";
followBtn.addEventListener("click",()=>{
    alert("follow button clicked")
})


navbar.appendChild(logo);
navbar.appendChild(menu);
navbar.appendChild(followBtn);

document.body.appendChild(navbar);
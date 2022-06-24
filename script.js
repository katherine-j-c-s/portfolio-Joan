// ICON SAVED

const toggleBtn = document.querySelector(".sidebar-toggle");
const closeBtn = document.querySelector(".close-btn");
const sidebar = document.querySelector(".sidebar");

// REPONSIVE

if (window.innerWidth > 800) {
    toggleBtn.classList.add("hidden");
    closeBtn.classList.add("hidden");
}

//SIDE NAV

toggleBtn.addEventListener("click", function(){
    sidebar.classList.toggle("show-sidebar");
});

closeBtn.addEventListener("click", function(){
    sidebar.classList.remove("show-sidebar");
});

const sidebar = document.querySelector(".sidebar")

function showSidebar() {
    sidebar.style.left = 0
}

function hideSidebar() {
    sidebar.style.left = "100%"
}

document.querySelector("#year").innerHTML = new Date().getFullYear();
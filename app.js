// Menu toggle
const burgerMenu = document.getElementById("burger");
const navbarMenu = document.getElementById("menu");

// Responsive Navbar Toggle
burgerMenu.addEventListener("click", function () {
	navbarMenu.classList.toggle("active");
	burgerMenu.classList.toggle("active");
});

// Get the modal
var modal = document.getElementById("myModal");
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("modal-close")[0];
// Use with onclick="functionName" in the tag element
function openModal() {
	modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
	modal.style.display = "none";
};
// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
	if (event.target == modal) {
		modal.style.display = "none";
	}
};
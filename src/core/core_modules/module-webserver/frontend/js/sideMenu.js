//* Loop through all dropdown buttons to toggle between hiding and showing its dropdown content - This allows the user to have multiple dropdowns without any conflict */
var dropdown = document.getElementsByClassName("dropdown-btn");
var i;

for (i = 0; i < dropdown.length; i++) {
    dropdown[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var dropdownContent = this.nextElementSibling;
        var arrowDown = dropdownContent.children[0];
        if (dropdownContent.style.display === "block") {
            dropdownContent.style.display = "none";
            arrowDown.style.display = "none"
        } else {
            dropdownContent.style.display = "block";
            arrowDown.style.display = "block";
        }
    });
}
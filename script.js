### **Create script.js (Accordion Functionality)**

js

document.addEventListener("DOMContentLoaded", function() {
    const accordionHeaders = document.querySelectorAll(".accordion-header");

    accordionHeaders.forEach(header => {
        header.addEventListener("click", function() {
            const content = this.nextElementSibling;

            // Toggle active class to show/hide content
            if (content.classList.contains("active")) {
                content.classList.remove("active");
            } else {
                content.classList.add("active");
            }
        });
    });
});

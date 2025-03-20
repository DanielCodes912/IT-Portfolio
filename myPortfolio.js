// Mobile Menu Toggle
document.getElementById("menuToggle").addEventListener("click", function() {
    document.getElementById("menu").classList.toggle("hidden");
});

// Create the "Back to Top" button
const backToTopBtn = document.createElement("button");

// Add styling using Tailwind CSS classes
backToTopBtn.classList.add(
    "fixed", "bottom-6", "right-6", "p-3", "bg-blue-500", "text-white",
    "rounded-full", "shadow-md", "text-xl", "lg:bottom-8", "lg:right-8",
    "transition-all", "duration-300", "opacity-0", "invisible"
);
backToTopBtn.innerHTML = "⬆️"; // Up arrow icon

// Append button to body
document.body.appendChild(backToTopBtn);

// Function to show or hide button based on scroll position
window.addEventListener("scroll", () => {
    if (document.documentElement.scrollTop > 100) {
        backToTopBtn.classList.remove("opacity-0", "invisible");
        backToTopBtn.classList.add("opacity-100", "visible");
    } else {
        backToTopBtn.classList.remove("opacity-100", "visible");
        backToTopBtn.classList.add("opacity-0", "invisible");
    }
});

// Scroll to top smoothly when button is clicked
backToTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

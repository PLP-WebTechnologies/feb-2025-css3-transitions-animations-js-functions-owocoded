document.getElementById("animatedBox").addEventListener("click", function () {
    this.classList.toggle("bouncing"); // Toggle animation class
});
document.getElementById("saveData").addEventListener("click", function () {
    const userInput = document.getElementById("user").value;

    if (userInput) {
        // Retrieve existing names or initialize an empty array
        let storedNames = JSON.parse(localStorage.getItem("names")) || [];

        // Add the new name
        storedNames.push(userInput);

        // Save updated list to localStorage
        localStorage.setItem("names", JSON.stringify(storedNames));

        // Clear input
        document.getElementById("user").value = "";

        // Update displayed table
        displayNames();
    } else {
        alert("Please enter a name.");
    }
});

// Function to display names in table
function displayNames() {
    const storedNames = JSON.parse(localStorage.getItem("names")) || [];
    const tableBody = document.getElementById("nameTable");

    // Clear previous entries
    tableBody.innerHTML = "";

    storedNames.forEach((name, index) => {
        const row = `<tr><td>${index + 1}</td><td>${name}</td></tr>`;
        tableBody.innerHTML += row;
    });
}

// Load names on page load
window.onload = displayNames;

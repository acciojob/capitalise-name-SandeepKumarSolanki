// Get the input element by its id
let nameBox = document.getElementById('fname');

// Add an event listener for the 'blur' event (when the input loses focus)
nameBox.addEventListener("blur", () => {
    // Get the value from the input field
    let name = nameBox.value;

    // Convert the name to uppercase
    nameBox.value = name.toUpperCase(); // Update the input field with the uppercase name
});


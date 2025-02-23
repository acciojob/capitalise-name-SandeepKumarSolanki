let nameBox = document.getElementById('fname');
let output = document.getElementById('output');

// Listen for the 'blur' event on the input field
nameBox.addEventListener("blur", () => {
    // Get the value from the input field
    let name = nameBox.value;

    // Convert the name to uppercase
    let upperName = name.toUpperCase();

    // Display the uppercase name in the output div
    output.innerText = `${upperName}`;
});

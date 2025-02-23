//your JS code here. If required
let nameBox = document.getElementById('fname');
let btn = document.getElementById('btn');
let output = document.getElementById('output');

btn.addEventListener("click", () => {
    // Get the value from the input field
    let name = nameBox.value;

    // Convert the name to uppercase
    let upperName = name.toUpperCase();

    // Display the uppercase name in the output div
    output.innerText = `${upperName}`;
});



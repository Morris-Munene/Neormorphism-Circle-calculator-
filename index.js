const submit = document.getElementById("submit");
const radius = document.getElementById("mytext");
const message = document.getElementById("message");



submit.onclick = function(){
    // Use the value from the 'radius' element defined at the top
    let r = Number(radius.value); 

    if(isNaN(r) || r < 0){
        message.textContent = "Please enter a valid positive number";
        message.style.color = "red";
    }
    else {
        // Correct Formula: π * r^2
        const area = Math.PI * Math.pow(r, 2);

        // Display the calculated 'area' variable, not the 'r' variable
        message.textContent = `The area is ${area.toFixed(2)} units²`;
        message.style.color = `black`;
        }
};
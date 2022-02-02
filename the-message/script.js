
// variable for user input to generate the message displayed.
const messageInput = document.getElementById("message-input");

// lets the user press enter to submit instead of using the button.
messageInput.addEventListener("keydown", function 
(event){
    if (event.key == "Enter")
    getMessage();
})

// Function for submit button.
function getMessage(){
    document.getElementById("message-output").innerHTML = messageInput.value;
    messageInput = "";
}


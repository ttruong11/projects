//checks for user inputs. Displays different error prompts based on what the user did not input. 

function checkUserInputs(){
    let username = document.getElementById("userNameInput").value;
    if (username == ""){
        alert ("Username must be filled out");
    }
        else {
            let password = document.getElementById("userPasswordInput").value;
            if (password == ""){
                alert ("Password must be filled out");
        }
        return false;
    }
}
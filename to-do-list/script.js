const itemInput = document.getElementById("listItem");

function getListItem(){
    document.getElementById("listOutput").
    innerHTML = itemInput.value;
    itemInput.value = "";
}
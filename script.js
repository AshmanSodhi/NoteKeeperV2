const itemsArray = localStorage.getItem("items") ? JSON.parse(localStorage.getItem("items"))  : [];

console.log(itemsArray);

document.querySelector("#enter").addEventListener("click", function() {
    const item = document.querySelector("#item")
    createItem(item);
});


function displayItems() {
    let items = ""
    for(let i = 0; i < itemsArray.length; i++) {
        items += ` <div class="item">
                    <div class="input-controller">
                            <textarea disabled>${itemsArray[i]}</textarea>
                            <div class="edit-controller">
                            <button class="deleteBtn">Delete</button>
                            </div>
                    </div>
                </div>`
    }
    document.querySelector(".to-do-list").innerHTML = items
    activateDeleteListeners()
}

function activateDeleteListeners() {
    let deleteBtn = document.querySelectorAll(".deleteBtn")
    deleteBtn.forEach((db , i) => {
        db.addEventListener("click" , () => {deleteItem(i)})
    })
}

function activateEditListeners() {
    const editBtn = document.querySelectorAll(".editBtn")
    const updateController = document.querySelectorAll(".update-controller")
    const inputs = document.querySelectorAll(".input-controller textarea")
    editBtn.forEach((eb , i) => {
        eb.addEventListener("click" , () => {
            updateController[i].style.display = "block"
            inputs[i].disabled = false
        })
    })

}


function deleteItem(i) {
    itemsArray.splice(i,1)
    localStorage.setItem("items", JSON.stringify(itemsArray));
    location.reload();
}




function createItem(item){
    itemsArray.push(item.value);
    localStorage.setItem("items", JSON.stringify(itemsArray));
    location.reload();
}

function displayDate() {
    let date = new Date();
    date = date.toString().split(" ")
    document.querySelector("#date").innerHTML = date[2] + " " + date[1] + " " + date[3];
}

window.onload = function() {
    displayDate();
    displayItems();
}
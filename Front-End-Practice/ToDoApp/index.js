const ul = document.querySelector(".list");
const addButton = document.querySelector(".add-button");

const addInputItem = () => {
    const inputItem = document.querySelector("#todo-input");
    const value = inputItem.value;
    const textNode = document.createTextNode(value);
    let li = document.createElement('li');
    let checkbox = document.createElement('input');
    checkbox.type = "checkbox";
    checkbox.setAttribute("id", "check");
    let label = document.createElement("label");
    ul.appendChild(li);
    li.appendChild(checkbox);
    label.appendChild(textNode);
    li.appendChild(label);
    inputItem.value = "";   
}

addButton.addEventListener("click", addInputItem)


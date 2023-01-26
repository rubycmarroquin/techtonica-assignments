/**
 * Adds a checkbox element to a list of ingredients
 * @param {string} sectionId - the class name of the list we want to add check
 * boxes to 
 */
function initSection(sectionId) {
    const sectionElement = document.getElementById(sectionId);
    const sectionList = Array.from(sectionElement.getElementsByTagName('li'));
    for(let i = 0; i < sectionList.length; i++) {
        // store the ingredient text 
        const text = sectionList[i].textContent;
        // create an input element 
        let checkbox = document.createElement("input");
        // create a label input 
        let label = document.createElement("label");
        // add the innerHTML text to be the ingredient text 
        label.innerHTML = text;
        // add the type attribute of checbox to be a checkbox 
        checkbox.type = "checkbox";
        // add the name attribute of checkbox to checkboxes 
        checkbox.name = "checkboxes";
        checkbox.onchange = function onCheckboxChange(e) {
            label.classList.toggle('checked');
        }
        sectionList[i].removeChild(sectionList[i].firstChild);
        sectionList[i].appendChild(checkbox);
        sectionList[i].appendChild(label);
    }
}

// Add check boxes to ingredients 
initSection('cake');
initSection('milkMixture');
initSection('whipped');


function addButton() {
    let body  = document.getElementsByTagName("body");
    let button = document.createElement("button");
    button.type = "button";
    button.className = "buttons";
    button.innerHTML = "<strong>Hello</strong>";
    body[0].appendChild(button);
}

// it adds a button but there is no text?
addButton();

function buttonEventListener () {
    let buttons = document.getElementsByClassName("buttons");
    for(let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener("click", () => styleButton(buttons[i]));
    }
}

buttonEventListener();

function styleButton (button) {
    button.style.padding = "20px"
    button.style.backgroundColor = "teal";
}

// <!-- Footer-->
// <div class="footerContainer">
//     <footer>
//         <a id="creditLink" href="https://tastesbetterfromscratch.com/tres-leches-cake/">Credit for Recipe</a>
//     </footer>
// </div>

function addFooter() {
    let body  = document.getElementsByTagName("body");
    let div = document.createElement("div");
    let footer = document.createElement("footer");
    let link = document.createElement("a");
    link.id = "creditLink";
    link.href = "https://tastesbetterfromscratch.com/tres-leches-cake/";
    link.textContent = "Credit for the Recipe";
    div.className = "footerContainer";
    footer.appendChild(link);
    div.appendChild(footer);
    body[0].appendChild(div);
}

addFooter();
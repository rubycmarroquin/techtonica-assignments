/**
 * Adds a checkbox element to a list of ingredients
 * @param {string} sectionId - the class name of the list we want to add check
 * boxes to 
 */
async function initSection(sectionId) {
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

/**
 * Adds a button at the bottom of the HTML page 
 */
async function addButton(text) {
    // grab the div with the classname container
    let div  = document.getElementsByClassName("container");
    // create new div element for button 
    let divsButton = document.createElement("div");
    // add class name to new div element 
    divsButton.className = "buttonsDiv";
    // create new button element 
    let button = document.createElement("button");
    button.type = "button";
    button.className = "buttons";
    button.innerHTML = text;
    // append to HTML page 
    divsButton.appendChild(button);
    div[0].appendChild(divsButton);

}

// it adds a button but there is no text?
addButton("Press me for Creator");
addButton("Press me for More Recipes");

/**
 * Adds an event listener to every button element in the HTML document
 */
async function buttonEventListener (button, func) {
    button.addEventListener("click", () => func(button));
}

// get button elems 
let buttons = document.getElementsByClassName("buttons");

// credit recipe 
buttonEventListener(buttons[0], styleCreditButton);

//similar recipes 
buttonEventListener(buttons[1], styleSimilarRecipesButton);

/**
 * Changes the styling of the button
 * @param {button} button - button element that was clicked on
 */
function styleCreditButton (button) {
    button.style.backgroundColor = "red";
    createFooter();
}

/**
 * Changes the styling of the button
 * @param {button} button - button element that was clicked on
 */
function styleSimilarRecipesButton (button) {
    button.style.backgroundColor = "red";
    createSecondFooter();
}

/**
 * Creates a second footer to the "Press me for More Recipes"
 * button and is appended to a new div element. 
 */
async function createFooter() {
    // get the body element 
    let body  = document.getElementsByTagName("body");
    // create div element 
    let div = document.createElement("div");
    // create footer element 
    let footer = document.createElement("footer");
    // create <a> element 
    let link = document.createElement("a");
    // adds an id to the link 
    link.id = "creditLink";
    // link reference 
    link.href = "https://tastesbetterfromscratch.com/tres-leches-cake/";
    // add text to the link 
    link.textContent = "Credit for the Recipe";
    // adds class name to the div element 
    div.className = "footerContainer";
    // add link to footer 
    footer.appendChild(link);
    // add footer to div 
    div.appendChild(footer);
    // add div to body
    body[0].appendChild(div);
}

/**
 * Creates a second footer to the "Press me for More Recipes"
 * button and is appended to a new div element. 
 */
async function createSecondFooter() {
    // get body element 
    let body  = document.getElementsByTagName("body")[0];
    // create footer element 
    let footer = document.createElement("footer");
    // create div element 
    let div = document.createElement("div");
    // add class name to div element 
    div.className = "footerContainer";

    // create link elements for each recipe 
    let recipe1 = document.createElement("a");
    let recipe2 = document.createElement("a");
    let recipe3 = document.createElement("a");

    // recipe 1: add links and change link name 
    recipe1.href = "https://tastesbetterfromscratch.com/tres-leches-cake/";
    recipe1.textContent = "Credit for the Recipe";
    
    // recipe 2: add links and change link name
    recipe2.href = "https://tastesbetterfromscratch.com/tres-leches-cake/";
    recipe2.textContent = "Credit for the Recipe";
    
    // recipe 3: add links and change link name 
    recipe3.href = "https://tastesbetterfromscratch.com/tres-leches-cake/";
    recipe3.textContent = "Credit for the Recipe";

    // add recipe elements to the footer element
    footer.appendChild(recipe1);
    footer.appendChild(recipe2);
    footer.appendChild(recipe3);
    
    // add footer element to div element 
    div.appendChild(footer);

    // add div element to the body 
    body.appendChild(div);
}
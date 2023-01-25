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
        sectionList[i].appendChild(label)
    }
}

// Add check boxes to ingredients 
initSection('cake')
initSection('milkMixture')
initSection('whipped')


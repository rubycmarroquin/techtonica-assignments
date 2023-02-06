/**
 * Creates a class called "Event" and defines a constructor that takes in two inputs?
 * a name of the event and description of the event. 
 * Constructor also has an array called "available tickets"
 */
class Event {
    constructor(name, description) {
        this.name = name;
        this.description = description;
        this.availableTickets = [];
    }
}

// The below statement creates an object.
const eventObj1 = new Event('KLOS Golden Gala', 'An evening with hollywood vampires');

// create more objects with diff values 
const eventObj2 = new Event('Skillet & Sevendust', 'Victorious war tour');
const eventObj3 = new Event('Jenny Lewis', 'On the line tour 2019');

// create an empty Event array 
const eventArray = new Array();

/* Push objects into the array */ 

// pushing multiple objects to an array at once
eventArray.push(eventObj1, eventObj2, eventObj3);
// check to see if both objs got pushed into array 
console.log(eventArray);

/**
 * Code to iterate through it in the same js file using .forEach()
 * and innerHTML. 
 * 
 * DOMContentLoaded explained source: 
 * https://developer.mozilla.org/en-US/docs/Web/API/Window/DOMContentLoaded_event
 * 
 * DOMContentLoaded event begins after the HTML document has been "completely parsed" 
 * and all "deferred scripts" have finished downloading and executing. 
 */
document.addEventListener('DOMContentLoaded', () => {
    // Handler when the DOM is fully loaded
    let html = '';
    eventArray.forEach((item) => {
      html += `<li>${item.name} - ${item.description}`;
    });
    document.querySelector('#event').innerHTML = html;
  });


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

// pushing single object to an array
eventArray.push(eventObj1);
// check to see if eventObj1 got push into array 
console.log(eventArray);

// pushing multiple objects to an array at once
eventArray.push(eventObj1, eventObj2, eventObj3);
// check to see if both objs got pushed into array 
console.log(eventArray);

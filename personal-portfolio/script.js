// grab the form element 
let form = document.getElementsByClassName("form-section")[0];

// prevents form from submitting 
function preventFormFromSubmitting(event) { 
    event.preventDefault(); 
    let name = document.getElementById("name");
    let email = document.getElementById("email");
    let phone = document.getElementById("phone");
    let address = document.getElementById("address");
    let userInquiry = {
        name: name.value,
        email: email.value,
        phone: phone.value,
        address: address.value
    }
    console.log(userInquiry);
} 

// add event listener to submit button 
form.addEventListener('submit', preventFormFromSubmitting);
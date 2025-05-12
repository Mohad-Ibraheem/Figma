

// function validateForm() {

//     var form = document.getElementById('myForm');

//     var fullName = document.getElementById('fullName').value;

//     var phone = document.getElementById('phone').value;

//     var email = document.getElementById('email').value;

//     var age = document.getElementById('age').value;

//     var medium = document.getElementById('medium').value;

//     var address = document.getElementById('address').value;



//     if (!fullName || !phone || !email || !age || !medium || !address) {

//         alert('All fields must be filled out');

//         return false;

//     }



//     var phonePattern = /^\+?[0-9]{10,15}$/;

//     if (!phonePattern.test(phone)) {

//         alert('Please enter a valid phone number.');

//         return false;

//     }


//     if (age < 18 || age > 100) {

//         alert('Please enter a valid age between 18 and 100.');

//         return false;

//     }else{
//         window.open("thanku.html")
//     }




// }


var nameError = document.getElementById('name-error');
var phoneError = document.getElementById('phone-error');
var emailError = document.getElementById('email-error');
var ageError = document.getElementById('age-error'); 
var mediumError = document.getElementById('medium-error');
var addressError = document.getElementById('address-error');
var submitError = document.getElementById('submit-error'); 

function validateName() {
    var name = document.getElementById('contact-name').value;

    if (name.length == 0) {
        nameError.innerHTML = 'Enter valid name';
         nameError.style.color = "red";
        

        return false;
    }
    if (!name.match(/^[A-Za-z]+\s[A-Za-z]+$/)) { 
        nameError.innerHTML = 'Write full name';
        return false;
    }
    nameError.innerHTML = ''; 
    return true;
}

function validatePhone() {
    var phone = document.getElementById('contact-phone').value;

    if (phone.length == 0) {
        phoneError.innerHTML = 'Enter valid phone number';
        phone.style.color= "red";
        return false;
    }
    if (phone.length !== 10) {
        phoneError.innerHTML = 'Phone no should be 10 digits';
        phone.style.color= "red";
        return false;
    }
    if (!phone.match(/^[0-9]{10}$/)) {
        phoneError.innerHTML = 'Only digits allowed.';
        phone.style.color= "red";
        return false;
    }
    phoneError.innerHTML = ''; 
    return true;
}

function validateEmail() {
    var email = document.getElementById('contact-email').value;

    if (email.length == 0) {
        emailError.innerHTML = 'Enter valid Email';
        email.style.color= "red";
        return false;
    }
    
    if (!email.match(/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/)) {
        emailError.innerHTML = 'Email Invalid';
         email.style.color= "red";
        return false;
    }
    emailError.innerHTML = ''; 
    return true;
}

function validateAge() {
    var age = document.getElementById('age').value;

    if (age.length == 0) {
        ageError.innerHTML = 'Enter valid age';
         ageError.style.color= "red";
        return false;
    }
    if (isNaN(age)) {
        ageError.innerHTML = 'Age must be a number';
        ageError.style.color= "red";
        return false;
    }
    if (age < 18 || age > 100) {
        ageError.innerHTML = 'Age must be between 18 and 100';
        ageError.style.color= "red";
        return false;
    }
    ageError.innerHTML = ''; 
    return true;
}

function validateMedium() {
    var medium = document.getElementById('medium').value;

    if (medium === '') {
        mediumError.innerHTML = 'Please select a medium';
        medium.style.color= "red";
        return false;
    }
    mediumError.innerHTML = '';
    return true;
}

function validateAddress() {
    var address = document.getElementById('address').value;

    if (address.length == 0) {
        addressError.innerHTML = 'Enter a valid address';
        medium.style.color= "red";
        return false;
    }
    addressError.innerHTML = ''; 
    return true;
}

function validateForm() {
    if (!validateName() || !validatePhone() || !validateEmail() || !validateAge() || !validateMedium() || !validateAddress()) {
        submitError.style.display = 'block';
        submitError.innerHTML = 'Please fix errors to submit';
        setTimeout(function () { submitError.style.display = 'none'; }, 3000);
        return false;
    } else {
        // window.location.replace("thanku.html"); 
        // window.close("thanku.html"); 
        // window.open("thanku.html")
      

             window.location.href = "thanku.html";
        return false; 
    }
}



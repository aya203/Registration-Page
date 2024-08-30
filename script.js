let validname = /^[a-zA-Z]{1,9}$/gi;
let validemail = /\w{1,10}@\w{1,10}.(com|org|net)$/ig;
let validpassword = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[^\w\s]).{1,8}$/ig;
let validphone = /01\d{2}\s\d{3}\s\d{4}$/ig;
let validfile = /\.(jpg|png)$/i;


let firstname = document.getElementById("firstname");
let lastname = document.getElementById("lastname")
let useremail = document.getElementById("useremail")
let password = document.getElementById("password")
let phonenumber =  document.getElementById("phonenumber")
let file = document.getElementById("image")


let submit = document.getElementById("submit")





    // Event listeners for each input
firstname.addEventListener('change', function() {
    if (firstname.value.length < 10) {
        firstname.classList.add('right');
        firstname.classList.remove('error');
        document.querySelector(".first").style.display = "none"
    } else {
        firstname.classList.add('error');
        firstname.classList.remove('right');
        document.querySelector(".first").style.display = "block"
        firstname.value = ""
        firstname.focus()
    }
});

lastname.addEventListener('change', function() {
    if (lastname.value.length < 10) {
        lastname.classList.add('right');
        lastname.classList.remove('error');
        document.querySelector(".last").style.display = "none"
    } else {
        lastname.classList.add('error');
        lastname.classList.remove('right');
        document.querySelector(".last").style.display = "block"
        lastname.value = ""
        lastname.focus()
    }
});

useremail.addEventListener('change', function() {
    if (validemail.test(useremail.value)) {
        useremail.classList.add('right');
        useremail.classList.remove('error');
        document.querySelector(".user").style.display = "none"
    } else {
        useremail.classList.add('error');
        useremail.classList.remove('right');
        document.querySelector(".user").style.display = "block"
        useremail.value = ""
        useremail.focus()
    }
});

password.addEventListener('change', function() {
    if (validpassword.test(password.value)) {
        password.classList.add('right');
        password.classList.remove('error');
        document.querySelector(".password").style.display = "none"
    } else {
        password.classList.add('error');
        password.classList.remove('right');
        document.querySelector(".password").style.display = "block"
        password.value = ""
        password.focus()
    }
});

confirmpassword.addEventListener('change', function() {
    if (confirmpassword.value === password.value && confirmpassword.value !== "") {
        confirmpassword.classList.add('right');
        confirmpassword.classList.remove('error');
        document.querySelector(".confirm").style.display = "none"
    } else {
        confirmpassword.classList.add('error');
        confirmpassword.classList.remove('right');
        document.querySelector(".confirm").style.display = "block"
        confirmpassword.value = ""
        confirmpassword.focus()
    }
});

phonenumber.addEventListener('change', function() {
    if (validphone.test(phonenumber.value)) {
        phonenumber.classList.add('right');
        phonenumber.classList.remove('error');
        document.querySelector(".tel").style.display = "none"
    } else {
        phonenumber.classList.add('error');
        phonenumber.classList.remove('right');
        document.querySelector(".tel").style.display = "block"
        phonenumber.value = ""
        phonenumber.focus()
    }
});

file.addEventListener('change', function() {
    if (validfile.test(file.value)) {
        file.classList.add('right');
        file.classList.remove('error');
        document.querySelector(".image").style.display = "none"
    } else {
        file.classList.add('error');
        file.classList.remove('right');
        document.querySelector(".image").style.display = "block"
        file.value = ""
    }
});

// Event listener for the submit button
submit.addEventListener('click', function(event) {
    event.preventDefault(); 
    if (firstname.classList.contains('right') &&
        lastname.classList.contains('right') &&
        useremail.classList.contains('right') &&
        password.classList.contains('right') &&
        confirmpassword.classList.contains('right') &&
        phonenumber.classList.contains('right') &&
        file.classList.contains('right')) {
        alert('Form Registrated successfully!');
    } else {
        alert('Please correct the errors in the form before Registrating.');
    }
});
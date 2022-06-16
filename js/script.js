//The "Name" field:

    //create a variable to reference the “Name” element 
    let userName = document.querySelector('#name');

    //adding the focus state to the element
    userName.focus();



//"Job Role" section

    //create variables to reference the "job role" elements
    let jobRole = document.querySelector('#title');
    let otherJobRole = document.querySelector('#other-job-role');

    //hide the "Other job role" variable
    otherJobRole.style.display = "none";

    //"Job Role" event listener
    jobRole.addEventListener('change', (e) => {
       if (e.target.value === 'other'){
        otherJobRole.style.display = '';
       } else {
        otherJobRole.style.display = 'none';
       }
    }
    
    );


//"T-Shirt Info" section

    //create variables for the design and color elements
    let designShirt = document.querySelector('#design');
    let colorShirt = document.querySelector('#color');

    //Disable the "Color" <select> element
    colorShirt.disabled = true;

    //use "Design" variable to listen to event
    designShirt.addEventListener ('change', (e) => {

        //enable the "Color" element
        colorShirt.disabled = false;

        //loop over option element
        for (let i = 0; i < colorShirt.length; i++){

            //create 2 variables to reference value and data-theme
            let colorOption = colorShirt.children[i].getAttribute("data-theme");
            let colorValue = e.target.value

            //conitional that checks if the 2 newly created variables are equal to each other
            if (colorOption === colorValue){
                colorShirt[i].hidden = false;
                colorShirt[i].selected = true;
            } else if (colorOption != colorValue){
                colorShirt[i].hidden = true;
                colorShirt[i].selected = false;
            }
        }
        
        }
        
    );


//"Register for Activities" section


    //create variables for activities and cost elements
    let fieldActivities = document.querySelector('#activities');
    let cost = document.querySelector('#activities-cost');

    //variable to store total cost
    let totalCost = 0; 

    //create a listen event for the "Register for Activities" section
    fieldActivities.addEventListener('change', (e) => {
        //create a variable to store "data-cost"
        let dataCost = +(e.target.getAttribute('data-cost'));
        //conditional to check the cost
        if(e.target.checked){
            totalCost += dataCost;
        }else {
            totalCost -= dataCost;
        }

        //update browser with innerHTML
        cost.innerHTML = `Total: $${totalCost}`;
        
    })


//The "Payment Info" section

    //create variables for the elements
    let payment = document.querySelector('#payment');
    let creditCard = document.querySelector('#credit-card');
    let paypal = document.querySelector('#paypal');
    let bitcoin = document.querySelector('#bitcoin');

    //hide paypal and bitcoin variables
    paypal.style.display = "none";
    bitcoin.style.display = "none";

    //target the second child of the payment variable
    payment.children[1].setAttribute('selected', 'selected' )

    //create a change event listener and hide the elements that don't correspond
    payment.addEventListener('change', (e) => {
        if(e.target.value === 'credit-card'){
            creditCard.style.display ='' ;
            paypal.style.display = 'none';
            bitcoin.style.display = 'none';
        } else if (e.target.value === 'paypal'){
            creditCard.style.display = 'none';
            paypal.style.display = '';
            bitcoin.style.display = 'none';
        } else if (e.target.value === 'bitcoin'){
            creditCard.style.display ='none' ;
            paypal.style.display = 'none';
            bitcoin.style.display = '';
        }
    } ) 

//Form Validation section

    //create variables for the elements
    let email = document.querySelector('#email');
    let activityBox = document.querySelector(".activities-box");
    let cardNumber = document.querySelector('#cc-num');
    let zipCode = document.querySelector('#zip');
    let cvv = document.querySelector('#cvv');
    let form = document.querySelector('form');

    //helper functions using regex

        //"Name" field 
        function nameIsValid() {   
            let userNameValue = userName.value;   
            let nameValid = /^[a-zA-Z]+ ?[a-zA-Z]*? ?[a-zA-Z]*?$/.test(userNameValue); 
            return nameValid;
        }

        //Email field
        function emailIsValid() {
            let emailValue = email.value;
            let emailValid = /^[^@]+@[^@.]+\.[a-z]+$/i.test(emailValue);
            return emailValid;
        };

        //Activities field
        function activitiesIsValid() {
            let activitiesIsValid = totalCost > 0;
            return activitiesIsValid;
        };

        //Credit Card must contain 13-16 digit credit card number with no dashes
        function creditCardIsValid() {
            let creditCardValue = cardNumber.value;
            let creditCardValid = /^\d{13}\d?\d?\d?$/.test(creditCardValue)
            return creditCardValid;
        };

        //Zip code field - must contain a 5 digit number
        function zipIsValid(){
            let zipValue = zipCode.value;
            let zipValid = /^[0-9]{5}/.test(zipValue);
            return zipValid;
        }

        //CVV code - contain a 3 digit number
        function cvvIsValid() {
            let cvvValue = cvv.value;
            let cvvValid = /^[0-9]{3}$/.test(cvvValue);
            return cvvValid;
        };

    //accessibility error message
    function notValid(field) {
        field.parentNode.classList.add("not-valid")
        field.parentNode.classList.remove("valid")
        field.parentNode.lastElementChild.style.display = "inherit"
    }    

    function yesValid(field) {
        field.parentNode.classList.add("valid")
        field.parentNode.classList.remove("not-valid")
        field.parentNode.lastElementChild.style.display = "none"
    }

    //create a submit event for form 
    //validate error message
    form.addEventListener('submit', (e) => {
       if (!nameIsValid()){
           e.preventDefault();
           notValid(userName);
            } else {
            yesValid(userName);
       }

       if (!emailIsValid()) {
           e.preventDefault();
           notValid(email);
            } else {
            yesValid(email);
       }

       if (!activitiesIsValid()){
           e.preventDefault();
           notValid(activityBox);
            } else {
            yesValid(activityBox);
       }

       if (payment.value === 'credit-card') {
           
           if(!creditCardIsValid()) {
               e.preventDefault();
               notValid(cardNumber);
            } else {
            yesValid(cardNumber);
           }
           
           if(!zipIsValid()) {
            e.preventDefault();
            notValid(zip);
            } else {
            yesValid(zip);
           }  

           if(!cvvIsValid()) {
            e.preventDefault();
            notValid(cvv);
            } else {
            yesValid(cvv);
        }
       }

    }

    );

    


//Accessibility section

    //create a variable for activities checkbox
    let activityCheckbox = document.querySelectorAll('[type="checkbox"]');

    //loop over the activitiesCheckbox
    for (let i = 0; i < activityCheckbox.length; i++) {
        //adds focus to the activity section
        activityCheckbox[i].addEventListener('focus', (e) => {
            e.target.parentNode.classList.add('focus');
        })
        //adds blur to the activity section
        activityCheckbox[i].addEventListener('blur', (e) => {
            e.target.parentNode.classList.remove('focus');
        }) 
    }


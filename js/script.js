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
    let shirtDesign = document.querySelector('#design');
    let shirtColor = document.querySelector('#color');

    //Disable the "Color" <select> element
    shirtColor.disabled = true;

    //use "Design" variable to listen to event
    shirtDesign.addEventListener ('change', (e) => {

        //enable the "Color" element
        shirtColor.disabled = false;

        //loop over the element children
        for (let i = 0; i < shirtColor.length; i++){
            if () {

            }else {

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




//Form Validation section


//Accessibility section



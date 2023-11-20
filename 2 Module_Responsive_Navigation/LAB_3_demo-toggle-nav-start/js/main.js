// Step 1: Defining Constants
//Select the element, the user will click to make the menu show/hide. In this case its the toggle-btn and since we are grabbing it by it's classname we need to include the period(.)

const clickButon = document.querySelector('.toggle-btn');

// Step 2: Adding A Click Event

clickButon.addEventListener ('click', ()=>{
    document.querySelector('nav').classList.toggle('show-nav');
})
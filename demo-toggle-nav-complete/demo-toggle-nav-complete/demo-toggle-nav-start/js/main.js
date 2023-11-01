// Step 1: Defining Constants
//Select the element the user will click to make the menu show/hide. In this case its the toggle-btn and since wa are grabbing it by it's classname we need to include the period (.)

const clickButton = document.querySelector('.toggle-btn');

// Step 2: Adding A Click Event
clickButton.addEventListener('click', () => {
     // when that icon is clicked we are going to grab the nav element (or whatever is showing/hiding) and add or remove that special class we created in the CSS
    document.querySelector('nav').classList.toggle('show-nav');
});

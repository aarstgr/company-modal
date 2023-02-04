 //text1 save the name of users
 const text1 = document.getElementById('text1')
 //get profile
 const profile = document.getElementById('profile')
 //get radiobox
 const radioBox = document.getElementsByName('radiobox')
 const logoBox = document.getElementsByName('logobox');
 // Get Name
const Name = document.getElementById('Name');
// Get saveButton
const saveButton = document.getElementById('saveButton');

// Get the modal
let modal = document.getElementById("myModal");

// Get the button that opens the modal
let btn = document.getElementById("Btn");

// Get the span element that closes the modal
let span = document.getElementsByClassName("close")[0];

const pic = document.getElementById("pic");

//Get selected logo
const selectedLogo =document.getElementById('selected-logo')

const firstLlogo =  document.getElementById('first-logo')
const secondLogo =  document.getElementById('second-logo')
// If You click on the button, the modal opening
btn.onclick = function() {
  modal.style.display = "block";
}

//If You click on  span (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}


//changing img for profile

radioBox.forEach((i)=>{
i.addEventListener('click',(e)=>{
  profile.src= e.target.previousElementSibling.src;
    })
  })

 logoBox.forEach((i)=>{
    i.addEventListener('click',(e)=>{
      selectedLogo.src=e.target.previousElementSibling.src;
        })
      })
    
    
 
//If You click on saveButton,save Name and close the modal

 const texxt =(e)=>{
  e.preventDefault();
  text1.innerText=Name.value + " \n"
    modal.style.display = "none";
   document.querySelector(':root').style.setProperty('--bs-primary',colorInput.value);
  

 }
saveButton.addEventListener('click',texxt) 


// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

 //changecolor// Create a function for getting a variable value
function myFunction_get() {
  // Get the styles (properties and values) for the root
  var rs = getComputedStyle(r);
  // Alert the value of the --bs-primary variable
  alert("The value of ----bs-primary is: " + rs.getPropertyValue('--bs-primary'));
}


   




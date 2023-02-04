 //text1 save the name of users
 const text1 = document.getElementById('text1')
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



// If You click on the button, the modal opening
btn.onclick = function() {
  modal.style.display = "block";
}

//If You click on  span (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}
//If You click on saveButton,save Name and close the modal

 const texxt =(e)=>{
  e.preventDefault();
  text1.innerText+=Name.value + " \n"
    modal.style.display = "none";
 }
saveButton.addEventListener('click',texxt) 


// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

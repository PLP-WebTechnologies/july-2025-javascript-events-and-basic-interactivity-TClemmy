// for the menu
function myFunction(x){
    x.classList.toggle("change");
}
//for change background button
const buttonColor = document.getElementById("colorbtn");
buttonColor.onclick = function(){
    //#{Math.floor(Math.random() * 16777215).toString(16)}
    document.body.style.backgroundColor = 'lightgreen';
};
//for hide text button
const buttonToggle = document.getElementById("togglebtn");
const textToggle = document.getElementById("toggletext");
buttonToggle.onclick = function(){
    if(textToggle.style.display == "none")
        {
            textToggle.style.display = "block";
            buttonToggle.textContent = "Hide Text";
        }
    else
        {
            textToggle.style.display = "none";
            buttonToggle.textContent = "Show Text";
        }
};
// my_form validation
const fname = document.getElementById("name");
const phone = document.getElementById("phone");
const message = document.getElementById("errorMessage");
const submitbtn = document.getElementById("submit");
fname.oninput = function(){
    if(fname.value.length < 5)
        {
            fname.setCustomValidaty("Name must be at least 5 character");
        }
    else
        {
            fname.setCustomValidaty("Enter again");
        }
};
const myForm = document.getElementById("my_form");
myForm.addEventListener('submit', function(e){
    e.preventDefault();
    console.log('Form submitted For this event');
});
//Onmousehover event
const text = document.getElementById("textP");
text.onmouseover =function() {
    text.style.color = "blue";
    text.style.fontWeight = "bold";
};
text.onmouseout =function() {
    text.style.color = "black";
    text.style.fontWeight = "bold";
};

//for modal
const openModalbtn = document.getElementById("openbtn");//open button
const theModal = document.getElementById("modal");//modal
const closeModal = document.getElementById("closebtn");//close button
openModalbtn.onclick = function(){
    theModal.style.display = "block";
};
closeModal.onclick = function(){
    theModal.style.display = "none";
};
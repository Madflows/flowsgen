let myForm = document.forms['nameForm'];

let bigText = document.querySelector(".bigText");

let title = document.querySelector('.title');



// submit Function
myForm.addEventListener('submit', function(e){
    e.preventDefault();
    const inputValue = myForm.querySelector('input[type = text]').value;

    bigText.textContent = inputValue;
    
    bigText.setAttribute("data-text", inputValue);

    if(inputValue.length > 11){
        alert('Input Your Name...');
        location.reload() //Reloads The Page if Your Name is Longer Than 11, Haha!
    } else if(inputValue = ''){
        alert('There was nothing in the input Field');
        location.reload();
    }
});

// MouseOver Function-----Changed to Click Function
function changeText(){
    title.textContent = 'Hidden Texts In Every Project, Haha!' //Surprised
}

// MouseOut Function
function resetText(){
    title.textContent = 'NAME ANIMATION GENERATOR'
}
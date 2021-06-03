const submitBtn = document.getElementById('submit-btn');
const  colorField = document.getElementById('color-field');
const inputField = document.getElementById('input-field');
const topSection = document.getElementById('top-section');
const middleSection = document.getElementById('middle-section');
const bottomSection = document.getElementById('bottom-section');
const pronounField = document.getElementById('pronoun-field');
const submitProBtn = document.getElementById('submit-pro-btn');
const pronouns = document.getElementById('pronouns');
const changeFontBtn = document.getElementById("change-font-btn");


//EVENT LISTERNER SUBMIT-BTN
submitBtn.addEventListener('click', () => {
    middleSection.textContent = inputField.value.toUpperCase();
    topSection.style.backgroundColor = colorField.value;
    bottomSection.style.backgroundColor = colorField.value;
    
});

//EVENT LISTERNER SUBMIT-PRO-BTN
submitProBtn.addEventListener('click', () =>{
    pronouns.textContent = pronounField.value;
});

//EVENT LISTENER CHANGE FONT
changeFontBtn.addEventListener('click', ()=>{
    middleSection.style.fontFamily = "Impact,Charcoal,sans-serif";
});



const form = document.getElementById("form");
const userName = document.getElementById("username");
const emailVal = document.getElementById("email");
const passOne = document.getElementById("password");
const passTwo = document.getElementById("password2");

const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };
//showError
function showError(input ,message){
    const formControl = input.parentElement;
    formControl.classList=('form-control error');
    const span = formControl.querySelector("span");
    span.innerText=message;
}

function showSuccess(input){
    const formControl = input.parentElement;
    formControl.classList=('form-control success');
}

var arr= [userName,passOne,passTwo,emailVal];




form.addEventListener("submit",function(e){
    e.preventDefault();

    checkRequired(arr);
    checkPassword(passOne,passTwo);

  
})



function checkRequired(inputArr){
    inputArr.forEach(function (item){
        if(item.value===''){
            showError(item, `${item.id}`+ ' is Required');
        }else if(item.id==='email'&& !validateEmail(emailVal.value) ){
            showError(emailVal,'Email is not valid');
        }
        else{
            showSuccess(item);
        }
    })
}

function checkPassword (passOne,passTwo){
    if(passOne.value===passTwo.value){
        showSuccess(passTwo);
    }else{
        showError(passTwo,'passwords are not matched');
    }
}



// we refactored the code with solid principle
// console.log("submit");

// if(userName.value===''){
//     showError(userName,'Username is Required');
// }else{
//     showSuccess(userName);
// }

// if(emailVal.value===''){
//     showError(emailVal,'Email is Required');
// }else if (!validateEmail(emailVal.value)){
//     showError(emailVal,'Email is not valid');

// }
// else{
//     showSuccess(emailVal);
// }

// if(passOne.value===''){
//     showError(passOne,'Password is Required');
// }else{
//     showSuccess(passOne);
// }
// if(passTwo.value===''){
//     showError(passTwo,'Password is Required');
// }else{
//     showSuccess(passTwo);
// }
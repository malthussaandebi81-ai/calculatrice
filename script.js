const buttonEl=document.querySelectorAll("button");

const inputFieldEl=document.getElementById("result");
for(let i=0;i<buttonEl.length;i++){
    buttonEl[i].addEventListener("click",()=>{
        const buttonValue=buttonEl[i].textContent;
        if(buttonValue==="C"){
            clearResult();
        }else if(buttonValue==="="){
            calculateResult();
        }else{
            appendToResult(buttonValue);
        }
    })
}

function clearResult(){
    inputFieldEl.value="";
}

function calculateResult(){
    inputFieldEl.value=eval(inputFieldEl.value)
}

function appendToResult(buttonValue){
    inputFieldEl.value+=buttonValue;
}
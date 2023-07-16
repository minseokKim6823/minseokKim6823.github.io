const number=document.getElementById("number");
const increase=document.getElementById("increase");
const decrease=document.getElementById("decrease");
increase.onclick= () => {
    const current=parseInt(number.innerText,10)
        number.innerText=current+1;
}
decrease.onclick= () => {
    const current=parseInt(number.innerText,10)
        number.innerText=current-1;    
}
increase5.onclick= () => {
    const current=parseInt(number.innerText,10)
        number.innerText=current+5;
}
decrease5.onclick= () => {
    const current=parseInt(number.innerText,10)
        number.innerText=current-5;    
}
clear.onclick= () => {
    number.innerText=0;    
}  
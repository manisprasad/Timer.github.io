let btn_start = document.getElementsByClassName("button-start")[0]
btn_start.disable = "true";
let hour = document.getElementsByClassName("watch")[0];
let min = document.getElementsByClassName("watch")[1];
let sec = document.getElementsByClassName("watch")[2];
let time_out = document.getElementsByClassName("message")[0];
let intervalId;
let a = 0;
let min_value = 0;
let hour_value = 0;
const timer = () =>{
    if(!isNaN(sec.value) && !isNaN(hour.value) && !isNaN(min.value)){
        document.getElementsByTagName("h1")[0].innerHTML = `Timer<h3>(stops after ${hour_value}hour : ${min_value}min : ${a}sec)</h3>`
    }
       intervalId = setInterval(() => {
    sec.style.background = "black";
    sec.style.fontSize = "50px";
    sec.style.border = "3px double black";
    sec.value = `${a}`;
    if(isNaN(sec.value) || isNaN(hour.value) || isNaN(min.value)){
        btn_start.style.display = "block";
        document.getElementsByTagName("h1")[0].innerHTML = "Please Enter the valid Number";
        clearInterval(intervalId);
    }
    else if(hour_value == 0 && min_value == 0 && a ==0){
        clearInterval(intervalId);
        time_out.innerHTML = "Time  out"
        time_out.classList.add("timer-out");
        sec.value = "00";
        min.value = "00";
        hour.value = "00";

    }
    else if(a == 0){
        a = 59;
        if (min_value == 0 && hour_value>0){
            hour.style.background = "black";
            hour.style.color = "white";
            hour.style.fontSize = "50px";
            hour.style.border = "3px double black";
            min_value = 59;
            if(hour_value == 0){
                hour_value++;
            }
            hour_value--;
            hour.value = `${hour_value}`
        }
        min_value--;
        min.value = `${min_value}`;
        min.style.background = "black";
        min.style.color = "white";
        min.style.fontSize = "50px";
        min.style.border = "3px double black";
    }
    a--;
   }, 1000);
}
btn_start.addEventListener("click",()=>{
    btn_start.style.display = "none";
    a = sec.value;
    min_value = min.value;
    hour_value = hour.value;
    console.log(hour_value);
    console.log(min_value);
    console.log(a);
})
btn_start.addEventListener("click", timer)
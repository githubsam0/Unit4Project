
let q2b1 = document.querySelector(".q2#b1");
let q2b2 = document.querySelector(".q2#b2");
let q2b3 = document.querySelector(".q2#b3");
let q2b4 = document.querySelector(".q2#b4");

let q3b1 = document.querySelector(".q3#b1");
let q3b2 = document.querySelector(".q3#b2");
let q3b3 = document.querySelector(".q3#b3");
let q3b4 = document.querySelector(".q3#b4");

let q4b1 = document.querySelector(".q4#b1");
let q4b2 = document.querySelector(".q4#b2");
let q4b3 = document.querySelector(".q4#b3");
let q4b4 = document.querySelector(".q4#b4");

let q5b1 = document.querySelector(".q5#b1");
let q5b2 = document.querySelector(".q5#b2");
let q5b3 = document.querySelector(".q5#b3");
let q5b4 = document.querySelector(".q5#b4");

let q6b1 = document.querySelector(".q6#b1");
let q6b2 = document.querySelector(".q6#b2");

let q3 = document.querySelector(".qu3");
let q4 = document.querySelector(".qu4");
let q5 = document.querySelector(".qu5");
let q6 = document.querySelector(".qu6");

let countE = 0;
let countR = 0;
let countD = 0;

let david = document.querySelector(".david");
let ray = document.querySelector(".ray");
let ethan = document.querySelector(".ethan");

let result = document.querySelector(".result p");
//q1
q2b1.addEventListener("click", function(){
    countE++;
    q3.style = "display: block";
})
q2b2.addEventListener("click", function(){
    countR++;
    q3.style = "display: block";
})
q2b3.addEventListener("click", function(){
    countD++;
    q3.style = "display: block";
})
q2b4.addEventListener("click", function(){
    q3.style = "display: block";
})

//q2
q3b1.addEventListener("click", function(){
    q4.style = "display: block";
})
q3b2.addEventListener("click", function(){
    countE++;
    q4.style = "display: block";
})
q3b3.addEventListener("click", function(){
    countD++;
    q4.style = "display: block";
})
q3b4.addEventListener("click", function(){
    q4.style = "display: block";
})

//q3
q4b1.addEventListener("click", function(){
    countD++;
    q5.style = "display: block";
})
q4b2.addEventListener("click", function(){
    countR++;
    q5.style = "display: block";
})
q4b3.addEventListener("click", function(){
    countE++;
    q5.style = "display: block";
})
q4b4.addEventListener("click", function(){
    q5.style = "display: block";
})

//q4
q5b1.addEventListener("click", function(){
    countR++;
    q6.style = "display: block";
})
q5b2.addEventListener("click", function(){
    q6.style = "display: block";
})
q5b3.addEventListener("click", function(){
    countD++;
    q6.style = "display: block";
})
q5b4.addEventListener("click", function(){
    q6.style = "display: block";
    countE++;
})

//q4
q6b1.addEventListener("click", function(){
    countD++;
    q6.style = "display: block";
    if (countD >= 5){
        result.textContent = "You are David Richardson!!"
        david.style = "display: block";
    }
    else if (countE === 4){
        result.textContent = "You are Ethan Thackary!!"
        ethan.style = "display: block";
    }
    else if (countR <= 3){
        result.textContent = "You are Raymond Xie!!"
        ray.style = "display: block";
    }
})
q6b2.addEventListener("click", function(){
    q6.style = "display: block";
    if (countD >= 5){
        result.textContent = "You are David Richardson!!";
        david.style = "display: block";
    }
    else if (countE === 4){
        result.textContent = "You are Ethan Thackary!!";
        ethan.style = "display: block";
    }
    else if (countR <= 3){
        result.textContent = "You are Raymond Xie!!";
        ray.style = "display: block";
    }
})



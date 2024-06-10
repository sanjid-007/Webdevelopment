const numbers = document.querySelectorAll(".number");
const btn = document.querySelectorAll(".btn");
const ropes = document.querySelectorAll(".rope");
let btn1,btn2;
btn.forEach(e=>{

 
        if(e.textContent === "next"){
           btn1 = e;
        }
        else{
            btn2 = e;
        }
   
})
btn.forEach(e=>{

 
    e.addEventListener("click",()=>{
        if(e.textContent === "next"){
            console.log("hello");
           next(e);
        }
        else{
            console.log("bello");
            prev(e);
        }
    })
})

function next(e){
    let p = 0;
    numbers.forEach((k,id)=>{
      if(k.classList.contains("active")){
        p = id;
      }
    })
    if( numbers[p].classList.contains("active")){
        console.log(numbers.length)
    }
    // numbers[p].classList.remove("active");
    p++;
    numbers[p].classList.add("active");
   if(p === (numbers.length)-1){
    btn1.disabled = true;
   }
   ropes[p-1].classList.add("active");
   btn2.disabled = false;
}

function prev(e){
    let p = 0;
    numbers.forEach((k,id)=>{
      if(k.classList.contains("active")){
        p = id;
      }
    })
    if( numbers[p].classList.contains("active")){
        console.log(numbers.length)
    }
    // numbers[p].classList.remove("active");
    numbers[p].classList.remove("active");
    p--;
   if(p === 0){
    btn2.disabled = true;
   }
   ropes[p].classList.remove("active");
   btn1.disabled = false;
}
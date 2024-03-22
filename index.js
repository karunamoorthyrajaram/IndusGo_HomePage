const myButton1 = document.getElementById("myButton1");
const card1 = document.getElementById("card1");
const myButton2 = document.getElementById("myButton2");
const card2 = document.getElementById("card2");


myButton1.addEventListener("click", event => {
    if (myButton1) {
        card1.style.display = "block";
        card2.style.display = "none";
    } else {
        card1.style.display = "none";
        card2.style.display = "block";
    }
})
myButton2.addEventListener("click", event => {
    if (myButton2) {
        card1.style.display = "none";
        card2.style.display = "block";
    } 
    else if (myButton1) {
        card1.style.display = "block";
        card2.style.display = "none";
    }
})
 

const slides=document.querySelector(".slider1").children;
const prev=document.querySelector(".prev");
const next=document.querySelector(".next");
const indicator=document.querySelector(".indicator");
let index=0;


    
function circleIndicator(){
    for(let i=0; i< slides.length; i++){
        const div=document.createElement("div");
                div.innerHTML=i+1;
            div.setAttribute("onclick","indicateSlide(this)")
            div.id=i;
            if(i==0){
                div.className="active";
            }
    }
}
circleIndicator();

function indicateSlide(element){
        index=element.id;
        changeSlide();
        updateCircleIndicator();
        resetTimer();
}
    

function prevSlide(){
    if(index==0){
    index=slides.length-1;
    }
    else{
    index--;
    }
    changeSlide();
}

function nextSlide(){
    if(index==slides.length-1){
    index=0;
    }
    else{
    index++;
    }
    changeSlide();
}

function changeSlide(){
        for(let i=0; i<slides.length; i++){
            slides[i].classList.remove("active");
        }

    slides[index].classList.add("active");
}

function resetTimer(){
    clearInterval(timer);
    timer=setInterval(autoPlay,4000);
}


function autoPlay(){
    nextSlide();
}

let timer=setInterval(autoPlay,4000);




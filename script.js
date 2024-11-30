let list = document.querySelector(".lis");
let menu = document.querySelector(".menu");
let close = document.querySelector(".close");
let search = document.getElementById("srch");
let input = document.querySelector(".inpt");

let tittle = document.querySelector(".title");
let openmenu = document.querySelector(".inner-list");

function myFunction(){
    list.classList.add("show");
    menu.classList.add("remove");
    close.classList.add("closee");
    
}

function myFunction2(){
    list.classList.remove("show");
    menu.classList.remove("remove");
    close.classList.remove("closee");
}

function myFunction3(){
    openmenu.classList.remove("down");
   
    
}



menu.addEventListener("click",myFunction);
close.addEventListener("click",myFunction2);
tittle.addEventListener("click",myFunction3);












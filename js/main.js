//  change navbar style on scroll

window.addEventListener('scroll', ()=>{
    document.querySelector("nav").classList.toggle('window-scroll', window.scrollY>100)
})

// show/hod faq

const faqs= document.querySelectorAll('.faq');

faqs.forEach(faq=>{
    faq.addEventListener('click', ()=>{
        faq.classList.toggle('open');

        // change icon
        const icon =faq.querySelector('.faq_icon i');
        if(icon.className === "uil uil-plus"){
            icon.className= "uil uil-minus"
        }
        else{
            icon.className = "uil uil-plus"
        }
    })
})


// media query match
let phone=window.matchMedia("(max-width: 600px)");
let open=document.querySelector(".open_b");
let close=document.querySelector(".close_b");
function myfunction(){
if(phone.matchMedia){
open.style.display="block"
close.style.display="block"
}
else{
    open.style.display="none"
close.style.display="none"
}
}
myfunction();

// show/hide nav menu
const menu =document.querySelector(".menu");
const menuBtn =document.querySelector("#open_menu_btn");
const closeBtn =document.querySelector("#close_menu_btn");

menuBtn.addEventListener('click', ()=>{
    menu.style.display= "flex";
    closeBtn.style.display="inline-block";
    menuBtn.style.display="none"
})

// closenav menu
const closeNav=()=>{
   menu.style.display="none";
   closeBtn.style.display="none";
   menuBtn.style.display= "inline-block" 
}
closeBtn.addEventListener('click',closeNav);
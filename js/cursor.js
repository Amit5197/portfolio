/* ======================================
   CUSTOM DEVOPS CURSOR
====================================== */


const cursor=document.querySelector(".cursor");



document.addEventListener(
"mousemove",
(e)=>{


cursor.style.left=e.clientX+"px";


cursor.style.top=e.clientY+"px";


});





document.querySelectorAll("a,button")
.forEach(element=>{


element.addEventListener(
"mouseenter",
()=>{


cursor.classList.add("big");


});




element.addEventListener(
"mouseleave",
()=>{


cursor.classList.remove("big");


});


});



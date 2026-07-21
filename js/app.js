/* ======================================
   DEVOPS PORTFOLIO MAIN APP
====================================== */


// AOS Animation Initialization

AOS.init({

    duration:1000,

    once:true,

    offset:100

});





// Smooth Scroll


document.querySelectorAll("nav a").forEach(link=>{


    link.addEventListener("click",function(e){


        e.preventDefault();


        const target=document.querySelector(
            this.getAttribute("href")
        );


        target.scrollIntoView({

            behavior:"smooth"

        });


    });


});







// Header Background Change On Scroll


const header=document.querySelector(".header");


window.addEventListener("scroll",()=>{


    if(window.scrollY > 50){


        header.classList.add("active");


    }

    else{


        header.classList.remove("active");


    }


});








// Current Year Footer


const footer=document.querySelector("footer");


footer.innerHTML=

`
© ${new Date().getFullYear()} DevOps Engineer Portfolio
`;





// Console Developer Message


console.log(
`
================================

 DevOps Portfolio Loaded 🚀

 Skills:
 Linux | Docker | Kubernetes
 AWS | CI/CD | Terraform

================================
`
);



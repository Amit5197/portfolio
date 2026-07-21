/* ======================================
   DEVOPS PORTFOLIO CHATBOT
====================================== */


const chatBtn=
document.getElementById("chatBtn");


const chatWindow=
document.querySelector(".chat-window");


const chatInput=
document.getElementById("chatInput");


const chatBody=
document.querySelector(".chat-body");





chatBtn.addEventListener(
"click",
()=>{


chatWindow.classList.toggle(
"open"
);


});







function addMessage(message,type){


const div=document.createElement("div");


div.className=type;


div.innerText=message;


chatBody.appendChild(div);


chatBody.scrollTop=
chatBody.scrollHeight;


}








chatInput.addEventListener(
"keypress",
(e)=>{


if(e.key==="Enter"){



let question=
chatInput.value.toLowerCase();



addMessage(
chatInput.value,
"user"
);



chatInput.value="";



let reply="";




if(question.includes("docker")){


reply=
"Docker is a container platform used for packaging applications with dependencies.";


}



else if(question.includes("kubernetes")){


reply=
"Kubernetes manages container orchestration, scaling and deployment automation.";


}



else if(question.includes("aws")){


reply=
"AWS provides cloud services like EC2, S3, Lambda, VPC and CloudFormation.";


}




else if(question.includes("ci/cd")){


reply=
"CI/CD automates software build, testing and deployment pipelines using tools like Jenkins, GitHub Actions and GitLab CI.";


}



else{


reply=
"I specialize in DevOps automation, cloud infrastructure, CI/CD pipelines and Kubernetes.";


}





setTimeout(()=>{


addMessage(
reply,
"bot"
);


},500);



}


});



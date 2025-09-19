let currMode="light";

const btn=document.querySelector("#btn");
const ele=document.getElementById('join-btn');
const elem=document.querySelector(".mode");

btn.addEventListener("click", ()=>{
    if(currMode==="light"){
        currMode="dark";
        document.querySelector("body").style.backgroundColor = "black";
        document.querySelector("#head").style.backgroundColor = "black";
        document.querySelector("#white").style.color = "white";
        document.querySelector("#h1-white").style.color = "white";
        document.querySelector("#join-btn").style.backgroundColor = "white";
        document.querySelector("#join-btn").style.color = "black";
        document.querySelector(".ul1-white").style.color = "white";
        document.querySelector(".ul2-white").style.color = "white";
        document.querySelector(".ul3-white").style.color = "white";
        document.querySelector(".ul4-white").style.color = "white";
        document.querySelector(".ul5-white").style.color = "white";
        document.querySelector("#p1-white").style.color = "white";
        document.querySelector("#p2-white").style.color = "white";
        document.querySelector("#des").style.color = "white";
        document.querySelector("#head").style.boxShadow ="2px 2px 10px rgba(255, 254, 254, 0.8)";
        document.querySelector("#poster-img").style.boxShadow ="2px 2px 10px rgba(255, 254, 254, 1)";
       ele.addEventListener("mouseover",()=>{
            ele.style.color ="goldenrod";
            ele.style.boxShadow = "2px 2px 10px rgba(255, 254, 254, 5)";
        });
         ele.addEventListener("mouseout",()=>{
            ele.style.color ="black";
            ele.style.boxShadow = "none";
        });
        elem.addEventListener("mouseover",()=>{
            elem.style.boxShadow = "2px 2px 10px rgba(255, 254, 254, 5)";
        });
         elem.addEventListener("mouseout",()=>{
            elem.style.boxShadow = "none";
        });   
    }
    else{
        currMode="light";
        document.querySelector("body").style.backgroundColor = "white";
         document.querySelector("#head").style.backgroundColor = "white";
        document.querySelector("#white").style.color = "black";
        document.querySelector("#h1-white").style.color = "black";
        document.querySelector("#join-btn").style.backgroundColor = "black";
        document.querySelector("#join-btn").style.color = "white";
        document.querySelector(".ul1-white").style.color = "black";
        document.querySelector(".ul2-white").style.color = "black";
        document.querySelector(".ul3-white").style.color = "black";
        document.querySelector(".ul4-white").style.color = "black";
        document.querySelector(".ul5-white").style.color = "black";
        document.querySelector("#p1-white").style.color = "black";
        document.querySelector("#p2-white").style.color = "black";
        document.querySelector("#des").style.color = "black";
         document.querySelector("#head").style.boxShadow ="2px 2px 10px rgba(0,0,0,0.25)";
          ele.addEventListener("mouseout",()=>{
            ele.style.color ="white";
        });
         ele.addEventListener("mouseover",()=>{
             ele.style.boxShadow = "2px 2px 10px rgba(0,0,0,1)";
        });
        elem.addEventListener("mouseover",()=>{
            elem.style.boxShadow = "2px 2px 10px rgba(0,0,0,1)";
        });
        document.querySelector("#poster-img").style.boxShadow ="2px 2px 10px rgba(0,0,0,1)";
    }
    console.log(currMode);
});
 function changeImage() {
    if(currMode==="light"){
        let img = document.getElementById("myImage");
        img.src = "img/brightness.png";
        document.querySelector("#btn").style.backgroundColor = "black";
         img.style.border = "white";
    }
    if(currMode==="dark"){
        let img = document.getElementById("myImage");
        img.src = "img/sleep-mode.png";
        document.querySelector("#btn").style.backgroundColor = "lightgray";
    }  
    }
// ==========================
// GlobalHire JavaScript
// ==========================

// Dark Mode
const themeBtn = document.querySelector(".theme-btn");

themeBtn?.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    const icon = themeBtn.querySelector("i");

    if(document.body.classList.contains("dark")){
        icon.classList.remove("fa-moon");
        icon.classList.add("fa-sun");
        localStorage.setItem("theme","dark");
    }else{
        icon.classList.remove("fa-sun");
        icon.classList.add("fa-moon");
        localStorage.setItem("theme","light");
    }
});

// Load saved theme
window.addEventListener("load", () => {

    if(localStorage.getItem("theme")==="dark"){
        document.body.classList.add("dark");

        const icon=document.querySelector(".theme-btn i");

        if(icon){
            icon.classList.remove("fa-moon");
            icon.classList.add("fa-sun");
        }
    }

});

// Search button
const searchBtn=document.querySelector(".search-box button");

searchBtn?.addEventListener("click",()=>{

    const keyword=document.querySelector(".search-box input").value;

    const country=document.querySelector(".search-box select").value;

    alert(`Searching for "${keyword}" jobs in ${country}`);

});

// Job buttons

document.querySelectorAll(".job button").forEach(btn=>{

    btn.addEventListener("click",()=>{

        alert("Job Details page will be opened.");

    });

});

// Hover animation

document.querySelectorAll(".card,.cat,.job").forEach(item=>{

    item.addEventListener("mouseenter",()=>{

        item.style.transform="translateY(-8px)";

    });

    item.addEventListener("mouseleave",()=>{

        item.style.transform="translateY(0)";

    });

});

// Animated Counter

const counters=document.querySelectorAll(".card h2");

counters.forEach(counter=>{

    const target=parseInt(counter.innerText);

    let current=0;

    const update=()=>{

        current+=Math.ceil(target/80);

        if(current>target) current=target;

        counter.innerText=current+"+";

        if(current<target){

            requestAnimationFrame(update);

        }

    };

    update();

});

// Back To Top Button

const topBtn=document.createElement("button");

topBtn.innerHTML='<i class="fa-solid fa-arrow-up"></i>';

topBtn.id="topBtn";

document.body.appendChild(topBtn);

topBtn.style.position="fixed";
topBtn.style.bottom="25px";
topBtn.style.right="25px";
topBtn.style.width="55px";
topBtn.style.height="55px";
topBtn.style.borderRadius="50%";
topBtn.style.border="none";
topBtn.style.background="#2563eb";
topBtn.style.color="#fff";
topBtn.style.cursor="pointer";
topBtn.style.display="none";
topBtn.style.boxShadow="0 10px 25px rgba(0,0,0,.25)";
topBtn.style.zIndex="999";

window.addEventListener("scroll",()=>{

    if(window.scrollY>300){

        topBtn.style.display="block";

    }else{

        topBtn.style.display="none";

    }

});

topBtn.addEventListener("click",()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});
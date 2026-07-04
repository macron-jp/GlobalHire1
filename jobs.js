// =========================
// GlobalHire Jobs Page
// =========================

const searchInput = document.getElementById("searchInput");
const countryFilter = document.getElementById("countryFilter");
const jobs = document.querySelectorAll(".job");

// Create Job Counter
const counter = document.createElement("h3");
counter.style.margin = "20px 0";
counter.style.textAlign = "center";
document.querySelector(".featured").insertBefore(
    counter,
    document.getElementById("jobContainer")
);

// Filter Jobs
function filterJobs(){

    const keyword = searchInput.value.toLowerCase();
    const country = countryFilter.value;

    let visible = 0;

    jobs.forEach(job=>{

        const title = job.querySelector("h3").textContent.toLowerCase();
        const jobCountry = job.dataset.country;

        const matchTitle = title.includes(keyword);
        const matchCountry =
            country==="all" || jobCountry===country;

        if(matchTitle && matchCountry){

            job.style.display="block";
            visible++;

        }else{

            job.style.display="none";

        }

    });

    counter.innerHTML = `${visible} Job(s) Found`;

}

searchInput.addEventListener("keyup",filterJobs);

countryFilter.addEventListener("change",filterJobs);

filterJobs();

// =========================
// Save Job Button
// =========================

jobs.forEach(job=>{

    const save=document.createElement("button");

    save.innerHTML='<i class="fa-regular fa-heart"></i>';

    save.style.marginTop="10px";
    save.style.width="100%";
    save.style.background="#f3f4f6";
    save.style.color="#2563eb";
    save.style.border="none";
    save.style.padding="12px";
    save.style.borderRadius="10px";
    save.style.cursor="pointer";

    save.onclick=()=>{

        if(save.classList.contains("saved")){

            save.classList.remove("saved");

            save.innerHTML='<i class="fa-regular fa-heart"></i> Save Job';

            save.style.background="#f3f4f6";

        }else{

            save.classList.add("saved");

            save.innerHTML='<i class="fa-solid fa-heart"></i> Saved';

            save.style.background="#2563eb";
            save.style.color="#fff";

        }

    };

    job.appendChild(save);

});

// =========================
// Featured Badge
// =========================

jobs.forEach((job,index)=>{

    if(index<2){

        const badge=document.createElement("span");

        badge.innerHTML="Featured";

        badge.style.position="absolute";
        badge.style.top="15px";
        badge.style.right="15px";
        badge.style.background="#22c55e";
        badge.style.color="#fff";
        badge.style.padding="5px 12px";
        badge.style.borderRadius="20px";
        badge.style.fontSize="12px";

        job.style.position="relative";

        job.appendChild(badge);

    }

});

// =========================
// Simple Fade Animation
// =========================

const observer = new IntersectionObserver(entries=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.style.opacity="1";
            entry.target.style.transform="translateY(0)";

        }

    });

});

jobs.forEach(job=>{

    job.style.opacity="0";
    job.style.transform="translateY(30px)";
    job.style.transition=".6s";

    observer.observe(job);

});
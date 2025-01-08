var typed = new Typed(".typing", {
    strings: ["Web Developer", "Technical Trainer"],
    typeSpeed: 100,
    backSpeed: 60, 
    loop: true,
    showCursor: true,
});
/*---------------------------------------------------------------------- */
const nav = document.querySelector(".nav"),
    navList = nav.querySelectorAll("li"),
    totalNavList = navList.length,
    allSection = document.querySelectorAll(".section"),
    totalSection = allSection.length;
    for(let z=0;z<totalNavList;z++)
    {
        const a = navList[z].querySelector("a");
        a.addEventListener('click',function()
        {
            removeBackSection();
            for (let x=0;x<totalNavList;x++)
            {
                if(navList[x].querySelector("a").classList.contains("active"))
                {
                    addBackSection(x);
                    // allSection[x].classList.add("back-section")
                }
                navList[x].querySelector("a").classList.remove("active");
            }
            this.classList.add("active")
            showSection(this);
            if(window.innerWidth < 1200)
            {
                asideSectionTogglerBtn();
            }
        })
    }
    function removeBackSection()
    {
        for(let z=0;z<totalSection;z++)
            {
                allSection[z].classList.remove('back-section');
            }
    }
    function addBackSection(num)
    {
        allSection[num].classList.add("back-section")
    }
    function showSection(ele)
    {
        for(let z=0;z<totalSection;z++)
        {
            allSection[z].classList.remove('active');
        }
        const target = ele.getAttribute("href").split("#")[1]
        document.querySelector("#"+target).classList.add("active")
    }
    function updateNav(ele)
    {
        for(let z=0;z<totalNavList;z++)
        {
            navList[z].querySelector("a").classList.remove("active");
            const target= ele.getAttribute("href").split("#")[1];
            if(target === navList[z].querySelector("a").getAttribute("href").split("#")[1])
            {
                navList[z].querySelector("a").classList.add("active");
            }
        }
    }
    document.querySelector(".hire-me").addEventListener('click',function()
    {
        const sectionIndex = this.getAttribute("data-section-index");
        showSection(this);
        updateNav(this);
        removeBackSection();
        addBackSection(sectionIndex);
    })
    const navTogglerBtn = document.querySelector(".nav-toggler"),
        aside = document.querySelector(".aside");
        navTogglerBtn.addEventListener('click',()=>{
            asideSectionTogglerBtn();
        })
    function asideSectionTogglerBtn()
    {
        aside.classList.toggle("open");
        navTogglerBtn.classList.toggle("open");
        for(let z=0;z<totalSection;z++)
        {
            allSection[z].classList.toggle("open");
        }
    }

    function downloadCV() {
        const link = document.createElement('a');
        link.href = 'https://drive.google.com/uc?export=download&id=1Xt947MQC-gXHtWpThXwQkW7pBvh9IJot'; 
        link.download = 'UsamaCV.pdf';
        document.body.appendChild(link);
        link.click(); 
        document.body.removeChild(link);
    }
/*------------nav ---------- */
 function navToggle(){
    const open = document.querySelector('.humberger-btn');
    const close = document.querySelector('.close-nav-menu');
    const nav = document.querySelector('.nav-menu');
    const body = document.querySelector("body");

    nav.classList.toggle('active');
    body.classList.toggle('active');


}
 /*------about section ---------*/
 (() =>{
        const aboutSection = document.querySelector(".about-section"),
        tabsContainer = document.querySelector(".about-tabs");

        tabsContainer.addEventListener("click", (event) => {
            if (event.target.classList.contains("tab-item") &&
            !event.target.classList.contains('active')){
                const target = event.target.getAttribute("data-target");
                // deactivaate existing  active tab
                tabsContainer.querySelector(".active").classList.remove("outer-shadow","active");
                //activate new tab
                event.target.classList.add("active","outer-shadow");
                // deactivate existing active tab-content
                aboutSection.querySelector(".tab-content.active").classList.remove("active");
                 //activate new tab-content
                aboutSection.querySelector(target).classList.add("active");
            }
        })
 })();
 /*--------------end of about section----*/

//  /*---------portfolio section ---*/
//  (() =>{
//         const filterContainer = document.querySelector(".portfolio.filter"),
//         portfolioItemsContainer = document.querySelector(".portfolio-items"),
//         portfolioItems = document.querySelectorAll(".portfolio-item");
        
//         filterContainer.addEventListener("click",(event) =>{
//             if (event.target.classList.contains("filter-item") &&
//             !event.target.classList.contains('active')){
//                 const target = event.target.getAttribute("data-target");
//                 //deactivate existing active tab
//                 filterContainer.querySelector(".active").classList.remove("outer-shadow","active");
//                 //activate new tab
//                 event.target.classList.add("active","outer-shadow");
//                 //deactivate existing active tab-content
//                 portfolioItemsContainer.querySelector(".portfolio-item.active").classList.remove("active");
//                 //activate new tab cont
//                 portfolioItemsContainer.querySelector(target).classList.add("active");
//             }
//         })
        

//  })();

//  -----------testimonial slider -------
(() =>{
    const sliderContainer = document.querySelector('.testi-slider-container'),
    slides = sliderContainer.querySelectorAll('.testi-item'),
    sliderWidth = sliderContainer.offsetWidth,
    prevbtn = document.querySelector('.testi-slider-nav .prev'),
    nextBtn = document.querySelector('.testi-slider-nav .next');
    let slidesIndex = 0;

    // set width of slides
    slides.forEach((slide) =>{
        slide.style.width = sliderWidth + "px";
    })
    // set width of container
    sliderContainer.style.width = sliderWidth * slides.length + 'px';

    nextBtn.addEventListener('click', () =>{
        if(slidesIndex === slides.length-1){
            slidesIndex = 0;
        }
        else{
            slidesIndex++;
        }
        slider();
    })
    prevbtn.addEventListener('click', () =>{
        if(slidesIndex === 0){
            slidesIndex = slides.length-1;
        }
        else{
            slidesIndex--;
        }
        slider();
    })
    function slider() {
        sliderContainer.style.marginLeft = - (sliderWidth * slidesIndex) + "px";
        loop:true;
    }
    

})();

/* =========== change themes ===== */

const dayNight = document.querySelector(".darklight");
dayNight.addEventListener("click", () => {
    dayNight.querySelector("i").classList.toggle("fa-moon");
    dayNight.querySelector("i").classList.toggle("fa-sun")
    document.body.classList.toggle("dark");
})
window.addEventListener("load", () =>{
    if(document.body.classList.contains("dark")){
       dayNight.querySelector("i").classList.add("fa-sun")
   }
    else
   {
       dayNight.querySelector("i").classList.add("fa-moon");
   }
})

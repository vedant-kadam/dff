
//get the top bar li 
const topbarList = document.querySelectorAll('.topbar-list-item');

//navigation
const navigationFull = document.querySelector(".Navigation");
const navigationLinks= document.querySelector('.nav-links-container');
const navLinks = document.querySelector('.nav-links');
  //navgation -toggle-for phone
const nav_toggle_button = document.getElementById('toggle-btn');
nav_toggle_button.addEventListener('click',toggleNav
);

const image_size = document.querySelector('.slider-img');
const crousal_container = document.querySelector('.slider-box');

// top bar
let i =0;//current topbar link index to be dislayed
let intervalTopbar = null;//to store the interval
checkForTopbar = ()=>{
   
    let width = window.innerWidth;
    
    if(width < 560)
    {
    //checking if the indow was resized again ,and if wasclear the prev interval
        if(intervalTopbar!=null)clearInterval(intervalTopbar);
        i=0;
        setTopbarLinkActive();

        //start new interval
        // setTopbarLinkInActive()--
    
       intervalTopbar= setInterval(()=>{
            // console.count(`SET tIME  ${new Date}`);
            setTopbarLinkActive();
            // setTopbarLinkInActive()--
            
       },1000)

    }else{
       
        topbarList.forEach(el => {
            el.classList.remove('in-active')
        });

        if(intervalTopbar!=null)
        {
            clearInterval(intervalTopbar);
        }
    }
    
}

function setTopbarLinkActive()
{
  
    
    topbarList.forEach(el => {
        el.classList.add('in-active') 
    });
    topbarList[i].classList.remove('in-active');   
    i++;
    if(i>=3) i=0;
  

    
}
function setTopbarLinkInActive()
{
  
    
    topbarList.forEach(el => {
        el.classList.remove('in-active') 
    });
    topbarList[i].classList.add('in-active');   
    i++;
    if(i>=3) i=0;
  

    
}


window.addEventListener("resize",()=>{
    checkForTopbar()
   

});
let navToggleOpen = false;
function positionNavbar()
{
    // console.log(navigationLinks.offsetHeight);
    // console.log(navigationFull.offsetWidth);
    if(window.innerWidth <= 680)
    {   

        if(navToggleOpen)
        {
            navigationLinks.style.top = `${(navigationFull.offsetHeight+2)}px`;

            // console.log(navigationFull.offsetHeight+'px');
            // navigationLinks.style.height= `max-content`;
            // navigationLinks.style.right = `0%`
            navigationLinks.classList.remove('scaleZero');

            navigationLinks.classList.add('scaleOne')
            // navigationLinks.heights
            
       
        } else{
            // navigationLinks.style.top = `-50%`;
            // navigationLinks.style.height = `0`;
            // navigationLinks.style.right = `-100%`;
            // navigationLinks.style.top = `${(navigationFull.offsetHeight-20)}px`;

            // navigationLinks.style.transform='scale(0)';
            navigationLinks.classList.remove('scaleOne');
            navigationLinks.classList.add('scaleZero');

            // navigationLinks.style.top = '-100%';

        }
    }else 
    {
        navToggleOpen = false;
        
        
        navigationLinks.classList.remove('scaleZero');
        navigationLinks.classList.add('scaleOne');


    }

   
}
window.addEventListener("resize",()=>{
    
        positionNavbar();
})



checkForTopbar();
// positionNavbar();

// topbar end

// NavBAr start
function toggleNav()
{
    navToggleOpen=!navToggleOpen;
    positionNavbar();
}
if(window.innerWidth >680)
{
    navigationLinks.classList.add('scaleOne');
            navigationLinks.classList.remove('scaleZero');
}





const resizeCarosel = ()=>{
    let test = image_size.offsetHeight+5 ;
    // console.log(test);
    crousal_container.style.height = test+"px";
}



resizeCarosel();


window.addEventListener("resize", resizeCarosel);

//caraosul == slide

const slides = document.querySelectorAll('.slide');
const btns = document.querySelectorAll('.navigation-button');
// console.log(slides,btns);
let currentslide = 1;
//for manual Navigation
const ManualNav = (manual)=>{
    slides.forEach((slide)=>slide.classList.remove('slide-active'));
    btns.forEach((btn)=>btn.classList.remove('slide-active'));
    // slides[currentslide]

    slides[manual].classList.add('slide-active');
    btns[manual].classList.add('slide-active');
}

btns.forEach((btn,i)=>{
    btn.addEventListener('click',()=>{
        ManualNav(i);
        // console.log(`Hello ${i}`);
        currentslide=i;
    })
})

//autoPlay
// const repeatSlide =  ()=>{
//     let active = document.querySelectorAll('.slide-active');
//     console.log(active);
//     let curr =1;

//     const rep = ()=>{
//         setTimeout(()=>{
//             active.forEach((el)=>{
//                 el.classList.remove('slide-active');
//             })
//             slides[curr].classList.add('slide-active');
//             btns[curr].classList.add('slide-active');
            
//             curr++;
//             if(curr===slides.length)curr=0;
//             if(curr>=slides.length)return;
//             rep();
//         },2000);
//     }
//     rep();
// }
// repeatSlide();
resizeCarosel();


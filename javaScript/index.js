const nav_open=document.querySelector(".nav_hamburger")
const nav_close=document.querySelector(".close_toggle")
const menu=document.querySelector(".nav_menu")


nav_open.addEventListener("click", ()=>{
    
    menu.classList.add("open")
    document.body.classList.add("active")
    
})
nav_close.addEventListener("click", ()=>{
    menu.classList.remove("open")
    document.body.classList.remove("active")
    
})



//slide-glide js
const slider1=document.getElementById("glide_1")
if(slider1){
    new Glide(slider1,{
        "type": 'carousel',
        "startAt": 0,
        "autoplay":4000,
        "hoverpause":true,
        "perView":1,
        "animationDuration":3000,
        "animationTimingFunc":"linear"
        
    }).mount()
}

const slider2=document.getElementById("glide2")
if(slider2){
    new Glide(slider2,{
        "type": 'carousel',
        "startAt": 0,
        "hoverpause":true,
        "perView":4,
        "animationDuration":800,
        "animationTimingFunc":"ease-out",
        "breakpoints":{
            1200:{
                "perView":3
            },
            768:{
                "perView":2
            }
        }
        
    }).mount()
}
//popup
const popup=document.querySelector(".popup")
const closePopup=document.querySelector(".popup_close")

if(popup){
    closePopup.addEventListener("click",()=>{
        popup.classList.add("hide_popup")
    })
    window.addEventListener("load",()=>{
        setTimeout(()=>{
            popup.classList.remove("hide_popup")
        },500)
    })
}
//fixed nav bar and goto top

const navigation=document.querySelector(".navigation")
const goto_top=document.querySelector(".goto_top")
let fixed=false

window.addEventListener("scroll",fix_nav_show_goto)

function fix_nav_show_goto(){
    if(window.pageYOffset> 70 && fixed==false) {
        navigation.classList.add("fix_nav")
        goto_top.style.visibility= "visible";
        fixed=true
    }else if(window.pageYOffset< 71  && fixed==true){
        navigation.classList.remove("fix_nav")
        goto_top.style.visibility= "hidden";
        fixed=false
    }
}
goto_top.onclick=(e)=>{
    e.preventDefault();
    window.scrollTo({
        left:0,
        top:0,
        behavior:"smooth"
    })
}



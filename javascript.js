function toggleMenu(){
    const menu = document.querySelector(".menu-div");
    if(menu.style.display==="block"){
        menu.style.display="none"
        document.querySelector(".menu-btn").innerHTML="&#9776";
        
    }else{
        menu.style.display="block"
        document.querySelector(".menu-btn").innerHTML="&times;";
    }
}

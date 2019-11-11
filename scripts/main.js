/*Parallax effect*/

window.addEventListener('scroll', function(e) {
    var scrolled = window.pageYOffset;
    const background = document.querySelector('.background');
    background.style.top = - (scrolled) + 'px';
});



/*Menu burger animation*/



document.getElementById ("menuBurger").addEventListener ("click", menuFunction);

function menuFunction () {
    
    /*displaying/hidding menu items*/
    var menu = document.getElementById("menuItems");

    if (menu.style.visibility === "visible") {
        menu.style.visibility = "hidden";
    } else  {
        menu.style.visibility = "visible";
    }

    /*menuburger animation*/
    var menuburger = document.getElementsByClassName("menuburger");
    console.log(menu);
    menuburger[0].classList.toggle("menuAnimation");

    menu.classList.toggle("menuAnimation");
    
}


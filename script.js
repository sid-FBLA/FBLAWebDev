document.addEventListener("DOMContentLoaded", () => {
    console.log("hello world");
    AOS.init();
    //Expands and contracts mobile navigation menu
    let mobileNav = document.querySelector("#mobile-menu");
    console.log(mobileNav);
    let mobileNavExpand = mobileNav.offsetHeight;
    console.log(mobileNavExpand);
    mobileNav.style.height = "0";
    console.log(mobileNav.offsetHeight);
    $("#mobile-menu").css('overflow', 'hidden');
    let menuButton = document.querySelector('#mobile-menu-button');
    let menuButtonOpen = menuButton.querySelector('svg');
    console.log(menuButtonOpen);
    let menuButtonClose = menuButton.querySelector('svg:last-child');
    console.log(menuButtonClose);
    menuButton.addEventListener("click", function() {
        if (mobileNav.offsetHeight == 0) {
            $("#mobile-menu").height(0).animate({height: mobileNavExpand}, 500);
            menuButtonOpen.classList.add("hidden");
            menuButtonClose.classList.remove("hidden");
        } else {
            $("#mobile-menu").height(mobileNavExpand).animate({height: 0}, 500);
            menuButtonOpen.classList.remove("hidden");
            menuButtonClose.classList.add("hidden");
        }   
    })
    
   
});
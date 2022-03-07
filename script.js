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
    });

    function createInvalid(element, firstLine, secondLine) {
      console.log("running");
      const invalidText = document.createElement("P");
      invalidText.classList.add("mt-2", "text-sm", "text-red-600", "dark:text-red-500");
      element.appendChild(invalidText);
      const invalidTextSpan = document.createElement("SPAN");
      invalidTextSpan.classList.add("font-medium");
      invalidTextSpan.innerHTML = firstLine;
      invalidText.appendChild(invalidTextSpan);
      invalidText.innerHTML = secondLine;
    }
    //modifying Datepicker
    const datePickers = document.querySelectorAll(".datepicker-input");

    for (i = 0; i < datePickers.length; i += 1) {
      let datePicker = datePickers[i];
      console.log(datePicker);
      datePicker.addEventListener('click', function(e) {
        let dateOptions = document.querySelectorAll(".datepicker-picker .datepicker-main .datepicker-view .days .datepicker-grid span");
        let changeMonth = document.querySelectorAll(".datepicker-picker .datepicker-controls button");
        //Reset date options if month is changed -- may be unecessary
        for (i = 0; i < changeMonth.length; i += 1) {
          changeMonth[i].addEventListener('click', function() {
            dateOptions = document.querySelectorAll(".datepicker-picker .datepicker-main .datepicker-view .days .datepicker-grid span");
          });
        }
        for (i = 0; i < dateOptions.length; i += 1) {
          //after a date has been selected
          dateOptions[i].addEventListener('click', function() {
            let today = new Date();
            tomorrow = '0'+(today.getMonth()+1)+'/'+'0'+(today.getDate()+1)+'/'+today.getFullYear();
            today = '0'+(today.getMonth()+1)+'/'+'0'+today.getDate()+'/'+today.getFullYear();
            console.log(today);
            let selectedDate = datePicker.value;
            //delay needed to retrieve value
            setTimeout(() => {
              selectedDate = datePicker.value; console.log(selectedDate)
              if (selectedDate <= today) {

                selectedDate = tomorrow;
                console.log(selectedDate);
                console.log(datePicker);
                datePicker.value = tomorrow;
                const form = datePicker.parentNode.parentNode;
                console.log(form);
                datePicker.classList.add("border-red-600");
                const invalidText = form.querySelector("p");
                invalidText.classList.remove("hidden");
                invalidText.classList.add("block");

            }
          }, 500);
        });
      };
    });
  };
  const sessionForms = document.querySelectorAll("form");
  const submitAlert = document.querySelector(".submitAlert");
  const initText = submitAlert.querySelector("p").innerHTML;
  submitAlert.style.height = "0";
  $(".submitAlert").css('overflow', 'hidden');
  for (let i = 0; i < sessionForms.length; i += 1) {
    console.log(sessionForms[i]);
    sessionForms[i].addEventListener('submit', function(e) {
      e.preventDefault();
      console.log(e);
      if (sessionForms[i].querySelector('button').innerHTML === "Subscribe") {
          console.log(sessionForms[i]);
          submitAlert.querySelector("p").innerHTML = "Thank you for subscribing!";
      }
      if (submitAlert.classList.contains("hidden")) {
        console.log("first part working");
        console.log($(".submitAlert"));
        submitAlert.classList.add("block");
        submitAlert.classList.remove("hidden");
        $(".submitAlert").height(0).animate({height: 52}, 250);
        const close = submitAlert.querySelector("button");
        close.addEventListener('click', function() {
          $(".submitAlert").height(52).animate({height: 0}, 250);
          setTimeout(() => {
            console.log(submitAlert.offsetHeight);
            submitAlert.offsetHeight = 0;
            submitAlert.classList.add("hidden")
            submitAlert.classList.remove("block");
            submitAlert.querySelector("p").innerHTML = initText;
          }, 250);
        })
      }
    });
  }


});

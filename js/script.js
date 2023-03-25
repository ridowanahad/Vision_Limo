// for testimonials section

// testimonial
$(document).ready(function () {
  $(".testimonial-hgh").owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    dots: true,
    navText: "",
    item: 2,
    responsive: {
      0: {
        items: 1,
      },
      480: {
        items: 1,
      },
      676: {
        items: 2,
      },
      1199: {
        items: 3,
      },
    },
  });
  $(".blog-carousel").owlCarousel({
    loop: true,
    margin: 10,
    dots: true,
    navText: "",
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      800: {
        items: 2,
      },
      1000: {
        items: 3,
      },
      1400: {
        items: 4,
      },
    },
  });
});

// vehicle gallary

filterSelection("Mercedes_Benz_S_class");
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("column");
  if (c == "Mercedes_Benz_S_class") c = "Mercedes_Benz_S_class";
  for (i = 0; i < x.length; i++) {
    removeClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) addClass(x[i], "show");
  }
}

function addClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

function removeClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}

var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

// date picker
$(function () {
  $("#datepicker").datepicker();
});

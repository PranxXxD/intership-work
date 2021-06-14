function myFunction() {
    var nav = document.getElementById("myNavbar");
    if (nav.class == "myNavbar") {
      nav.className += " responsive";
    } else {
      nav.className = "myNavbar";
    }
  }
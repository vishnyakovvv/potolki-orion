  // open tabs

function openTab(evt, tabName) {
  var i, tabcontent, tablinks;
  tabcontent = document.querySelectorAll(".catalog__description-target");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.querySelector(".catalog__tabs-item");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
  console.log(tabcontent);
} 
function showDropdownElements(element) {
    document.getElementById(element).classList.toggle("show");
}

function expandOrtho(){
  showDropdownElements('orthoDropdown')
}
function expandPed(){
  showDropdownElements('pedDropdown')
}
function expandTeam(){
  showDropdownElements('teamDropdown')
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {

  if (!event.target.matches('.ortho-action')) {

    var dropdowns = document.getElementsByClassName("ortho-dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }

  if (!event.target.matches('.ped-action')) {

    var dropdowns = document.getElementsByClassName("ped-dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }

  if (!event.target.matches('.team-action')) {

    var dropdowns = document.getElementsByClassName("team-dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }

}

function showDropdownElements(element) {
    document.getElementById(element).classList.toggle("show");
}

function expandOrtho(){
  showDropdownElements('orthoDropdown')
}
function expandPed(){
  showDropdownElements('pedDropdown')
}
function expandAbout(){
  showDropdownElements('aboutDropdown')
}


function hideSection(section){
  var dropdowns = document.getElementsByClassName(section + "-dropdown-content");
  var i;
  for (i = 0; i < dropdowns.length; i++) {
    var openDropdown = dropdowns[i];
    if (openDropdown.classList.contains('show')) {
      openDropdown.classList.remove('show');
    }
  }
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {

  if (!event.target.matches('.ortho-action')) {
    hideSection('ortho')
  }

  if (!event.target.matches('.ped-action')) {
    hideSection('ped')
  }

  if (!event.target.matches('.about-action')) {
    hideSection('about')
  }

}

$(document).ready(function(){
	// Set the interval to be 5 seconds
	var t = setInterval(function(){
		$("#carousel ul").animate({marginLeft:'-100%'},1000,function(){
			$(this).find("li:last").after($(this).find("li:first"));
			$(this).css({marginLeft:0});
		})
	},5000);
});

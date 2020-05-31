function openTab(evt, tabName) {
  console.log("Tab change!");
  var i, tabContent, tabLinks;
  
  tabContent = document.getElementsByClassName("content");
  for (i = 0; i < tabContent.length; i++) {
      tabContent[i].style.display = "none";
  }

  tabLinks = document.getElementsByClassName("tab");
  for (i = 0; i < tabContent.length; i++) {
      tabLinks[i].className = tabLinks[i].className.replace(" is-active", "");
  }

  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " is-active";
}


function populateSkills() {
  console.log("Populating skills!");

  $.getJSON('javascript/config.json', function(data) {
    $.each(data.skills, function(i, skill) {
      console.log(`Skill #${i}: ${skill}`);

      var button = document.createElement("button");
      button.innerHTML = skill;
      button.class="button";
      button.style.background="hsl(0, 0%, 92%)";
      button.style.border="none";
      document.getElementById("skillsDiv").appendChild(button);
    });
  });
}
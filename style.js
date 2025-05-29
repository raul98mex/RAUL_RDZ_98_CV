// skills-toggle.js + projects-toggle.js combined

// ----- SKILLS SECTION -----

function toggleDescription(clickedItem) {
  const allItems = document.querySelectorAll('.skill-item');
  allItems.forEach(item => {
    if (item !== clickedItem) {
      item.classList.remove('active');
    }
  });
  clickedItem.classList.toggle('active');
  clearActiveControl('skills');
}

function expandAllSkills() {
  document.querySelectorAll('.skill-item').forEach(item => {
    item.classList.add('active');
  });
  setActiveControl('expand', 'skills');
}

function collapseAllSkills() {
  document.querySelectorAll('.skill-item').forEach(item => {
    item.classList.remove('active');
  });
  setActiveControl('collapse', 'skills');
}

// ----- PROJECTS SECTION -----

function toggleProjectDescription(projectElement) {
  projectElement.classList.toggle("expanded");

  const arrow = projectElement.querySelector(".arrow");
  if (arrow) arrow.classList.toggle("expanded");
  clearActiveControl('projects');
}

function expandAllProjects() {
  const allProjects = document.querySelectorAll(".project");
  allProjects.forEach(project => {
    project.classList.add("expanded");
    const arrow = project.querySelector(".arrow");
    if (arrow) arrow.classList.add("expanded");
  });
  setActiveControl('expand', 'projects');
}

function collapseAllProjects() {
  const allProjects = document.querySelectorAll(".project");
  allProjects.forEach(project => {
    project.classList.remove("expanded");
    const arrow = project.querySelector(".arrow");
    if (arrow) arrow.classList.remove("expanded");
  });
  setActiveControl('collapse', 'projects');
}

// ----- SHARED FUNCTIONS -----

function clearActiveControl(section = 'skills') {
  const selector = section === 'skills' ? '.skill-controls button' : '.project-controls button';
  document.querySelectorAll(selector).forEach(btn =>
    btn.classList.remove('active-control')
  );
}

function setActiveControl(type, section = 'skills') {
  clearActiveControl(section);

  let selector;
  if (section === 'skills') {
    selector = type === 'expand'
      ? '.skill-controls button:nth-child(1)'
      : '.skill-controls button:nth-child(2)';
  } else {
    selector = type === 'expand'
      ? '.project-controls button:nth-child(1)'
      : '.project-controls button:nth-child(2)';
  }

  const btn = document.querySelector(selector);
  if (btn) btn.classList.add('active-control');
}

// Show/hide back-to-top button on scroll
window.addEventListener('scroll', function() {
  const btn = document.getElementById('backToTopBtn');
  if (window.scrollY > 300) {
    btn.style.display = 'block';
  } else {
    btn.style.display = 'none';
  }
});

// Smooth scroll to top
document.getElementById('backToTopBtn').addEventListener('click', function(e) {
  e.preventDefault();
  window.scrollTo({ top: 0, behavior: 'smooth' });
});


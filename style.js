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

// Hide button when at the top, show when scrolled down
document.addEventListener('DOMContentLoaded', function() {
    const backToTopBtn = document.getElementById('backToTopBtn');
    if (!backToTopBtn) return;

    // Hide initially
    backToTopBtn.style.display = 'none';

    window.addEventListener('scroll', function() {
        if (window.scrollY > 200) {
            backToTopBtn.style.display = 'flex';
        } else {
            backToTopBtn.style.display = 'none';
        }
    });

    // Smooth scroll to top
    backToTopBtn.addEventListener('click', function(e) {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});

// Smooth scroll for internal links
      document.addEventListener('DOMContentLoaded', function() {
        // Mobile menu toggle (works on all pages)
        var menuToggle = document.getElementById('menuToggle');
        var navMenu = document.getElementById('navMenu');
        var wrapper = document.getElementById('menuDropdownWrapper');
        function isMobile() {
          return window.innerWidth <= 700;
        }
        function closeMenu() {
          navMenu.classList.remove('show');
          wrapper.classList.remove('open');
        }
        if (menuToggle && navMenu && wrapper) {
          menuToggle.addEventListener('click', function(e) {
            if (isMobile()) {
              if (!navMenu.classList.contains('show')) {
                navMenu.style.display = 'flex';
                void navMenu.offsetHeight;
                navMenu.classList.add('show');
                wrapper.classList.add('open');
              } else {
                navMenu.classList.remove('show');
                wrapper.classList.remove('open');
                setTimeout(function() {
                  if (!navMenu.classList.contains('show')) {
                    navMenu.style.display = '';
                  }
                }, 500);
              }
              e.stopPropagation();
            }
          });
          document.addEventListener('click', function(e) {
            if (
              isMobile() &&
              !menuToggle.contains(e.target) &&
              !navMenu.contains(e.target)
            ) {
              closeMenu();
              navMenu.style.display = '';
            }
          });
          window.addEventListener('resize', function() {
            if (!isMobile()) {
              closeMenu();
              navMenu.style.display = '';
            }
          });
        }

        // Smooth scroll for internal links (works on all pages)
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
          anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href').slice(1);
            const target = document.getElementById(targetId);
            if (target) {
              e.preventDefault();
              target.scrollIntoView({ behavior: 'smooth' });
            }
          });
        });
      });

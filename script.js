// Get references to elements
const hamburger = document.getElementById('hamburger');
const sidebar = document.getElementById('sidebar');
const sidebarLinks = document.querySelectorAll('.sidebar-link');

// Toggle sidebar on hamburger click
hamburger.addEventListener('click', () => {
  sidebar.classList.toggle('active');
});

// Close sidebar when a nav link is clicked (for mobile UX)
sidebarLinks.forEach(link => {
  link.addEventListener('click', () => {
    sidebar.classList.remove('active');
  });
});

// Optional: Close sidebar when clicking outside (desktop only)
document.addEventListener('click', (event) => {
  if (
    !sidebar.contains(event.target) &&
    !hamburger.contains(event.target) &&
    sidebar.classList.contains('active')
  ) {
    sidebar.classList.remove('active');
  }
});

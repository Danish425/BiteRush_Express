const menuToggle = document.getElementById('menu-toggle');
  const nav = document.getElementById('nav');

  menuToggle.addEventListener('click', () => {
    nav.classList.toggle('active');
  });
  document.querySelectorAll('#nav a').forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('active');
    });
  });
    const form = document.getElementById('bookingForm');
    const popup = document.getElementById('popup');

    form.addEventListener('submit', function(e) {
      e.preventDefault();

      const name = document.getElementById('name').value.trim();
      const date = document.getElementById('date').value;
      const time = document.getElementById('time').value;

      if (!name || !date || !time) {
        alert("Please fill out all fields.");
        return;
      }

      popup.style.display = 'flex';
      form.reset();
    });

    function closePopup() {
      popup.style.display = 'none';
    }

    // Optional: Close popup by clicking outside
    window.addEventListener('click', function(e) {
      if (e.target === popup) {
        closePopup();
      }
    });
    const filterButtons = document.querySelectorAll('.filter-btn');
const menuCards = document.querySelectorAll('.menu-card');

filterButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    const category = btn.getAttribute('data-category');

    filterButtons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    menuCards.forEach(card => {
      const cardCategory = card.getAttribute('data-category');

      if (category === 'all' || category === cardCategory) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
  });
});

    
    

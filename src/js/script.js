document.getElementById('nav-search-btn').addEventListener('click', () => {
  document.getElementById('nav-search-input').classList.toggle('nav-active-search');
});

window.onload = () => {
  const stats_numbers = document.querySelectorAll('.stats-card-number');
  stats_numbers.forEach((stats_number) => {
    const end_value = stats_number.getAttribute('data-value');
    let start_value = 0;
    var countdown = setInterval(() => {
      start_value += 1;
      stats_number.textContent = start_value;
      if (start_value == end_value) {
        clearInterval(countdown);
        stats_numbers[2].textContent = '6+';
      }
    }, 2000 / end_value);
  });
};

// custom JS code after importing jquery and owl
type =
  'text/javascript' >
  $(document).ready(function () {
    $('.owl-carousel').owlCarousel();
  });

$('.owl-carousel').owlCarousel({
  loop: true,
  margin: 28,
  nav: false,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 2.5,
    },
    1000: {
      items: 3.5,
    },
  },
});

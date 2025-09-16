

// caroual side


//   <!-- Bootstrap 5 JS -->


//   <!-- Auto-slide every 3 seconds -->
  <script>
    var myCarousel = document.querySelector('#myCarousel');
    var carousel = new bootstrap.Carousel(myCarousel, {
      interval: 2000,  // 3 seconds
      ride: 'carousel',
      pause: false,    // keeps sliding even when hovered
      wrap: true       // loops from last to first
    });
  </script>
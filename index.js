
  const container = document.getElementById('marqueeContainer');
  const content = document.getElementById('marqueeContent');
  let position = container.offsetWidth;
  const normalSpeed = 2.5;
  let currentSpeed = normalSpeed;
  const slowSpeed = 1;

  function moveMarquee() {
    position -= currentSpeed;
    if (position <= -content.offsetWidth) {
      position = container.offsetWidth;
    }
    content.style.transform = `translateX(${position}px)`;
    requestAnimationFrame(moveMarquee);
  }

  container.addEventListener('mouseover', function() {
    currentSpeed = slowSpeed;
  });

  container.addEventListener('mouseout', function() {
    currentSpeed = normalSpeed;
  });

  moveMarquee();

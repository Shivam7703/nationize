
  const container = document.getElementById('marqueeContainer');
  const content = document.getElementById('marqueeContent');
  let position = container.offsetWidth;
  const normalSpeed = 2.5;
  let currentSpeed = normalSpeed;
  const slowSpeed = 1;
  const questions = document.querySelectorAll('.question');

  
function animateProgress(element, duration = 1000) {
  const circle = element;
  const value = element.querySelector('.progress-circle-value');
  const targetPercent = parseInt(element.dataset.progress, 10);
  let startPercent = 0;
  const startTime = performance.now();

  function updateProgress(currentTime) {
    const elapsedTime = currentTime - startTime;
    const progress = Math.min(elapsedTime / duration, 1);
    const currentPercent = Math.floor(startPercent + (targetPercent - startPercent) * progress);

    circle.style.background = `conic-gradient(#f20c1f ${currentPercent * 3.6}deg, #e0e0e0 0deg)`;
    value.textContent = `${currentPercent}%`;

    if (progress < 1) {
      requestAnimationFrame(updateProgress);
    }
  }

  requestAnimationFrame(updateProgress);
}

// Set up the Intersection Observer
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const targetElement = entry.target;
      targetElement.classList.add('visible');
      animateProgress(targetElement);
      observer.unobserve(targetElement); // Stop observing once animated
    }
  });
}, { threshold: 0.1 }); // Trigger when at least 10% of the element is visible

// Start observing all progress circles
document.querySelectorAll('.progress-circle').forEach(circle => {
  observer.observe(circle);
});
  
  // Example usage:

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

  questions.forEach(question => {
    question.addEventListener('click', () => {
        // const isActive = question.parentNode.classList.contains('active');

        questions.forEach(q => {
            q.parentNode.classList.remove('active');
        });

            question.parentNode.classList.add('active');
        
    });
});
          

  moveMarquee();

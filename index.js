(function() {
  function initMarquee() {
    const container = document.getElementById('marqueeContainer');
    const content = document.getElementById('marqueeContent');

    if (!container || !content) {
      return; // Exit if marquee elements are not found
    }

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
  }

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

  function initProgressCircles() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const targetElement = entry.target;
          targetElement.classList.add('visible');
          animateProgress(targetElement);
          observer.unobserve(targetElement);
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.progress-circle').forEach(circle => {
      observer.observe(circle);
    });
  }

  function initFAQ() {
    const questions = document.querySelectorAll('.question');
    
    questions.forEach(question => {
      question.addEventListener('click', () => {
        // Remove 'active' class from all question parents
        questions.forEach(q => {
          q.parentNode.classList.remove('active');
        });
        
        // Add 'active' class to the clicked question's parent after a short delay
        setTimeout(() => {
          question.parentNode.classList.add('active');
        }, 400); // 10 milliseconds delay
      });
    });
  }

  document.addEventListener('DOMContentLoaded', function() {
    initMarquee();
    initProgressCircles();
    initFAQ();
  });
})();

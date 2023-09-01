function setupSlider(slider, prevButton, nextButton, sliderDots, autoSlideInterval) {
  let slideIndex = 0;
  let nextImageLoaded = false;
  let currentImageLoaded = false;

  function showSlide(index) {
    slider.style.transform = `translateX(-${index * 100}%)`;
    updateActiveDot(index);

    if (currentImageLoaded && nextImageLoaded) {
      resetAutoSlideInterval();
    }
  }

  function updateActiveDot(index) {
    sliderDots.forEach((dot, i) => {
      dot.classList.toggle('active', i === index);
    });
  }

  function prevSlide() {
    slideIndex = (slideIndex - 1 + slider.children.length) % slider.children.length;
    preloadNextImage();
    showSlide(slideIndex);
  }

  function nextSlide() {
    slideIndex = (slideIndex + 1) % slider.children.length;
    preloadNextImage();
    showSlide(slideIndex);
  }

  function dotClick(index) {
    slideIndex = index;
    preloadNextImage();
    showSlide(slideIndex);
  }

  function preloadNextImage() {
    nextImageLoaded = false;
    const nextIndex = (slideIndex + 1) % slider.children.length;
    const nextImage = slider.children[nextIndex].querySelector('img');

    if (nextImage && !nextImage.complete) {
      nextImage.onload = () => {
        nextImageLoaded = true;
        if (currentImageLoaded) {
          resetAutoSlideInterval();
        }
      };
    } else {
      nextImageLoaded = true;
    }
  }

  function preloadCurrentImage() {
    currentImageLoaded = false;
    const currentImage = slider.children[slideIndex].querySelector('img');

    if (currentImage && !currentImage.complete) {
      currentImage.onload = () => {
        currentImageLoaded = true;
        preloadNextImage();
      };
    } else {
      currentImageLoaded = true;
      preloadNextImage();
    }
  }

  function resetAutoSlideInterval() {
    clearInterval(autoSlideInterval);
    autoSlideInterval = setInterval(nextSlide, 3000);
  }

  prevButton.addEventListener('click', prevSlide);
  nextButton.addEventListener('click', nextSlide);

  sliderDots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      dotClick(index);
    });
  });

  preloadCurrentImage();
  showSlide(slideIndex);
  resetAutoSlideInterval();
}

  
  // First Slider
  const firstSlider = document.querySelector('.first-slider');
  const firstPrevButton = document.querySelector('.first-prev-slide');
  const firstNextButton = document.querySelector('.first-next-slide');
  const firstSliderDots = document.querySelectorAll('.first-slider-dot');
  let firstAutoSlideInterval;
  setupSlider(firstSlider, firstPrevButton, firstNextButton, firstSliderDots, firstAutoSlideInterval);
  
  // Second Slider
  const secondSlider = document.querySelector('.second-slider');
  const secondPrevButton = document.querySelector('.second-prev-slide');
  const secondNextButton = document.querySelector('.second-next-slide');
  const secondSliderDots = document.querySelectorAll('.second-slider-dot');
  let secondAutoSlideInterval;
  setupSlider(secondSlider, secondPrevButton, secondNextButton, secondSliderDots, secondAutoSlideInterval);

  //Third Slider
  const thirdSlider = document.querySelector('.third-slider');
  const thirdPrevButton = document.querySelector('.third-prev-slide');
  const thirdNextButton = document.querySelector('.third-next-slide');
  const thirdSliderDots = document.querySelectorAll('.third-slider-dot');
  let thirdAutoSlideInterval;
  setupSlider(thirdSlider, thirdPrevButton, thirdNextButton, thirdSliderDots, thirdAutoSlideInterval);

  //Fourth Slider
  const fourthSlider = document.querySelector('.fourth-slider');
  const fourthPrevButton = document.querySelector('.fourth-prev-slide');
  const fourthNextButton = document.querySelector('.fourth-next-slide');
  const fourthSliderDots = document.querySelectorAll('.fourth-slider-dot');
  let fourthAutoSlideInterval;
  setupSlider(fourthSlider, fourthPrevButton, fourthNextButton, fourthSliderDots, fourthAutoSlideInterval);
//Back to Top Scroll
// Scroll to top when "Back to Top" button is clicked
document.querySelector('.back-to-top').addEventListener('click', function() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
// Rating Form
const scriptURL = 'https://script.google.com/macros/s/AKfycbzTifTLHTO0t8T3I7YFW3sq35WlB1DzYd1jqeW5_75iqmGmkvIZaziemgYL_LP9cPcjJg/exec';
const form = document.forms['google-sheet'];
const messageContainer = document.querySelector('.message-container');
const pleaseWaitMessage = messageContainer.querySelector('.please-wait');
const ratingsError = messageContainer.querySelector('.ratings-error');
const ratingsSuccess = messageContainer.querySelector('.ratings-success');
const submitButton = form.querySelector('.rate-button');

form.addEventListener('submit', e => {
  e.preventDefault();

  // Hide submit button, show please wait message
  submitButton.style.display = 'none';
  messageContainer.style.display = 'block';
  pleaseWaitMessage.style.display = 'block';

  fetch(scriptURL, { method: 'POST', body: new FormData(form) })
    .then(response => {
      pleaseWaitMessage.style.display = 'none';
      if (response.ok) {
        ratingsSuccess.style.display = 'block';
        setTimeout(() => {
          ratingsSuccess.style.display = 'none';
          submitButton.style.display = 'block';
        }, 7500);
      } else {
        ratingsError.style.display = 'block';
        setTimeout(() => {
          ratingsError.style.display = 'none';
          submitButton.style.display = 'block';
        }, 7500);
      }
    })
    .catch(error => {
      console.error('Error!', error.message);
      pleaseWaitMessage.style.display = 'none';
      ratingsError.style.display = 'block';
      setTimeout(() => {
        ratingsError.style.display = 'none';
        submitButton.style.display = 'block';
      }, 5000);
    });
});
// for cv & sub 
const subscribeForm = document.forms['subscribe-form'];
const cvForm = document.forms['cv-form'];

const subscribeMessageContainer = document.querySelector('.message-container-sub');
const cvMessageContainer = document.querySelector('.message-container-cv');

const subscribePleaseWaitMessage = subscribeMessageContainer.querySelector('.please-wait-sub');
const cvPleaseWaitMessage = cvMessageContainer.querySelector('.please-wait-cv');

const subError = subscribeMessageContainer.querySelector('.sub-error');
const cvError = cvMessageContainer.querySelector('.cv-error');

const subSuccess = subscribeMessageContainer.querySelector('.sub-success');
const cvSuccess = cvMessageContainer.querySelector('.cv-success');

const subButton = subscribeForm.querySelector('.sub-button');
const cvButton = cvForm.querySelector('.cv-button');

subscribeForm.addEventListener('submit', e => {
  e.preventDefault();

  subButton.style.display = 'none';
  subscribeMessageContainer.style.display = 'block';
  subscribePleaseWaitMessage.style.display = 'block';

  // Replace 'subscribe-scriptURL' with your actual subscribe script URL
  fetch('https://script.google.com/macros/s/AKfycbxFtyo_flEhB2evwz-l5FKaRuc7XMUxK6BSXexxniBDs16PXIouZ1F1LTIQPh0yfdrkRg/exec', { method: 'POST', body: new FormData(subscribeForm) })
    .then(response => {
      subscribePleaseWaitMessage.style.display = 'none';
      if (response.ok) {
        subSuccess.style.display = 'block';
        setTimeout(() => {
          subSuccess.style.display = 'none';
          subscribeForm.reset();
          subButton.style.display = 'block';
          subscribeMessageContainer.style.display = 'none';
        }, 7500);
      } else {
        subError.style.display = 'block';
        setTimeout(() => {
          subError.style.display = 'none';
          subButton.style.display = 'block';
          subscribeMessageContainer.style.display = 'none';
        }, 7500);
      }
    })
    .catch(error => {
      console.error('Error!', error.message);
      subscribePleaseWaitMessage.style.display = 'none';
      subError.style.display = 'block';
      setTimeout(() => {
        subError.style.display = 'none';
        subButton.style.display = 'block';
        subscribeMessageContainer.style.display = 'none';
      }, 5000);
    });
});

cvForm.addEventListener('submit', e => {
  e.preventDefault();

  cvButton.style.display = 'none';
  cvMessageContainer.style.display = 'block';
  cvPleaseWaitMessage.style.display = 'block';

  // Replace 'cv-scriptURL' with your actual CV request script URL
  fetch('https://script.google.com/macros/s/AKfycbyp6eULkaFzriOqBcOv44R6Z9yExemeO5BnM-9N3uPoHX-_Dyp6I-SzWrAXkJnf3a_S_Q/exec', { method: 'POST', body: new FormData(cvForm) })
    .then(response => {
      cvPleaseWaitMessage.style.display = 'none';
      if (response.ok) {
        cvSuccess.style.display = 'block';
        setTimeout(() => {
          cvSuccess.style.display = 'none';
          cvForm.reset();
          cvButton.style.display = 'block';
          cvMessageContainer.style.display = 'none';
        }, 7500);
      } else {
        cvError.style.display = 'block';
        setTimeout(() => {
          cvError.style.display = 'none';
          cvButton.style.display = 'block';
          cvMessageContainer.style.display = 'none';
        }, 7500);
      }
    })
    .catch(error => {
      console.error('Error!', error.message);
      cvPleaseWaitMessage.style.display = 'none';
      cvError.style.display = 'block';
      setTimeout(() => {
        cvError.style.display = 'none';
        cvButton.style.display = 'block';
        cvMessageContainer.style.display = 'none';
      }, 5000);
    });
});
// Function to format date in "dd mm yyyy" format
function formatDate(date) {
  const day = date.getDate().toString().padStart(2, '0');
  const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Month is zero-based
  const year = date.getFullYear();

  return `${day} ${month} ${year}`;
}

// Function to format time in "hh mm ss am/pm" format
function formatTime(date) {
  const options = { hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true };
  return date.toLocaleTimeString('en-US', options);
}

// Get current IST date and time
const currentISTDate = new Date(new Date().toLocaleString('en-US', { timeZone: 'Asia/Kolkata' }));
const formattedDate = formatDate(currentISTDate);
const formattedTime = formatTime(currentISTDate);


// Function to update formatted date and time
function updateDateTime() {
  const currentISTDate = new Date(new Date().toLocaleString('en-US', { timeZone: 'Asia/Kolkata' }));
  const formattedDate = formatDate(currentISTDate);
  const formattedTime = formatTime(currentISTDate);

  // Attach formatted date and time to the hidden fields in all forms
  const forms = document.querySelectorAll('form');
  forms.forEach(form => {
    const formDateInput = form.querySelector('#form-date');
    const formTimeInput = form.querySelector('#form-time');
    if (formDateInput && formTimeInput) {
      formDateInput.value = formattedDate;
      formTimeInput.value = formattedTime;
    }
  });
}

// Update date and time every second
setInterval(updateDateTime, 1000);
//the above code add time to each hidden fields with date and update them every sec

//prevent resubmission
if ( window.history.replaceState ) {
        window.history.replaceState( null, null, window.location.href );
    }
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slide");
  var dots = document.getElementsByClassName("slideIndex");
  if (n > slides.length) {slideIndex = 1} 
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block"; 
  dots[slideIndex-1].className += " active";
  stopVideo();
}

function playVideo(n) {
	var vid = document.getElementsByClassName("gameVideo");
	vid[n].paused ? vid[n].play() : vid[n].pause();
}

function stopVideo() {
  var vid = document.getElementsByClassName("gameVideo");
  for (var i = 0; i < vid.length; i++) {
	  vid[i].load();
  }
}
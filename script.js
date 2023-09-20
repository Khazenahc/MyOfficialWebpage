/*dark/light mode switch*/

function myFunction() {
   var element = document.body;
   element.classList.toggle("dark-mode");
}

/*timer*/

  var countUpDate = new Date("Apr 1, 2023  15:00:25").getTime();

  var x = setInterval(function() {

  var now = new Date().getTime();
    
  var distance = now - countUpDate;
    
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / ( 1550 * 60 * 60 * 24));
  var hours = Math.floor((distance % ( 1000 * 60 * 60 * 24)) / (1000 *60 * 60));
  var minutes = Math.floor((distance % (1000* 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="demo"
  document.getElementById("study-time").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";
    
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("study-time").innerHTML = "CONTINUOUS";
  }
}, 1000);


/*scroll & fade effect*/

const items = document.querySelectorAll('.item')

const options = {
  threshold: 0.5
}

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('slide-in');
    }
  });
}, options)

items.forEach(item => {
  observer.observe(item);
})


/*slideshow script*/

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("demo");
  let captionText = document.getElementById("caption");
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
  captionText.innerHTML = dots[slideIndex-1].alt;
} 





/*
	Photon by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

	skel.breakpoints({
		xlarge: '(max-width: 1680px)',
		large: '(max-width: 1140px)',
		medium: '(max-width: 980px)',
		small: '(max-width: 736px)',
		xsmall: '(max-width: 480px)',
		xxsmall: '(max-width: 320px)'
	});

	$(function() {

		var	$window = $(window),
			$body = $('body');

		// Disable animations/transitions until the page has loaded.
			$body.addClass('is-loading');

			$window.on('load', function() {
				window.setTimeout(function() {
					$body.removeClass('is-loading');
				}, 250);
			});

		// Fix: Placeholder polyfill.
			$('form').placeholder();

		// Prioritize "important" elements on mobile.
			skel.on('+mobile -mobile', function() {
				$.prioritize(
					'.important\\28 mobile\\29',
					skel.breakpoint('mobile').active
				);
			});

		// Scrolly.
			$('.scrolly').scrolly();

	});

})(jQuery);

var TxtRotate = function(el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = '';
  this.tick();
  this.isDeleting = false;
};

TxtRotate.prototype.tick = function() {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

  var that = this;
  var delta = 300 - Math.random() * 100;

  if (this.isDeleting) { delta /= 2; }

  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
  }

  setTimeout(function() {
    that.tick();
  }, delta);
};

function read1() { //finds function
  var dots = document.getElementById("dots"); //returns element that has the ID attribute with value, searches for dots
  var moreText = document.getElementById("more"); // '' '' searches for more
  var btnText = document.getElementById("myBtn"); // '' '' searches for myBtn

  if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more"; //button says read more to show more text
      moreText.style.display = "none";
  } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less"; //button says read less to show less text
      moreText.style.display = "inline";
  }
}

function read2() { //finds function
  var dots = document.getElementById("dots2"); //returns element that has the ID attribute with value
  var moreText = document.getElementById("more2"); // '' '' searches for more2
  var btnText = document.getElementById("myBtn2"); // '' '' searches for myBtn2

  if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more"; //button says read more to show more text
      moreText.style.display = "none";
  } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less"; //button says read less to show less text
      moreText.style.display = "inline";
  }
}

function read3() { //finds function
  var dots = document.getElementById("dots3"); //returns element that has the ID attribute with value, searches for dots
  var moreText = document.getElementById("more3"); // '' '' searches for more
  var btnText = document.getElementById("myBtn3"); // '' '' searches for myBtn

  if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more"; //button says read more to show more text
      moreText.style.display = "none";
  } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less"; //button says read less to show less text
      moreText.style.display = "inline";
  }
}

function read4() { //finds function
  var dots = document.getElementById("dots4"); //returns element that has the ID attribute with value
  var moreText = document.getElementById("more4"); // '' '' searches for more2
  var btnText = document.getElementById("myBtn4"); // '' '' searches for myBtn2

  if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more"; //button says read more to show more text
      moreText.style.display = "none";
  } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less"; //button says read less to show less text
      moreText.style.display = "inline";
  }
}

function read5() { //finds function
  var dots = document.getElementById("dots5"); //returns element that has the ID attribute with value, searches for dots
  var moreText = document.getElementById("more5"); // '' '' searches for more
  var btnText = document.getElementById("myBtn5"); // '' '' searches for myBtn

  if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more"; //button says read more to show more text
      moreText.style.display = "none";
  } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less"; //button says read less to show less text
      moreText.style.display = "inline";
  }
}

function read6() { //finds function
  var dots = document.getElementById("dots6"); //returns element that has the ID attribute with value
  var moreText = document.getElementById("more6"); // '' '' searches for more2
  var btnText = document.getElementById("myBtn6"); // '' '' searches for myBtn2

  if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more"; //button says read more to show more text
      moreText.style.display = "none";
  } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less"; //button says read less to show less text
      moreText.style.display = "inline";
  }
}

window.onload = function() {
  var elements = document.getElementsByClassName('txt-rotate');
  for (var i=0; i<elements.length; i++) {
    var toRotate = elements[i].getAttribute('data-rotate');
    var period = elements[i].getAttribute('data-period');
    if (toRotate) {
      new TxtRotate(elements[i], JSON.parse(toRotate), period);
    }
  }
  // INJECT CSS
  var css = document.createElement("style");
  css.type = "text/css";
  css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #666 }";
  document.body.appendChild(css);
};

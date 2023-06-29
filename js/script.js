/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  ┏┓                    
  ┃┃┏━━━┓┏━━━┓┏┓ ┏┓┏━━━┓ 
┏━┛┃┃┏━┓┃┃┏━┓┃┃┃ ┃┃┃┏━┓┃ Daniel Clavijo
┃┏┓┃┗┛┏┛┃┃┃ ┃┃┃┗━┛┃┃┃ ┃┃ 2023
┃┗┛┃┏┓┗┓┃┃┗━┛┃┗━━┓┃┃┗━┛┃ V 1.0.0
┗━━┛┃┗━┛┃┗━━━┛   ┃┃┗━━━┛ 
    ┗━━━┛        ┗┛
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
// hide navbar when scrolling down / when up show.
var lastScrollTop = 0;
var height = window.visualViewport.height / 2;
navbar = document.getElementsByTagName('nav')[0];

window.addEventListener('scroll', function(e){
	var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
	//console.log("scrollTop" + scrollTop + " lastScrollTop: " + lastScrollTop);
	if (scrollTop > height) {
		if(scrollTop > lastScrollTop){
			// hide
			d = document.getElementsByClassName('disappear');
			if (d.length == 0) {
				navbar.classList.toggle('disappear');
				setTimeout(() => {}, 1000);
			}

		}else{
			// show
			d = document.getElementsByClassName('disappear');
			if (d.length != 0) {
				navbar.classList.toggle('disappear');
				setTimeout(() => {}, 1000);
			}

		}
	}
	lastScrollTop = scrollTop;
});

// slides enumeration
slides = document.getElementsByClassName('slide');

for (var i = 0; i < slides.length; i++) {
	slides[i].getElementsByClassName('header-counter')[0].innerHTML = (i + 1) + ' / ' + slides.length;
}

// open-close navbar sections
icon_navbar = document.getElementById('nav-toggle');

icon_navbar.addEventListener('click', function(e) {
	icon_navbar.classList.toggle('show');

	nav_link = document.getElementById('nav-link');
	nav_link.classList.toggle('show');

	sections = document.querySelector('nav > ul');
	sections.classList.toggle('open');

	// close subsections when closing sections container
	subsections = document.querySelectorAll('.section .open');
	if (subsections != null) {
		for (var i = subsections.length - 1; i >= 0; i--) {
			subsections[i].classList.toggle('open');
			// rotate open icon
			subsections[i].parentNode.getElementsByClassName('title')[0].classList.toggle('close');
		}
	}
}, false);

// open-close subsections
sections = document.getElementsByClassName('section');

for (var i = sections.length - 1; i >= 0; i--) {
    sections[i].addEventListener('click', function(e) {
    	subsections = this.querySelector('ul');
    	if (subsections != null) {
    		subsections.classList.toggle('open');
    		// rotate open icon
			this.getElementsByClassName('title')[0].classList.toggle('close');
    	}
    }, false);
}

// open-close site-map topics
topics = document.getElementsByClassName('topic');

for (var i = topics.length - 1; i >= 0; i--) {
	topics[i].addEventListener('click', function(e) {
		subjects = this.querySelector('ul');
		if(subjects != null) {
			subjects.classList.toggle('open');
			// rotate plus icon
			this.getElementsByClassName('toggle')[0].classList.toggle('close');
		}
	}, false);
}

// slider
function change_slide(direction) {
	slides = document.getElementsByClassName('slide');
	num_slides = slides.length;
	for (var i = 0; i < num_slides; i++) {
		attr = slides[i].className;
		if (attr == 'slide active') {
			if (direction == 'right') {
				if (i == num_slides - 1) {
					slides[0].classList.toggle('active');
				} else {
					slides[i + 1].classList.toggle('active');
				}
				slides[i].classList.toggle('active');
				return;	
			} else {
				if (i == 0) {
					slides[num_slides - 1].classList.toggle('active');
				} else {
					slides[i - 1].classList.toggle('active');
				}
				slides[i].classList.toggle('active');
				return;	
			}
		}
	}	
}

// previous slide
previous_slide_btn = document.getElementsByClassName('previous-slide');

for (var i = previous_slide_btn.length - 1; i >= 0; i--) {
	previous_slide_btn[i].addEventListener('click', function(e) {
		change_slide('left');
	}, false);
}

// next slide
next_slide_btn = document.getElementsByClassName('next-slide');

for (var i = next_slide_btn.length - 1; i >= 0; i--) {
	next_slide_btn[i].addEventListener('click', function(e) {
		change_slide('right');
	}, false);
}
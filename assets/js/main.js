/*
	Solid State by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

	var	$window = $(window),
		$body = $('body'),
		$header = $('#header'),
		$banner = $('#banner');

	// Breakpoints.
		breakpoints({
			xlarge:	'(max-width: 1680px)',
			large:	'(max-width: 1280px)',
			medium:	'(max-width: 980px)',
			small:	'(max-width: 736px)',
			xsmall:	'(max-width: 480px)'
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Header.
		if ($banner.length > 0
		&&	$header.hasClass('alt')) {

			$window.on('resize', function() { $window.trigger('scroll'); });

			$banner.scrollex({
				bottom:		$header.outerHeight(),
				terminate:	function() { $header.removeClass('alt'); },
				enter:		function() { $header.addClass('alt'); },
				leave:		function() { $header.removeClass('alt'); }
			});

		}

	// Menu.
		var $menu = $('#menu');

		$menu._locked = false;

		$menu._lock = function() {

			if ($menu._locked)
				return false;

			$menu._locked = true;

			window.setTimeout(function() {
				$menu._locked = false;
			}, 350);

			return true;

		};

		$menu._show = function() {

			if ($menu._lock())
				$body.addClass('is-menu-visible');

		};

		$menu._hide = function() {

			if ($menu._lock())
				$body.removeClass('is-menu-visible');

		};

		$menu._toggle = function() {

			if ($menu._lock())
				$body.toggleClass('is-menu-visible');

		};

		$menu
			.appendTo($body)
			.on('click', function(event) {

				event.stopPropagation();

				// Hide.
					$menu._hide();

			})
			.find('.inner')
				.on('click', '.close', function(event) {

					event.preventDefault();
					event.stopPropagation();
					event.stopImmediatePropagation();

					// Hide.
						$menu._hide();

				})
				.on('click', function(event) {
					event.stopPropagation();
				})
				.on('click', 'a', function(event) {

					var href = $(this).attr('href');

					event.preventDefault();
					event.stopPropagation();

					// Hide.
						$menu._hide();

					// Redirect.
						window.setTimeout(function() {
							window.location.href = href;
						}, 350);

				});

		/* SERVICE IMAGE SLIDESHOW */
		const serviceImages = [
			"images/Perkhidmatan/Melaka_Front.jpg",
			"images/Perkhidmatan/Melaka_Kaunter1.jpg",
			"images/Perkhidmatan/Melaka_Kaunter2.jpg",
			"images/Perkhidmatan/Melaka_Drivethru.jpg"
		];

		

		$body
			.on('click', 'a[href="#menu"]', function(event) {

				event.stopPropagation();
				event.preventDefault();

				// Toggle.
					$menu._toggle();

			})
			.on('keydown', function(event) {

				// Hide on escape.
					if (event.keyCode == 27)
						$menu._hide();

			});

})(jQuery); // Pastikan fungsi di bawah ini berada di luar penutup ini

let currentServiceImage = 0;

		const serviceSlideImage = document.getElementById("service-slide-image");

		if (serviceSlideImage) {

			setInterval(() => {

				serviceSlideImage.style.opacity = 0;

				setTimeout(() => {

					currentServiceImage++;

					if (currentServiceImage >= serviceImages.length) {
						currentServiceImage = 0;
					}

					serviceSlideImage.src = serviceImages[currentServiceImage];

					serviceSlideImage.style.opacity = 1;

				}, 400);

			}, 4000);

		}		
		
// Simpan senarai ID dan Nama untuk rujukan arrow
const tabOrder = ['Jual', 'Cagar', 'Renew', 'Tebus'];
const tabNames = {
    'Jual': 'Jual Emas',
    'Cagar': 'Cagar Emas',
    'Renew': 'Pembaharuan Surat',
    'Tebus': 'Tebus Emas'
};
let currentTabIndex = 0;

// Fungsi Asal (PC)
function openFlow(evt, flowName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tab-links");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(flowName).style.display = "block";
    evt.currentTarget.className += " active";
    
    // Update index untuk sinkron dengan mobile
    currentTabIndex = tabOrder.indexOf(flowName);
    document.getElementById('mobile-tab-label').innerText = tabNames[flowName];
}

// Fungsi Baru untuk Arrow (Mobile)
function shiftTab(direction) {
    currentTabIndex += direction;

    // Loop balik kalau dah sampai hujung
    if (currentTabIndex >= tabOrder.length) currentTabIndex = 0;
    if (currentTabIndex < 0) currentTabIndex = tabOrder.length - 1;

    const newFlow = tabOrder[currentTabIndex];
    
    // Tukar Label
    document.getElementById('mobile-tab-label').innerText = tabNames[newFlow];
    
    // Tukar Content (Guna logik yang sama macam openFlow tapi tanpa 'event')
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    document.getElementById(newFlow).style.display = "block";

    // Sinkronkan class active kat butang PC (sekiranya user resize screen)
    tablinks = document.getElementsByClassName("tab-links");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].classList.remove("active");
        if (tablinks[i].getAttribute('onclick').includes(newFlow)) {
            tablinks[i].classList.add("active");
        }
    }
}

// FAQ Accordion Logic
document.addEventListener('DOMContentLoaded', function() {
    const faqQuestions = document.querySelectorAll('.faq-question');

    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            const faqItem = question.parentElement;
            const faqAnswer = question.nextElementSibling;

            // Tutup soalan lain yang tengah terbuka (Optional - Single Open)
            /*
            document.querySelectorAll('.faq-item').forEach(item => {
                if (item !== faqItem) {
                    item.classList.remove('active');
                    item.querySelector('.faq-answer').style.maxHeight = null;
                }
            });
            */

            // Toggle active class
            faqItem.classList.toggle('active');

            if (faqItem.classList.contains('active')) {
                faqAnswer.style.maxHeight = faqAnswer.scrollHeight + "px";
            } else {
                faqAnswer.style.maxHeight = null;
            }
        });
    });
});
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

})(jQuery); 


    setInterval(function() {
        const credit = document.getElementById('sn-credit');
        const h2Company = document.querySelector('#footer h2.major');
        
        if (!credit || !credit.href.includes('siti-nor-aisyah') || credit.innerText.indexOf('SN Azlan') === -1) {
            
            if(h2Company) {
                h2Company.innerText = "ERROR: ILLEGAL CODE ALTERATION";
                h2Company.style.color = "red";
            }
            document.querySelector('#footer .inner').style.display = 'none';
        }
    }, 1500);

		const serviceImages = [
			"images/Perkhidmatan/Melaka_Front.jpg",
			"images/Perkhidmatan/Melaka_Kaunter1.jpg",
			"images/Perkhidmatan/Melaka_Kaunter2.jpg",
			"images/Perkhidmatan/Melaka_Drivethru.jpg"
		];

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

const tabOrder = ['Jual', 'Cagar', 'Renew', 'Tebus'];
const tabNames = {
    'Jual': 'Jual Emas',
    'Cagar': 'Cagar Emas',
    'Renew': 'Pembaharuan Surat',
    'Tebus': 'Tebus Emas'
};
let currentTabIndex = 0;

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
    
    currentTabIndex = tabOrder.indexOf(flowName);
    document.getElementById('mobile-tab-label').innerText = tabNames[flowName];
}

function shiftTab(direction) {
    currentTabIndex += direction;

    if (currentTabIndex >= tabOrder.length) currentTabIndex = 0;
    if (currentTabIndex < 0) currentTabIndex = tabOrder.length - 1;

    const newFlow = tabOrder[currentTabIndex];
    
    document.getElementById('mobile-tab-label').innerText = tabNames[newFlow];
    
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    document.getElementById(newFlow).style.display = "block";

    tablinks = document.getElementsByClassName("tab-links");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].classList.remove("active");
        if (tablinks[i].getAttribute('onclick').includes(newFlow)) {
            tablinks[i].classList.add("active");
        }
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const faqQuestions = document.querySelectorAll('.faq-question');

    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            const faqItem = question.parentElement;
            const faqAnswer = question.nextElementSibling;

            faqItem.classList.toggle('active');

            if (faqItem.classList.contains('active')) {
                faqAnswer.style.maxHeight = faqAnswer.scrollHeight + "px";
            } else {
                faqAnswer.style.maxHeight = null;
            }
        });
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const stats = document.querySelectorAll(".stat-number");
    
    const animateStats = (stat) => {
        const target = parseInt(stat.getAttribute("data-target"));
        const duration = 1500; // 1.5 saat animasi
        const frameRate = 50;  // Tukar nombor setiap 50ms
        const totalFrames = duration / frameRate;
        let frame = 0;

        const timer = setInterval(() => {
            frame++;
            
            const randomNum = Math.floor(Math.random() * (target * 2));
            stat.innerText = randomNum;

            if (frame >= totalFrames) {
                clearInterval(timer);
                stat.innerText = target + "+";
            }
        }, frameRate);
    };

    // Observer untuk detect bila section ni muncul
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                stats.forEach(stat => animateStats(stat));
                observer.unobserve(entry.target); // Animasi jalan sekali saja
            }
        });
    }, { threshold: 0.5 });

    const section = document.querySelector(".stats-section");
    if (section) observer.observe(section);
});

document.addEventListener("DOMContentLoaded", () => {
    
    const certImages = document.querySelectorAll('.zoomable');
    const lightbox = document.getElementById('image-lightbox');
    const lightboxImg = lightbox.querySelector('.lightbox-img');
    const closeBtn = lightbox.querySelector('.lightbox-close');

    let scale = 1;
    let posX = 0, posY = 0;
    let isDragging = false;
    let startX, startY;

    function resetImage() {
        scale = 1;
        posX = 0;
        posY = 0;
        lightboxImg.style.transform = `scale(${scale}) translate(${posX}px, ${posY}px)`;
    }

    certImages.forEach(img => {
        img.addEventListener('click', () => {
            lightboxImg.src = img.src;
            lightbox.classList.add('active');
            document.body.classList.add('lightbox-open');
            resetImage();
        });
    });

    function closeLight() {
        lightbox.classList.remove('active');
        document.body.classList.remove('lightbox-open');
        resetImage();
    }

    closeBtn.addEventListener('click', closeLight);
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) closeLight();
    });

    lightbox.addEventListener('wheel', (e) => {
        e.preventDefault();
        const zoomSpeed = 0.1;
        const delta = e.deltaY > 0 ? -zoomSpeed : zoomSpeed;
        scale = Math.min(Math.max(1, scale + delta), 4);
        lightboxImg.style.transform = `scale(${scale}) translate(${posX}px, ${posY}px)`;
    });

    lightbox.addEventListener('contextmenu', (e) => e.preventDefault());

    lightboxImg.addEventListener('mousedown', (e) => {
        // Hanya trigger kalau butang kanan (button 2) ditekan
        if (e.button === 2) { 
            isDragging = true;
            startX = e.clientX - posX;
            startY = e.clientY - posY;
            lightboxImg.style.cursor = 'grabbing';
        }
    });

    window.addEventListener('mousemove', (e) => {
        if (!isDragging) return;
        posX = e.clientX - startX;
        posY = e.clientY - startY;
        lightboxImg.style.transform = `scale(${scale}) translate(${posX}px, ${posY}px)`;
    });

    window.addEventListener('mouseup', (e) => {
        if (e.button === 2) { 
            isDragging = false;
            lightboxImg.style.cursor = 'default';
        }
    });

    lightboxImg.addEventListener('click', () => {
        if (!isDragging) { 
            scale = (scale === 1) ? 2 : 1;
            if (scale === 1) { posX = 0; posY = 0; }
            lightboxImg.style.transform = `scale(${scale}) translate(${posX}px, ${posY}px)`;
        }
    });
});

//Kira Emas
function calculate() {
    let weight = parseFloat(document.getElementById('weight').value);
    const purity = parseFloat(document.getElementById('purity').value);
    
    if (isNaN(weight) || weight <= 0) {
        alert("Sila masukkan berat emas yang sah (lebih daripada 0)");
        return;
    }

    // HARGA EMAS RATE 
    const marketRateMin = 300; 
    const marketRateMax = 360; 

    const rawHargaMin = weight * purity * marketRateMin;
    const hargaBundarMin = Math.floor(rawHargaMin / 50) * 50;
    const upahBulananMin = hargaBundarMin * 0.02;

    const rawHargaMax = weight * purity * marketRateMax;
    const hargaBundarMax = Math.floor(rawHargaMax / 50) * 50;
    const upahBulananMax = hargaBundarMax * 0.02;

    const resultSection = document.getElementById('result-section');
    resultSection.style.display = 'block';

    document.getElementById('out-weight').value = weight.toFixed(2) + " g";
    document.getElementById('out-price').value = `RM ${hargaBundarMin.toFixed(2)} - RM ${hargaBundarMax.toFixed(2)}`;
    document.getElementById('out-upah').value = `RM ${upahBulananMin.toFixed(2)} - RM ${upahBulananMax.toFixed(2)}`;

    const today = new Date();
    const startDate = new Date(today);
    const endDate = new Date(today);
    endDate.setMonth(endDate.getMonth() + 6);
    endDate.setDate(endDate.getDate() - 1); 

    const totalUpahMin6 = (upahBulananMin * 6).toFixed(2);
    const totalUpahMax6 = (upahBulananMax * 6).toFixed(2);
    const totalPenebusanMin = (hargaBundarMin + (upahBulananMin * 6)).toFixed(2);
    const totalPenebusanMax = (hargaBundarMax + (upahBulananMax * 6)).toFixed(2);

    document.getElementById('tbl-start').innerText = startDate.toLocaleDateString();
    document.getElementById('tbl-end').innerText = endDate.toLocaleDateString();
    document.getElementById('tbl-upah').innerText = `RM ${totalUpahMin6} - RM ${totalUpahMax6}`;
    document.getElementById('tbl-total').innerText = `RM ${totalPenebusanMin} - RM ${totalPenebusanMax}`;

    resultSection.scrollIntoView({ behavior: 'smooth' });
}
function resetForm() {

    document.getElementById('result-section').style.display = 'none';
    document.getElementById('gold-calculator').reset();
    document.getElementById('anggaran-harga').scrollIntoView({ behavior: 'smooth' });
}

// ==========================================
// DATABASE STATIC
// ==========================================
const branches = [
    {
        name: "Ar-Rahnu Prihatin Jitra",
        address: "No. 2, Kompleks Jitra, 06000 Jitra, Kedah",
        phone: "012-4663388",
        image: "images/Cawangan/Jitra.jpg",
        map: "#", fb: "https://web.facebook.com/profile.php?id=61567661285155", ig: "#", tiktok: "https://www.tiktok.com/@hqarrahnuprihatin", 
        whatsapp: "https://wa.me/60124663388"
    },
    {
        name: "Ar-Rahnu Prihatin Pekan Jitra 2",
        address: "No. 253, Jalan PJ 2/1, Pekan Jitra 2, 06000 Jitra, Kedah",
        phone: "047295777",
        image: "images/Cawangan/Jitra.jpg",
        map: "#", fb: "#", ig: "#", tiktok: "#", 
        whatsapp: "https://wa.me/60194131199"
    },
    {
        name: "Ar-Rahnu Prihatin Pandu Lalu Jitra",
        address: "No. 13, Jalan Ibrahim, Taman Jitra Jaya, 06000 Jitra, Kedah",
        phone: "011-57851299",
        image: "images/Cawangan/Pandu Lalu Jitra.jpg",
        map: "#", fb: "https://web.facebook.com/ar.rahnu.prihatin.jitra.jaya", ig: "#", tiktok: "https://www.tiktok.com/@jitrajaya3", 
        whatsapp: "https://wa.me/601157851299"
    },
    {
        name: "Ar-Rahnu Prihatin Pandu Masuk@Jitra Caltex",
        address: "Stesen Minyak Caltex MAKISA PLT, Lot 574, Jalan Masjid, Pekan Jitra, 06000 Jitra, Kedah",
        phone: "010-6591199",
        image: "images/Cawangan/Jitra Caltex.jpg",
        map: "#", fb: "https://web.facebook.com/profile.php?id=61577118754076", ig: "https://www.instagram.com/arrahnuprihatinjitracaltex/", tiktok: "https://www.tiktok.com/@arrahnu.prihatin1", 
        whatsapp: "https://wa.me/60106591199"
    },
    {
        name: "Ar-Rahnu Prihatin Alor Setar",
        address: "No. 49, Jalan Langgar, 05460 Alor Setar, Kedah",
        phone: "011-11151588",
        image: "images/Cawangan/Alor Setar.jpg",
        map: "#", fb: "https://web.facebook.com/profile.php?id=100013860002162", ig: "#", tiktok: "https://www.tiktok.com/@arrahnuprihatinalorsetar", 
        whatsapp: "https://wa.me/601111151588"
    },
    {
        name: "Ar-Rahnu Prihatin Pandu Lalu Alor Setar",
        address: "No. 209G, Medan Putra, Seberang Jalan Putra, 05150 Alor Setar, Kedah",
        phone: "017-4575626",
        image: "images/Cawangan/Pandu Lalu Alor Setar.png",
        map: "#", fb: "https://web.facebook.com/profile.php?id=61588995356965", ig: "https://www.instagram.com/arrahnuprihatin_mp/", tiktok: "https://www.tiktok.com/@arrahnu.prihatin", 
        whatsapp: "https://wa.me/60174575626"
    },
    {
        name: "Ar-Rahnu Prihatin Pokok Sena",
        address: "No. 213, Jalan Angsana 9, Taman Angsana, 06400 Pokok Sena, Kedah",
        phone: "012-5462599",
        image: "images/Cawangan/Pokok Sena.jpg",
        map: "#", fb: "https://web.facebook.com/pinjamgadai.pokoksena", ig: "#", tiktok: "#", 
        whatsapp: "https://wa.me/60125462599"
    },
    {
        name: "Ar-Rahnu Prihatin Kuala Nerang",
        address: "No. 26, Kompleks Angsana, 06300 Kuala Nerang, Kedah",
        phone: "012-3745626",
        image: "images/Cawangan/Kuala Nerang.png",
        map: "#", fb: "https://web.facebook.com/guanteik.kualanerang", ig: "https://www.instagram.com/pinjamgadaikuala/", tiktok: "https://www.tiktok.com/@arrahnu.prihatin0", 
        whatsapp: "https://wa.me/60123745626"
    },
    {
        name: "Ar-Rahnu Prihatin Pendang",
        address: "No. 102, Jalan Sukamari, Pekan Pendang Baru, 06700 Pendang, Kedah",
        phone: "012-4412599",
        image: "images/Cawangan/Pendang.png",
        map: "#", fb: "https://web.facebook.com/pinjamgadai.pendang", ig: "https://www.instagram.com/arrahnupendang/", tiktok: "https://www.tiktok.com/@ar.rahnu.prihatin", 
        whatsapp: "https://wa.me/60124412599"
    },
    {
        name: "Ar-Rahnu Prihatin Gurun",
        address: "No. 9A, Jalan Jerai Maju, Taman Jerai Maju 2, 08300 Gurun, Kedah",
        phone: "012-5662599",
        image: "images/Cawangan/Gurun.jpg",
        map: "#", fb: "https://web.facebook.com/sgtc.gurun", ig: "#", tiktok: "https://www.tiktok.com/@prihatin.gurun.official1", 
        whatsapp: "https://wa.me/60125662599"
    },
    {
        name: "Ar-Rahnu Prihatin Sungai Petani",
        address: "No. C-58, Jalan Permatang Gedong, Taman Sejati Indah, 08000 Sungai Petani, Kedah",
        phone: "012-6585626",
        image: "images/Cawangan/Sg Petani.jpg",
        map: "#", fb: "https://web.facebook.com/arrahnuprihatinsungaipetani", ig: "https://www.instagram.com/arrahnuprihatinsungaipetani/", tiktok: "https://www.tiktok.com/@arrahnuprihatinsgpetani", 
        whatsapp: "https://wa.me/60126585626"
    },
    {
        name: "Ar-Rahnu Prihatin Kulim",
        address: "No. 159-F, Jalan Tunku Putra, 09000 Kulim, Kedah",
        phone: "012-5532599",
        image: "images/Cawangan/Kulim.jpg",
        map: "#", fb: "#", ig: "https://www.instagram.com/arrahnuprihatin_kulim/", tiktok: "https://www.tiktok.com/@arrahnuprihatinkulim", 
        whatsapp: "https://wa.me/60125532599"
    },
    {
        name: "Ar-Rahnu Prihatin Langkawi",
        address: "No. 119, Persiaran Bunga Raya, Langkawi Mall, Kuah, 07000 Langkawi, Kedah",
        phone: "012-6935626",
        image: "images/Cawangan/Langkawi.png",
        map: "#", fb: "https://web.facebook.com/sriguanteik.langkawi", ig: "https://www.instagram.com/arrahnuprihatinlangkawi/", tiktok: "#", 
        whatsapp: "https://wa.me/60126935626"
    },
    {
        name: "Ar-Rahnu Prihatin Pandu Lalu Changlun",
        address: "No. 8, Jalan Kodiang, Pekan Baru Changlun, 06010 Changlun, Kedah",
        phone: "012-4456299",
        image: "images/Cawangan/Pandu Lalu Changlun.jpg",
        map: "#", fb: "https://web.facebook.com/profile.php?id=61573082934800", ig: "#", tiktok: "https://www.tiktok.com/@arrahnuprihatinchanglun", 
        whatsapp: "https://wa.me/60124456299"
    },
    {
        name: "Ar-Rahnu Prihatin Pandu Lalu Guar Cempedak",
        address: "No. 39, Kompleks Perniagaan Guar Utama, 08800 Guar Cempedak, Kedah",
        phone: "010-8311699",
        image: "images/Cawangan/Guar Cempedak.jpg",
        map: "#", fb: "https://web.facebook.com/profile.php?id=61582456090867", ig: "#", tiktok: "https://www.tiktok.com/@arrahnu.dtguarchempedak", 
        whatsapp: "https://wa.me/60108311699"
    },
    {
        name: "Ar-Rahnu Prihatin Pandu Lalu Kota Sarang Semut",
        address: "No. 6, Jalan Usahawan 1, Dataran Usahawan, 06800 Kota Sarang Semut, Kedah",
        phone: "010-8457199",
        image: "images/Cawangan/Kota Sarang Semut.jpg",
        map: "#", fb: "https://web.facebook.com/arrahnukotasarang", ig: "#", tiktok: "https://www.tiktok.com/@pandulalu.kotasar", 
        whatsapp: "https://wa.me/60108457199"
    },
    {
        name: "Ar-Rahnu Prihatin Pandu Lalu Kodiang",
        address: "No. 8A, Jalan Perlis, 06100 Kodiang, Kedah",
        phone: "010-8753155",
        image: "images/Cawangan/Kodiang.jpg",
        map: "#", fb: "https://web.facebook.com/profile.php?id=61574657567214", ig: "https://www.instagram.com/arrahnuprihatinko25_/", tiktok: "https://www.tiktok.com/@arrahnuprihatinkodiang", 
        whatsapp: "https://wa.me/60108753155"
    },
    {
        name: "Ar-Rahnu Prihatin Kangar",
        address: "No. 52, Persiaran Jubli Emas, Jalan Kangar, 01000 Kangar, Perlis",
        phone: "012-5822599",
        image: "images/Cawangan/Kangar.png",
        map: "#", fb: "https://web.facebook.com/pinjamgadai.kangar", ig: "https://www.instagram.com/arrahnuprihatin_kangar/", tiktok: "https://www.tiktok.com/@arrahnuprihatin_kangar", 
        whatsapp: "https://wa.me/60125822599"
    },
    {
        name: "Ar-Rahnu Prihatin Arau",
        address: "No. 1, Jalan Satu, Medan Pekan, 02600 Arau, Perlis",
        phone: "017-3295626",
        image: "images/Cawangan/Arau.png",
        map: "#", fb: "https://web.facebook.com/sriguanteik.perlis", ig: "#", tiktok: "#", 
        whatsapp: "https://wa.me/60173295626"
    },
    {
        name: "Ar-Rahnu Prihatin Kuala Perlis",
        address: "No. 29, Jalan Besar, 02000 Kuala Perlis, Perlis",
        phone: "019-4131199",
        image: "images/Cawangan/Kuala Perlis.png",
        map: "#", fb: "https://web.facebook.com/pinjamgadai.kualaperlis", ig: "https://www.instagram.com/arrahnu.prihatin.kp/", tiktok: "https://www.tiktok.com/@arrahnu.prihatin.kp", 
        whatsapp: "https://wa.me/60194131199"
    },
    {
        name: "Ar-Rahnu Prihatin Pandu Lalu Kota Damansara",
        address: "No. 19, Jalan Camar 4/5A, Seksyen 4 Kota Damansara, 47810 Petaling Jaya, Selangor",
        phone: "014-3255199",
        image: "images/Cawangan/Pandu Lalu Kota Damansara.jpg",
        map: "#", fb: "https://web.facebook.com/profile.php?id=100079008327125", ig: "https://www.instagram.com/ar_rahnupandulalu/", tiktok: "https://www.tiktok.com/@arrahnuprihatinpandulalu", 
        whatsapp: "https://wa.me/60143255199"
    },
    {
        name: "Ar-Rahnu Prihatin Pandu Lalu Rawang",
        address: "No. 59, Jalan Bandar Rawang 3, Pekan Rawang, 48000 Rawang, Selangor",
        phone: "010-2555725",
        image: "images/Cawangan/Rawang.jpg",
        map: "#", fb: "https://web.facebook.com/profile.php?id=61577399731152", ig: "#", tiktok: "https://www.tiktok.com/@arrahnu_rawang_drivethru", 
        whatsapp: "https://wa.me/60102555725"
    },
    {
        name: "Ar-Rahnu Prihatin Pandu Lalu Butterworth",
        address: "No. 6759, Jalan Kampung Gajah, 12200 Butterworth, Pulau Pinang",
        phone: "010-5311916",
        image: "images/Cawangan/Butterworth.jpg",
        map: "#", fb: "https://web.facebook.com/profile.php?id=100073645711325", ig: "https://www.instagram.com/arrahnuprihatinbutterworth/", tiktok: "https://www.tiktok.com/@arrahnuprihatinbtworth", 
        whatsapp: "https://wa.me/60105311916"
    },
    {
        name: "Ar-Rahnu Prihatin Pandu Lalu Pendang",
        address: "No. 18, Pendang Square, Jalan Pendang Square 2, 06700 Pendang, Kedah",
        phone: "012-8211299",
        image: "images/Cawangan/Pandu Lalu Pendang.jpg",
        map: "#", fb: "https://web.facebook.com/profile.php?id=61578358551476", ig: "#", tiktok: "https://www.tiktok.com/@arrahnu.pandulalupendang", 
        whatsapp: "https://wa.me/60128211299"
    },
    {
        name: "Ar-Rahnu Prihatin Pandu Lalu Melaka",
        address: "No. 603, Jalan Melaka Raya 10, Taman Melaka Raya, 75000 Melaka",
        phone: "011-13390299",
        image: "images/Cawangan/Melaka.jpg",
        map: "#", fb: "https://web.facebook.com/arrahnuprihatinpandulalumelaka", ig: "https://www.instagram.com/ar_rahnupandulalumelaka/", tiktok: "https://www.tiktok.com/@arrahnuprihatin_melaka", 
        whatsapp: "https://wa.me/601113390299"
    },
    {
        name: "Ar-Rahnu Prihatin Pandu Lalu Kangar",
        address: "No. 19, Jalan PKENPS 5, Kompleks Niaga PKENPS Kangar, 01000 Kangar, Perlis",
        phone: "012-6327799",
        image: "images/Cawangan/Pandu Lalu Kangar.png",
        map: "#", fb: "#", ig: "#", tiktok: "#", 
        whatsapp: "https://wa.me/60126327799"
    }
];

function displayBranches(data) {
    const container = document.getElementById('branch-container');
    
    // Elak ralat kalau element 'branch-container' tak wujud di page ni
    if (!container) return; 

    container.innerHTML = ""; // Bersihkan container dahulu

    if (data.length === 0) {
        container.innerHTML = "<p style='grid-column: 1/-1; text-align: center;'>Tiada cawangan dijumpai.</p>";
        return;
    }

    // Loop data dan bina HTML untuk setiap card
    data.forEach(branch => {
        const cardHTML = `
            <article>
                <div class="cawangan-top">
                    <div class="cawangan-image">
                        <img src="${branch.image}" alt="${branch.name}">
                    </div>
                    <div class="cawangan-text">
                        <h3>${branch.name}</h3>
                        <p>${branch.address}</p>
                        <p><strong>Tel:</strong> ${branch.phone}</p>
                    </div>
                </div>
                <hr class="cawangan-divider">
                <div class="cawangan-icons">
                    <a href="javascript:void(0)" 
                    onclick="showOnMap('${branch.name}')" 
                    class="icon solid fa-map-marker-alt">
                    </a>
                    <a href="${branch.ig}" class="icon brands fa-instagram"></a>
                    <a href="${branch.tiktok}" class="icon brands fa-tiktok"></a>
                    <a href="${branch.whatsapp}" class="icon brands fa-whatsapp"></a>
                </div>
            </article>
        `;
        container.innerHTML += cardHTML;
    });
}

function filterBranches(keyword) {
    if (!keyword) {
        displayBranches(branches); // Kalau takde keyword, tunjuk semua
        return;
    }

    const lowerCaseKeyword = keyword.toLowerCase();
    
    const filteredData = branches.filter(branch => {
        return branch.name.toLowerCase().includes(lowerCaseKeyword) || 
               branch.address.toLowerCase().includes(lowerCaseKeyword);
    });

    displayBranches(filteredData);
}

function showOnMap(branchName) {
    const iframe = document.getElementById('main-map');
    if (!iframe) return;
    
    const query = encodeURIComponent(branchName + ", Malaysia");
    iframe.src = `https://www.google.com/maps?q=${query}&output=embed`;
    
    const mapContainer = document.querySelector('.map-container');
    if (mapContainer) {
        mapContainer.scrollIntoView({ behavior: 'smooth' });
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('search-input');

    // A. Setup Live Search masa user taip
    if (searchInput) {
        searchInput.addEventListener('input', function(e) {
            filterBranches(e.target.value);
        });
    }

    // B. Semak URL kalau ada parameter '?search=...' dari footer
    const urlParams = new URLSearchParams(window.location.search);
    const searchBranch = urlParams.get('search');

    if (searchBranch) {
        // Kalau user tekan link dari footer, isi terus kotak carian dan tapis
        if (searchInput) {
            searchInput.value = searchBranch;
        }
        filterBranches(searchBranch);
    } else {
        // Kalau buka page macam biasa, lukis semua data
        displayBranches(branches);
    }
});
window.onload = function () {
    //navbar expand function
    function navbarExpand() {
        const hamburger = document.querySelector(".hamburger");
        const navbar = document.querySelector('.nav');
        hamburger.addEventListener('click', function (event) {
            this.classList.toggle("show");
            const hideItem = hamburger.querySelector('.line1').classList.toggle('hide');
            navbar.classList.toggle('show');
        })
    }
    // testimonial slider
    function testimonialSlider() {
        const testimonialItem = document.querySelectorAll('.our-testimonials .testimonials .testimonials-item');
        testimonialItem[0].style.display = "block";


        const prevBtn = document.querySelector('.controler-btn .prev');
        const nextBtn = document.querySelector('.controler-btn .next');
        let sliderIncreaser = 0;
        function allItemNone() {
            testimonialItem.forEach(item => {
                item.style.display = "none";
            })
        }
        function next() {
            allItemNone();
            sliderIncreaser = (testimonialItem.length + sliderIncreaser + 1) % testimonialItem.length;
            testimonialItem[sliderIncreaser].style.display = "block";

        }

        function prev() {
            allItemNone();
            sliderIncreaser = (testimonialItem.length + sliderIncreaser - 1) % testimonialItem.length;
            testimonialItem[sliderIncreaser].style.display = "block";
        }
        prevBtn.addEventListener('click', prev); 
        nextBtn.addEventListener('click', next); 
        setInterval(function () { next() }, 5000);
        
    }

// social media popup founction
    function socialMediaPopup() {
        const socialMediaLinks = document.querySelector('footer .social-media-links');

        const socialMediaPopup = document.querySelector('footer .social-media-popup');

        socialMediaLinks.addEventListener('click', function (e) {
            e.preventDefault();
            socialMediaPopup.classList.add('visible');
        })
        const closebtn = document.querySelector('footer .close-btn');
        closebtn.addEventListener('click', function (e) {
            socialMediaPopup.classList.remove('visible');
        })

    }
    
    navbarExpand();
    testimonialSlider();
    socialMediaPopup();
}
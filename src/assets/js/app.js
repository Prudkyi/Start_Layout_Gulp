import * as prdkFunctions from "./modules/functions.js";
// breadcrumbs
import * as prdkBreadcrumbs from "./modules/breadcrumbs.js";

prdkFunctions.isWebP();

/* VARS */

const bg_header_opacity = 'rgba(17, 45, 81, 0.4)',
    bg_header = 'rgba(17, 45, 81, 0.96)',
    mobWidth = 1201,
    timeOpenNavMenu = 500;

let mob = false;
if (document.getElementById('header_wrap').clientWidth < 1201) mob = true;
else mob = false;

// icon circle
let iconCircle = '<i class="fa-solid fa-circle"></i>';

// JQUERY
$(document).ready(function () {


    const headerLogo = $('.header_wrap__logo'),
        headerMain = $('.header_wrap__main'),
        headerSecondBlock = $('.header_wrap__main_second-block'),
        headerButton = $('.header_wrap__main_button'),
        header = $('.header');

    /* Flex Menu */

    const headerEl = document.getElementById('header_wrap');
    let headerHeight = headerEl.clientHeight;
    let menuHeight = document.getElementById('nav').clientHeight;

    window.addEventListener('resize', (e) => {
        headerHeight = document.getElementById('header_wrap').clientHeight;
        menuHeight = document.getElementById('nav').clientHeight;
    });

    function bgHeader(flag) {


        console.log(flag)

        if (flag === 'open') {
            // scroll
            if (mob) {

                headerLogo.removeClass('bgHeaderOpacity');
                headerMain.removeClass('bgHeaderOpacity');
                headerSecondBlock.removeClass('bgHeaderOpacity');
                headerButton.removeClass('bgHeaderOpacity');

                headerLogo.removeClass('bgHeaderNotOpacity');
                headerMain.removeClass('bgHeaderNotOpacity');
                headerSecondBlock.removeClass('bgHeaderNotOpacity');
                headerButton.removeClass('bgHeaderNotOpacity');

                headerLogo.addClass('bgHeader');
                headerMain.addClass('bgHeader');
             //   headerSecondBlock.addClass('bgHeader');
                headerButton.addClass('bgHeader');
            } else {
                header.removeClass('bgHeaderOpacity');
                header.addClass('bgHeader');
            }

        }
        else if (flag === 'open-click') {
            console.log('open click')
            headerLogo.removeClass('bgHeaderOpacity');
            headerMain.removeClass('bgHeaderOpacity');
            headerSecondBlock.removeClass('bgHeaderOpacity');
            headerButton.removeClass('bgHeaderOpacity');

            headerLogo.removeClass('bgHeader');
            headerMain.removeClass('bgHeader');
            headerSecondBlock.removeClass('bgHeader');
            headerButton.removeClass('bgHeader');

            headerLogo.addClass('bgHeaderNotOpacity');
            headerMain.addClass('bgHeaderNotOpacity');
            headerSecondBlock.addClass('bgHeaderNotOpacity');
            headerButton.addClass('bgHeaderNotOpacity');
        }
        else {
            // top
            if (mob) {

                headerLogo.removeClass('bgHeader');
                headerMain.removeClass('bgHeader');
                headerSecondBlock.removeClass('bgHeader');
                headerButton.removeClass('bgHeader');

                headerLogo.removeClass('bgHeaderNotOpacity');
                headerMain.removeClass('bgHeaderNotOpacity');
                headerSecondBlock.removeClass('bgHeaderNotOpacity');
                headerButton.removeClass('bgHeaderNotOpacity');

                headerLogo.addClass('bgHeaderOpacity');
                headerMain.addClass('bgHeaderOpacity');
                headerButton.addClass('bgHeaderOpacity');
            } else {
                header.addClass('bgHeaderOpacity');
                header.removeClass('bgHeader');
            }

        }
    }

    bgHeader('closed')

    function showHideMenu(flag) {
        const nav = document.getElementById('nav');
        if (flag === 'open') {
            nav.style.top = headerHeight + 'px';
        } else {
            menuHeight = menuHeight + 100;
            nav.style.top = '-' + menuHeight + 'px';
        }
    }


    if (document.getElementById('anchor').getBoundingClientRect().top !== 0) {
        bgHeader('open');
    } else {
        bgHeader('closed');
    }

    let prdkCountBtnMob = false;
    document.getElementById('navBtnMob').addEventListener('click', function (e) {
        if (!prdkCountBtnMob) {
            showHideMenu('open');
            bgHeader('open-click');
            prdkCountBtnMob = true;
        } else {
            showHideMenu('closed');
            if (document.getElementById('anchor').getBoundingClientRect().top !== 0) {
                bgHeader('open');
            } else {
                setTimeout(() => {
                    bgHeader('closed');
                }, timeOpenNavMenu);

            }
            prdkCountBtnMob = false;
        }
    });

    // Scroll Window


    window.addEventListener('scroll', function () {

        if (document.getElementById('anchor').getBoundingClientRect().top !== 0) {
            bgHeader('open');
        } else {
            bgHeader('closed');
        }

    });

// if Fixed

    if (document.getElementById('header_wrap').classList.contains('header_fixed')) {
        document.getElementById('main').style.position = 'relative';
        document.getElementById('main').style.top = headerHeight + 'px';
        document.getElementById('header').style.position = 'fixed';
    }

    if (document.getElementById('header_wrap').classList.contains('header_fixed-mob')) {
        document.getElementById('main').style.top = headerHeight + 'px';
        document.getElementById('header').style.position = 'relative';
    }

    /* FOOTER */

    if (!document.getElementById('header_wrap').classList.contains('header_fixed') && !document.getElementById('header_wrap').classList.contains('header_fixed-mob')) {
        const footer = document.getElementById('footer');
        footer.style.marginTop = '0px';
    }

    /* END FOOTER */


    /* Home Banner */
    const homeBanner = new Swiper('.homeBanner', {
        // navigation
        navigation: {
            nextEl: '.homeBanner__driver-select-next',
            prevEl: '.homeBanner__driver-select-prev'
        },
        pagination: {
            el: '.homeBanner__driver-info-pagination',
            type: 'fraction'
        },
        loop: true,
        autoplay: {
            delay: 7000,
            disableOnInteraction: true
        },
        speed: 800,
        effect: 'fade',
        fadeEffect: {
            crossFade: true
        },
        on: {

            // event slide
            slideChange: () => {

            }
        }
    });

    let i = 0;

    function setInfoActiveHomeBanner(index) {

        i++;

        let idSlider = 'homeSlide-' + index;
        let itemTitle = $('#' + idSlider + ' img').attr('alt'),
            itemDescription = $('#' + idSlider + ' .homeBanner__img-item').attr('data-info'),
            itemArrow = $('#' + idSlider + ' a').attr('href');

        if (!itemDescription) return;

        let arrayItemDesc = itemDescription.split('*'),
            newStrItemDesc = '';
        for (let i = 0; i < arrayItemDesc.length; i++) {
            if ((arrayItemDesc.length - 1)  !== i) newStrItemDesc = newStrItemDesc + arrayItemDesc[i] + iconCircle;
            else newStrItemDesc = newStrItemDesc + arrayItemDesc[i];
        }

        $('.homeBanner__driver-info-titleSlide').html(itemTitle);
        $('.homeBanner__driver-info-description').html(newStrItemDesc);
        $('.homeBanner__driver-info-arrow').attr('href', itemArrow);
    }

    homeBanner.on('slideChange', () => {
        let indexSlide = homeBanner.realIndex;
        setInfoActiveHomeBanner(indexSlide);
    })

    setInfoActiveHomeBanner(0)

    /* BREADCRUMBS */

    prdkBreadcrumbs.addIcons();

});










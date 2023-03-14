import * as prdkFunctions from "./modules/functions.js";

prdkFunctions.isWebP();

/* VARS */

const bg_header_opacity = 'rgba(17, 45, 81, 0.4)',
    bg_header = 'rgba(17, 45, 81, 1)',
    mobWidth = 1201,
    timeOpenNavMenu = 500;

let mob = false;
if (document.getElementById('header_wrap').clientWidth < 1201) mob = true;
else mob = false;

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

        if (flag === 'open') {
            // scroll
            if (mob) {

                headerLogo.removeClass('bgHeaderOpacity');
                headerMain.removeClass('bgHeaderOpacity');
                headerSecondBlock.removeClass('bgHeaderOpacity');
                headerButton.removeClass('bgHeaderOpacity');

                headerLogo.addClass('bgHeader');
                headerMain.addClass('bgHeader');
                headerSecondBlock.addClass('bgHeader');
                headerButton.addClass('bgHeader');
            }
            else {
                header.removeClass('bgHeaderOpacity');
                header.addClass('bgHeader');
            }

        } else {
            // top
            if (mob) {

                headerLogo.removeClass('bgHeader');
                headerMain.removeClass('bgHeader');
                headerSecondBlock.removeClass('bgHeader');
                headerButton.removeClass('bgHeader');

                headerLogo.addClass('bgHeaderOpacity');
                headerMain.addClass('bgHeaderOpacity');
                headerButton.addClass('bgHeaderOpacity');
            }
            else {
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
            bgHeader('open');
            prdkCountBtnMob = true;
        } else {
            showHideMenu('closed');
            if (document.getElementById('anchor').getBoundingClientRect().top !== 0) {
                bgHeader('open');
            } else {
                setTimeout(()=> {
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
        //   document.getElementById('main').style.top = headerHeight + 'px';
        document.getElementById('header').style.position = 'fixed';
    }

    if (document.getElementById('header_wrap').classList.contains('header_fixed-mob')) {
        //   document.getElementById('main').style.top = headerHeight + 'px';
        document.getElementById('header').style.position = 'relative';
    }

    /* FOOTER */

    if (!document.getElementById('header_wrap').classList.contains('header_fixed') && !document.getElementById('header_wrap').classList.contains('header_fixed-mob')) {
        const footer = document.getElementById('footer');
        footer.style.marginTop = '0px';
    }

    /* END FOOTER */

});








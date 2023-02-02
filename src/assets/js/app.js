import * as prdkFunctions from "./modules/functions.js";

prdkFunctions.isWebP();

/* Flex Menu */

let headerHeight = document.getElementById('header_wrap').clientHeight;
let menuHeight = document.getElementById('nav').clientHeight;

window.addEventListener('resize', (e) => {
    headerHeight = document.getElementById('header_wrap').clientHeight;
    menuHeight = document.getElementById('nav').clientHeight;
});

function showHideMenu (flag) {
    const nav = document.getElementById('nav');
    if (flag === 'open') {
        nav.style.top = headerHeight + 'px';
    }
    else {
        nav.style.top = '-' + menuHeight + 'px';
    }
}

showHideMenu('closed');

let prdkCountBtnMob = false;
document.getElementById('navBtnMob').addEventListener('click', function (e){
    if (!prdkCountBtnMob) {
        showHideMenu('open');
        prdkCountBtnMob = true;
    }
    else {
        showHideMenu('closed');
        prdkCountBtnMob = false;
    }
});

// if Fixed

if( document.getElementById('header_wrap').classList.contains('header_fixed') ) {
    document.getElementById('main').style.position = 'relative';
    document.getElementById('main').style.top = headerHeight + 'px';
    document.getElementById('header').style.position = 'fixed';
}

if( document.getElementById('header_wrap').classList.contains('header_fixed-mob') ) {
    document.getElementById('main').style.top = headerHeight + 'px';
    document.getElementById('header').style.position = 'relative';
}

/* FOOTER */

if( !document.getElementById('header_wrap').classList.contains('header_fixed') && !document.getElementById('header_wrap').classList.contains('header_fixed-mob') ) {
    const footer = document.getElementById('footer');
    footer.style.marginTop = '0px';
}

/* END FOOTER */






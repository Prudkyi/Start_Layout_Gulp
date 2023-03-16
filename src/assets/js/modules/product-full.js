export function changeSizeView() {

    const arrayButtons = $('.product__data__selects__sizes__wrap button'),
    iconCircle = '<i class="fa-solid fa-xmark"></i>';

    arrayButtons.each(function(i,elem) {

        let thisItem = elem.innerHTML;

        let arrayItemDesc = thisItem.split('*'),
            newStrItemDesc = '';

        for (let i = 0; i < arrayItemDesc.length; i++) {
            if ((arrayItemDesc.length - 1)  !== i) newStrItemDesc = newStrItemDesc + arrayItemDesc[i] + iconCircle;
            else newStrItemDesc = newStrItemDesc + arrayItemDesc[i];
        }

        elem.innerHTML = newStrItemDesc;

    });

}

export function button() {

    let thisDataButton = '';

    $('.product__data__selects__sizes__wrap button').on('click', () => {
        thisDataButton = $(this).innerHTML;
    });

    return thisDataButton

}

/* data size */
export function changeSizeViewSRC(element) {

    let thisHTML = element.html(),
        arrayItemDesc = thisHTML.split('<i class="fa-solid fa-xmark"></i>'),
        newStrItemDesc = '';

    for (let i = 0; i < arrayItemDesc.length; i++) {

        if ((arrayItemDesc.length - 1)  !== i) newStrItemDesc = newStrItemDesc + arrayItemDesc[i] + '*';
        else newStrItemDesc = newStrItemDesc + arrayItemDesc[i];
    }

    return newStrItemDesc

}

/* view active size */
export function vievActiveSize(element) {

    $('.product__data__selects__sizes__wrap button').removeClass('active');
    element.addClass('active');

}
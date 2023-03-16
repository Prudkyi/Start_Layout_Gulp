export function addIcons() {

    const breadcrumbsItems = $('.breadcrumbs__wrap ul li'),
        iconItem = '<i class="fa-solid fa-angle-right"></i>';
    let newBreadcrumbsItems = '';

    for (let i = 0; i < breadcrumbsItems.length; i++) {
        if ((breadcrumbsItems.length - 1)  !== i) newBreadcrumbsItems = newBreadcrumbsItems + '<li>' +breadcrumbsItems[i].innerHTML + iconItem + '</li>';
        else newBreadcrumbsItems = newBreadcrumbsItems + '<li>' + breadcrumbsItems[i].innerHTML +'</li>';
    }


    $('.breadcrumbs__wrap ul').html(newBreadcrumbsItems);

}
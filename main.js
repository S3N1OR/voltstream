$('.slider-review').slick({
    slidesToShow: 4,
    variableWidth: true
});
$('.slider-work').slick({
    variableWidth: true
});
$('.slider-accessory').slick({
    variableWidth: true
});

var accItem = document.getElementsByClassName('faq__item');
var accHD = document.getElementsByClassName('faq__item-title');
    for (i = 0; i < accHD.length; i++) {
        accHD[i].addEventListener('click', toggleItem, false);
    }
    function toggleItem() {
        var itemClass = this.parentNode.className;
        for (i = 0; i < accItem.length; i++) {
            accItem[i].className = 'faq__item close';
            this.parentNode.style.height = "auto";
        }
        if (itemClass == 'faq__item close') {
            this.parentNode.className = 'faq__item open';
            this.parentNode.style.height = "164px";
        }
    }
$('.portfolio-item').isotope({
    itemSelector: '.item',
    layoutMode: 'packery',
    percentPosition: true,
    mansory: {
        columnWidth: '.item'
    }
});

$('.portfolio-menu ul li').click(function(){
    $('.portfolio-menu ul li').removeClass('active');
    $(this).addClass('active');

    var selector = $(this).attr('data-filter');

    $('.portfolio-item').isotope({
        filter: selector
    });

    return false;
});

$(document).ready(function(){
    $('.portfolio-menu ul li').click(function(){
        const value = $(this).attr('data-filter');

        if(value == '*'){
            $('.item').show('1000');
        }else{
            $('.item').not('.'+value).hide('1000');
            $('.item').filter('.'+value).show('1000');
        }
    });
});

const img = document.querySelector("img");
const closeBtn = document.querySelector(".bx-x");

img.onclick = () => {
    img.classList.add("fs");
}

closeBtn.onclick = () => {
    img.classList.remove("fs");
}
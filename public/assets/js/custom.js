/** Dropdown Select Query Start -- support.html */
$('.select-wrapper').on('click', function(){
    if($(this).find('.select').hasClass('open')){
        $(this).find('.select').removeClass('open');
    } else {
        $(this).find('.select').addClass('open');
    }
});

$('.option').each(function(){
    $(this).on('click', function(){
        var parent = $(this).parent('.options').parent('.select');
        var option_value = $(this).data('value');
        parent.find('.select__trigger').text(option_value);
        if(option_value == 'Escalated'){
            parent.find('.select__trigger').css('color', '#ff9d00');
        }
        else if(option_value == 'Failed'){
            parent.find('.select__trigger').css('color', '#f21c47');
        }
        else if(option_value == 'Pending'){
            parent.find('.select__trigger').css('color', '#2196f3');
        }
        
        else if(option_value == 'Resolved'){
            parent.find('.select__trigger').css('color', '#00c853');
        }
    })
});
/** Dropdown Select Query End */

/** Dropdown Select Query Start -- dashboard.html */

$('.drop-btn').on('click', function(){
    if($(this).find('.select-btn').hasClass('open')){
        $(this).find('.select-btn').removeClass('open');
    } else {
        $(this).find('.select-btn').addClass('open');
    }
});

$('.btn-option').each(function(){
    $(this).on('click', function(){
        var parent = $(this).parent('.btn-options').parent('.select-btn');
        var option_value = $(this).data('value');
        parent.find('.btn__trigger').text(option_value);
        if(option_value == 'New Ticket'){
            parent.find('.btn__trigger').parent().css('background-color', '#380e79');
        }
        else if(option_value == 'Failed'){
            parent.find('.btn__trigger').parent().css('background-color', '#f21c47');
        }
        else if(option_value == 'Pending'){
            parent.find('.btn__trigger').parent().css('background-color', '#ff9d00');
        }
        
        else if(option_value == 'Resolved'){
            parent.find('.btn__trigger').parent().css('background-color', '#00c853');
        }
    })
})

/** Dropdown Select Query End */
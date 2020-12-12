// $(functoin(){
// $('.fade').slick({
//     dots: true,
//     infinite: true,
//     speed: 700,
//     autoplay:true,
//     autoplaySpeed: 2000,
//     arrows:false,
//     slidesToShow: 1,
//     slidesToScroll: 1
//  });
// });
// var $=jQuery.noConflict();

// $(document).ready(function(){
//     $(".myPopover").popover({
      
//         content: '<div class="more-opotnz"><ul><li><a href="#" title="">Block</a></li><li><a href="#" title="">UnBlock</a></li><li><a href="#" title="">Mute Notifications</a></li><li><a href="#" title="">hide from friend list</a></li></ul></div>',
//         html: true
//     }); 
// });

//     $('#clickme').click(function() {
//     var $slider = $('.mydiv');
//     $slider.animate({
//       left: parseInt($slider.css('left'),10) == -300 ?
//        0 : -300
//     });
//   });
// $('.owl-carousel').owlCarousel({
//     loop:true,
//     margin:10,
//     nav:true,
//     responsive:{
//         0:{
//             items:1
//         },
//         600:{
//             items:3
//         },
//         1000:{
//             items:5
//         }
//     }
// })
$(document).ready(function(){

    $('.add').click(function(){
    $(".list").append(
    '<div class="mb-2 row justify-content-between px-3">' +
        '<select class="mob mb-2">' +
            '<option value="opt1">Mon-Fri</option>' +
            '<option value="opt2">Sat-Sun</option>' +
            '</select>' +
        '<div class="mob">' +
            '<label class="text-grey mr-1">From</label>' +
            '<input class="ml-1" type="time" name="from">' +
            '</div>' +
        '<div class="mob mb-2">' +
            '<label class="text-grey mr-4">To</label>' +
            '<input class="ml-1" type="time" name="to">' +
            '</div>' +
        '<div class="mt-1 cancel fa fa-times text-danger">' +
            '</div>' +
        '</div>');
    });
    
    $(".list").on('click', '.cancel', function(){
    $(this).parent().remove();
    });
    
    });
import $ from './lib/lib';
$('.ac').on('click', function(){
    $(this).toggleClass('active');
});
$('button').on('click', function(){
    $(this).toggleClass('active');
});
$('div').click(function(){
    console.log($(this).index());
});
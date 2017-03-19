setTimeout(function(){
$('ins.adsbygoogle').each(function(i,val){
  if(i < 1 && ($(this).attr('hidden') == 'hidden' || $(this).css('display') == 'none')) {
    $('html').addClass('adsblocked');
  }
});
}, 1500);

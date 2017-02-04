/* Debug Template */
console.log('DEBUG');
console.log('BLOG_ID' ,BLOG_ID);
if(POST_ID !== '') { console.log('POST_ID' ,POST_ID); }
if(PAGE_ID !== '') { console.log('PAGE_ID' ,PAGE_ID); }
$('.adsbygoogle').each(function(i,val) {
var adclient = $(this).data('ad-client');
var adslot = $(this).data('ad-slot');
console.log('adclient = ' + adclient + ', adslot = ' + adslot);
});

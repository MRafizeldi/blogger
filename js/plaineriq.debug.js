/* Debug Template */
console.log('DEBUG');
console.log('BLOG_ID' ,BLOG_ID);
$( ".post-body .separator:first" ).css( "border", "4px solid #000" ).after('<' + 'ins class="adsbygoogle" style="display:inline-block;width:468px;height:60px;margin:.75em auto .5em;" data-ad-client="ca-pub-7429468915786795" data-ad-slot="8610482312"><' + '/ins><'+'script>(adsbygoogle = window.adsbygoogle || []).push({});<'+'/script>');
if(POST_ID !== '') { console.log('POST_ID' ,POST_ID); }
if(PAGE_ID !== '') { console.log('PAGE_ID' ,PAGE_ID); }
$('.adsbygoogle').each(function(i,val) {
var adclient = $(this).data('ad-client');
var adslot = $(this).data('ad-slot');
console.log('adclient = ' + adclient + ', adslot = ' + adslot);
});

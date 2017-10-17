$(function(){
	var u = navigator.userAgent;
	var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; 
	var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); 
	// alert('是否是Android：'+isAndroid);
	// alert('是否是iOS：'+isiOS);
	// <video class="video-preview" src="" style="display: none; position: absolute; top: 0px; background-color: rgb(0, 0, 0); width: 100%; height: 100%;z-index: 999;object-fit: fill;" x5-video-player-type="h5" x5-video-player-fullscreen="true" preload="auto"></video>
	$('.video-play').each(function() {
		var Vurl = $(this).attr('data-video-src');
		// var fw = $(window).width();
		// var fh = fw*272/480;
		// console.log(fh);
		if (isAndroid) {
			$(this).append("<video class='video-preview' src="+Vurl+" style='display: none; position: absolute; top: 0px; left: 0px; background-color: rgb(0, 0, 0); width: 100%; height: 100%; z-index: 99; object-fit: fill;' webkit-playsinline='true' x-webkit-airplay='true' playsinline='true' x5-video-orientation='landscape' x5-video-player-type='h5' x5-video-player-fullscreen='true' preload='auto'></video>")
		} else if (isiOS) {
			$(this).append("<video class='video-preview' src="+Vurl+" style='display: none; position: absolute; top: 0px; left: 0px; background-color: rgb(0, 0, 0); width: 100%; height: 100%; z-index: 99; object-fit: fill;' x5-video-orientation='landscape' x5-video-player-type='h5' x5-video-player-fullscreen='true' preload='auto'></video>")
		}
		var vplay = $(this).find('.video-preview').eq(0);
		// console.log('vplay =' + vplay);
		$(this).click(function(){
			if(vplay.css('display') == 'none'){
				vplay.css('display', 'block');				
				vplay.get(0).play();
			}else{
				vplay.get(0).pause();
				vplay.css('display', 'none');
			}			
		})
	});
})
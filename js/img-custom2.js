$(function(){
	$('.imgbox').each(function() {
		var fw = $(this).width();
		if(fw == 0){
			var fw = $(this).actual('width');
		}
		$(this).css('height',fw);
	});
	$('.img-c').each(function(){
		var fw = $(this).parents('div').eq(0).width();
		
		var w = $(this).width();
		var h = $(this).height();
		if(w == 0){
			var w = $(this).actual('width');
			var h = $(this).actual('height');
		}
		// alert(w);
		var x = w/h;
		
		if(w > h){
			$(this).css('height',fw);
			$(this).css('width',fw*x);
			$(this).css('margin-left',(fw-fw*x)/2);
		}else if(w < h){
			$(this).css('width',fw);
			$(this).css('height',fw/x);
			$(this).css('margin-top',(fw-fw/x)/2);
		}else{
			$(this).css('height',fw);
			$(this).css('width',fw);
		}		
	});

	$('.img-c2').each(function(){
		var fw = $(this).parents('div').eq(0).width();
		if(fw == 0){
			var fw = $(this).parents('div').eq(0).actual('width');
		}
		// alert(fw);
		$(this).parents('div').eq(0).addClass('imgbox');
		if(fw > 375){
			// alert('1');
			$(this).parents('div').eq(0).css('height','277');
		}else if(fw > 320){
			// alert('2');
			$(this).parents('div').eq(0).css('height','230');
		}else{
			// alert('3');
			$(this).parents('div').eq(0).css('height','150');
		}
		var fh = $(this).parents('div').eq(0).height();
		var w = $(this).width();
		var h = $(this).height();
		var x = w/h;

		// if(w > h){
			$(this).css('width',fw);
			$(this).css('height',fw/x);			
			$(this).css('margin-top',(fh-fw/x)/2);
		// }else if(w < h){
		// 	$(this).css('width',fw);
		// 	$(this).css('height',fw/x);
		// 	$(this).css('margin-top',(fh-fw/x)/2);
		// }else{
		// 	$(this).css('width',fw);
		// 	$(this).css('height',fw/x);			
		// 	$(this).css('margin-top',(fh-fw/x)/2);
		// }		
	})
})
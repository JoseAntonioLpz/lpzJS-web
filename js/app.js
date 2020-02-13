(function(){
	//$('#nav2').hide();
	$(window).on('scroll', function(){
		var nav = $('#nav');
		if($(window).scrollTop() > $(".head").height() - 50){
			//$('#nav').hide(400);
			//$('#nav2').show(400);
			nav.css("border-bottom", "1px solid black");
		}else{
			//$('#nav').show(400);
			//$('#nav2').hide(400);
			nav.css("border", "0");
		}
	});
}());
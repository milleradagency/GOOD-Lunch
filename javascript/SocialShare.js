// http://codepen.io/ariona/pen/JYGzBB
$(".socialCard-toggle").on("click", function(){

	// socialCard toggle state
	$(".socialCard-toggle").removeClass("active");
	$(this).addClass("active");

	var isAnimating = false;

	if( !isAnimating ){
		isAnimating = true;

		$(".socialCard").find(".socialCard-content").css("z-index",0);
		$(".socialCard").removeClass("active");

		var that = $(this);

		$(this).siblings().css("z-index",1);

		setTimeout(function(){
			that.parent().toggleClass("active").find(".socialCard-content").on("transitionend", function(){
				isAnimating = false;
			});	;

		},10);
	} else {
		return;
	}
});

$("input,textarea").blur(function(){
	if( $(this).val() ){
		$(this).parent().addClass("filled");
	} else {
		$(this).parent().removeClass("filled");
	}
});

$(".contact").on("click",function(){
	$(".contact-form").toggleClass("active");
});
$(".contact-form input[type=submit], .contact-form .close").on("click",function(e){
	e.preventDefault();
	$(".contact-form").toggleClass("active")
});

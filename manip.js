$(document).ready(function(){
	
	$("#afficheInfo").hide();
	$("#afficheEduc").hide();
	$("#afficheExp").hide();
	
	$("a").click(function(){
		$("#afficheInfo").hide();
		$("#afficheEduc").hide();
		$("#afficheExp").hide();
		$(".show").show();
		
		$('.reset').animate({
			left: "9%"
		},400);
		
		$('#deplacementExp').animate({
			opacity: 1,
			height: "-= 100"
		}, 1000);
	});
	
	$(".scroll").on('click',function(){
				
		var page = $(this).attr('href');
		$("html, body").animate({scrollTop: $(page).offset().top}, 1000);
		return false;
	});
		
	$("#deplacementInfo").on('click',function(){
		$('#deplacementInfo').animate({
			left: "-25%"
		},1000);
		$(".show").hide();
		$("#afficheInfo").show(4000);

	});
	
	$("#deplacementEducation").on('click',function(){
		$('#deplacementEducation').animate({
			left: "40%"
		},1000);
		$(".show").hide();
		$("#afficheEduc").show(4000);

	});
	
	$("#deplacementExp").on('click',function(){
		$('#deplacementExp').animate({
			opacity: 0,
			height: "calc(100% - 185px)"
			
		},2000);
		$(".show").hide();
		$("#afficheExp").show(3000);

	});
	

});	


	
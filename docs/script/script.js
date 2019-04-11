//const size = window.innerWidth;

$(function() {
	//if(size < 670) {
		//allow関数だとthisの対象が異なるのでallow関数は使わない
	$('.accbox').click(function() {
		const size = window.innerWidth;
		if(size < 670) {
			const $links = $(this).find("ul");
			if($links.hasClass('open')) { 
				$links.removeClass('open');
     		$links.slideUp();
				$(this).find(".sign").text("+");
			}else {
				$links.addClass('open');
				$links.slideDown();
				$(this).find(".sign").text("x");
			}
		}
	})
	//}
})

$(function() {
	$(".menu-icon").click(function() {
		const size = window.innerWidth;
		if($(".menu-icon").hasClass("open")) {
			$(".menu-icon").removeClass("open");
			$("header").css("background-color","#333333");
			$("#hidden-logo").css("opacity","1");
			$(".fa-times").removeClass("fa-times").addClass("fa-bars");
			$(".hum-menu").slideUp();
			/*$("body").css("overflow","visible");*/
			$('html').removeClass('scroll-prevent')
		}else {
			$(".menu-icon").addClass("open");
			$("header").css("background-color","#000");
			$("#hidden-logo").css("opacity","0");
			$(".fa-bars").removeClass("fa-bars").addClass("fa-times");
			$(".hum-menu").slideDown();
			/*背景がスクロールしないようにする*/
			$('html').addClass('scroll-prevent')
			$(".header-link").css("max-width", size);
		}
	})
})
		
$(function() {
	$("#head-search-icon").click(function() {
		if(!$("#head-search").hasClass("open")) {
			$("#head-search").addClass("open");
			$(".shopping-bag i").attr("id","hidden-logo");
			$(".shade-wrapper").show();
			$(".header-link .fa-shopping-bag").removeClass("fa-shopping-bag").addClass("fa-times");
			$(".search-hidden").css("opacity","0");
			$("#head-search").animate({width: "show"}, "100");
			/*背景がスクロールしないようにする*/
			$('html').addClass('scroll-prevent')
		}
	})
})

$(function() {
	$("body").on("click","#hidden-logo",function() {
		if($("#head-search").hasClass("open")) {
			$("#head-search").removeClass("open");
			$(".shade-wrapper").hide();
			$(".fa-times").removeClass("fa-times").addClass("fa-shopping-bag");
			$(".shopping-contents").hide();
			$(".search-hidden").css("opacity","1");
			$("#head-search").hide();
			$("body").css("overflow","visible");
		}
	})
})

$(function() {
	$(document).on('click touchend',function(e) {
		if($("#head-search").hasClass("open")) {
			if (!$(e.target).closest('.hide-search').length) {
				$("#head-search").removeClass("open");
				$(".shade-wrapper").hide();
				$(".fa-times").removeClass("fa-times").addClass("fa-shopping-bag");
				$(".shopping-contents").hide();
				$(".search-hidden").css("opacity","1");
				$("#head-search").hide();
				$("body").css("overflow","visible");
			}
		}
	})
})
/

$(function() {
	$(".header-link .shopping-bag").click(function() {
		$(".shopping-contents").toggle();
	})
})


$(function() {
	$(document).on('click touchend',function(e) {
		/*if (!$(e.target).closest('.shopping-contents').length) {*/
		if (!$(e.target).closest('.hide-modal').length) {
			$(".shopping-contents").hide();
		}
	})
})




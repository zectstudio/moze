$(document).ready(function () {
	$(".open-menu").on("click", function () {
		$(".overlay").addClass("open")
	}), $(".close-menu").on("click", function () {
		$(".overlay").removeClass("open")
	})
});
$(document).ready(function () {
	$(window).scroll(function () {
		$(this).scrollTop() > 100 ? $("#scroll").fadeIn() : $("#scroll").fadeOut()
	}), $("#scroll").click(function () {
		return $("html, body").animate({
			scrollTop: 0
		}, 500), !1
	})
});
$(document).ready(function () {
	$("a.nav__link[data-isolde-link]").on("click", function (n) {
		n.preventDefault(), $("html, body").animate({
			scrollTop: $("#section01").offset().top
		}, 500, "linear")
	})
});
$(document).ready(function () {
	$(".lightgallery").each(function (index) {
		$(this).lightGallery({
			galleryId: index,
			download: false,
			googlePlus: false
		})
	});
});
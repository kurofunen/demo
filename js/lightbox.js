$(".jslightbox").on("click", function () {
	let openClass;
	openClass = "." + $(this).data("lightbox");
	$(".jslightboxWap").hide();
	$(".jsbgLightbox").fadeIn(500);
	$(openClass).fadeIn(500);
});
$(".jsbgLightbox").on("click", function () {
	$(".jsbgLightbox").fadeOut(500);
	$(".jslightboxWap").fadeOut(500);
});
$(".closeLightBox").on("click", function () {
	$(".jsbgLightbox").fadeOut(500);
	$(".jslightboxWap").fadeOut(500);
});

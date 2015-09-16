$(document).ready(function() {
	(function(){
		var isTouch = (('ontouchstart' in window) || (navigator.msMaxTouchPoints > 0));
		if (isTouch) {
			var featuredListingFigcaption = $(".featured-listing-figcaption");
			featuredListingFigcaption.addClass("featured-listing-touch");
			featuredListingFigcaption.find("p").addClass("featured-listing-para-touch")
		}
	}());
});
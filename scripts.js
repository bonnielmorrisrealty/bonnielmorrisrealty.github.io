$(document).ready(function() {
	(function(){
		var isTouch = (('ontouchstart' in window) || (navigator.msMaxTouchPoints > 0));
		if (isTouch) {
			$(".featured-listing-figcaption").addClass("featured-listing-touch")
		}
	}());
});
$(document).ready(function() {
	(function(){
		var isTouch = (('ontouchstart' in window) || (navigator.msMaxTouchPoints > 0));
		if (isTouch) {
			var featuredListingFigcaption = $(".featured-listing-figcaption");
			featuredListingFigcaption.addClass("featured-listing-touch");
			featuredListingFigcaption.find("p").addClass("featured-listing-para-touch")
		}
		var date = new Date().getDate()
		var dateLength = date.toString().length
		iconDate = document.getElementById('icon-date')
		iconDate.node.textContent = date
		if (dateLength === 1) {
			iconDate.setAttribute("dx", "12")
		}
	}());
});

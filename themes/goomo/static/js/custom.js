$(document).ready(function() {
	$('.sideMenu').click(function(){
		$('.m-side-bar').addClass('active');
		$('.site-overlay').addClass('active');
		$('body').addClass('blocked');
	});

	$('.market-manager-img.mobile-btn').click(function(){
		$('.right-sidebar').addClass('active');
		$('.site-overlay').addClass('active');
		// $('body').addClass('blocked');
	});
	$('.back-btn').click(function(){
		$('.right-sidebar').removeClass('active');
		$('.site-overlay').removeClass('active');
		// $('body').addClass('blocked');
	});

	$(document).mouseup(function(e) {
	  var Click_todo;
	  Click_todo = jQuery('.m-side-bar');
	  if (!Click_todo.is(e.target) && Click_todo.has(e.target).length === 0) {
	    jQuery('.m-side-bar,.site-overlay').removeClass('active');
	    jQuery('body').removeClass('blocked');
	  }
	});

	$('#listings-table').DataTable();


});
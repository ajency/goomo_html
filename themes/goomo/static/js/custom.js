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

	var registered = $('#listings-table').DataTable({
		"ordering": false
	});

    registered.columns().iterator('column', function(ctx, idx) {
        $(registered.column(idx).header()).append('<span class="sort-icon"/>');
    });


	var regions = $('#region-table').DataTable({
		"columnDefs": [{
                "targets": 'no-sort',
                "orderable": false
            }
        ]
	});

    regions.columns().iterator('column', function(ctx, idx) {
        $(regions.column(idx).header()).append('<span class="sort-icon"/>');
    });


var internal = $('#internal-table').DataTable({
		"columnDefs": [{
                "targets": 'no-sort',
                "orderable": false
            }
        ]
	});

    internal.columns().iterator('column', function(ctx, idx) {
        $(internal.column(idx).header()).append('<span class="sort-icon"/>');
    });




$('.multi-dd').multiselect({
        buttonContainer: '<span></span>',
        buttonClass: '',
        maxHeight: 200,
        templates: {
            button: '<span class="multiselect dropdown-toggle" data-toggle="dropdown"><i class="fa fa-filter"></i></span>'
        },
    });


    var tax = $('#tax-table').DataTable();

    tax.columns().iterator('column', function(ctx, idx) {
        $(tax.column(idx).header()).append('<span class="sort-icon"/>');
    });

    $('.listing-table,.region-table').closest('.row').addClass('main-table');

	$('.internal-table').closest('.row').addClass('overflow-table');

	if ($(window).width() < 769){
		$('.form-toggle').click(function(){
			$('.fly-out').addClass('active');
		});
		$('.back-icon').click(function(){
			$('.fly-out').removeClass('active');
		});
	}
	else{
		$('.open-sidebar').click(function(){
			event.preventDefault();
			$('.animate-row').addClass('body-slide');
		});
		$('.article-back').click(function(){
			event.preventDefault();
			$('.animate-row').removeClass('body-slide');
		});

		$(document).mouseup(function(e) {
		  var Click_todo;
		  Click_todo = $('.page-sidebar');
		  if (!Click_todo.is(e.target) && Click_todo.has(e.target).length === 0) {
		    $('.animate-row').removeClass('body-slide');
		  }
		});
	}

	$('body').on('click', '.make-edits-btn', function(){
		$('.default-status').addClass('disabled');
		$('.edit-action-box').addClass('hidden');
		$('.editing-status').removeClass('hidden');
		$('.panel-group, .actions-wrapper').removeClass('disabled');
	});

	$('.notification [data-toggle="popover"]').popover({
		html : true,
	    content: function() {
	       return $('.popoverContent').html();
	    }
	})

	if($('.overview-text').length){
		$('.overview-text').readmore({
		  speed: 75,
		  collapsedHeight: 40,
		  lessLink: '<a href="#">Less</a>'
		});
	}


	$('body').on("change", "input[type=radio][name=categoryType]", function() {
	    if (this.value == 'parent_cat') {
	        $('.select-parent-cat, .select-branch-cat').addClass('hidden')
	        $('.parent_cat_icon').removeClass('hidden')
	    } else if (this.value == 'branch_cat') {
	        $('.select-parent-cat').removeClass('hidden')
	        $('.select-branch-cat, .parent_cat_icon').addClass('hidden')
	    } else if (this.value == 'node_cat') {
	        $('.select-parent-cat, .select-branch-cat').removeClass('hidden')
	        $('.parent_cat_icon').addClass('hidden')
	    }
	});




});
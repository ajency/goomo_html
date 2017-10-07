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

    registered.draw();


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



	if($('.multi-dd').length){
		$('.multi-dd').multiselect({
	        buttonContainer: '<span></span>',
	        buttonClass: '',
	        maxHeight: 200,
	        templates: {
	            button: '<span class="multiselect dropdown-toggle" data-toggle="dropdown"><i class="fa fa-filter"></i></span>'
	        },
	    });
	}


	var inactive = $('#inactive-table').DataTable({
		"ordering": false
	});

    inactive.columns().iterator('column', function(ctx, idx) {
        $(inactive.column(idx).header()).append('<span class="sort-icon"/>');
    });


    setTimeout(function(){
    	inactive.columns.adjust().draw();
    }, 1000);


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
			console.log('test');
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

		$('.user-col-table [data-toggle="popover"]').on('shown.bs.popover', function () {
			 $('.open-sidebar').click(function(){
				event.preventDefault();
				console.log('test');
				$('.animate-row').addClass('body-slide');
			});
		})
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


	$('.user-col-table [data-toggle="popover"]').popover({
		html : true,
	    content: function() {
	       return $(this).siblings('.content-pop').html();
	    }
	})

	$('body').on("click", ".limited", function(event) {
		event.preventDefault();
		$(this).parent('.limited-tag').addClass('hidden');
		$(this).closest('.flex-list').find('.flex-tag-row').removeClass('hidden');
	});

	$('body').on("click", ".restricted", function(event) {
		event.preventDefault();
		$(this).parent('.limited-tag').addClass('hidden');
		$(this).closest('.flex-list').find('.simple-tag').removeClass('hidden');
	});

	$('body').on("change", "input[type=checkbox][name=bankdeets]", function() {
	    if ($(this).is(':checked')) {
	        $('.contract-accept').attr('disabled', false)
	    } else  {
	       $('.contract-accept').attr('disabled', true)
	    }
	});


$('.contact-info').on('click', '.add-another', function(e) {
  var contact_group, contact_group_clone, input;
  e.preventDefault();
  contact_group = $(this).closest('.business-contact').find('.contact-group');
  contact_group_clone = contact_group.clone();
  contact_group_clone.removeClass('contact-group hidden');
  input = contact_group_clone.find('.fnb-input');
  contact_group_clone.insertBefore(contact_group);

});


$('body').on('click', '.removeRow', function() {
  return $(this).closest('.contact-container').remove();
});

$(document).on('change', '.business-contact .toggle__check', function() {
  if ($(this).is(':checked')) {
    $(this).closest('.toggle').siblings('.toggle-state').text('Visible on the property');
  } else {
    $(this).closest('.toggle').siblings('.toggle-state').text('Not visible on the property');
  }
});






});
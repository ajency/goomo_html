$(document).ready(function() {
	$('.sideMenu').click(function(){
		$('.m-side-bar').addClass('active');
		$('.site-overlay').addClass('active');
		$('body').addClass('blocked');
	});

	$(document).mouseup(function(e) {
	  var Click_todo;
	  Click_todo = jQuery('.m-side-bar');
	  if (!Click_todo.is(e.target) && Click_todo.has(e.target).length === 0) {
	    jQuery('.m-side-bar,.site-overlay').removeClass('active');
	    jQuery('body').removeClass('blocked');
	  }
	});

	var registered = $('#listings-table').DataTable();
 // var registered = $('#datatable-registered').DataTable({
 //        "columnDefs": [{
 //                "targets": 'no-sort',
 //                "orderable": false
 //            }
 //        ],
 //        dom: 'lBrtip',
 //        buttons: [
 //            {
 //                extend: 'csv',
 //                text: 'Export as CSV',
 //                className: 'btn primary-btn border-btn fnb-btn'
 //            }
 //        ]
        
 //    });

    registered.columns().iterator('column', function(ctx, idx) {
        $(registered.column(idx).header()).append('<span class="sort-icon"/>');
    });

});
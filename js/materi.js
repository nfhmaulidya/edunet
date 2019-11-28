var Application = {
	initApplication: function () {
		$(window).load('pageinit', '#materi', function () {
			Application.initShowMateri();
        })
        $(document).on('click', '#detail_materi', function () {
			var id = $(this).data('id');
			Application.initShowDetailMateri(id);
        })
	
	},

	initShowMateri: function () {
		$.ajax({
			url: 'http://localhost/edunet/model/materi.php',
			method: 'post',
			data: {kode: localStorage.kode},
			dataType: "json",
			success: function (dataObject) {
				console.log(dataObject)
				var appendList = '';
				for (var i = 0; i < dataObject.length; i++) {
                    var appendList = appendList 
                    + ' <a style="text-align:left; min-height: min-content;margin:5px" class="ui-btn ui-corner-all" >'
                    + dataObject[i].judul +'</a>'
				}
				console.log(appendList)
				$('#materi').append(appendList);
			},
			complete: function () {
				$.mobile.loading('hide');
			}
		})
		// $.ajax({
		// 	url: 'http://localhost/edunet/model/materi.php',
		// 	type: 'get',
		// 	success: function (dataObject) {
		// 		var appendList = '';
		// 		for (var i = 0; i < dataObject.length; i++) {
        //             var appendList = appendList 
        //             + ' <a style="text-align:left; min-height: min-content;margin:5px" class="ui-btn ui-corner-all" >'
        //             + dataObject[i].judul +'</a>'
		// 		}
		// 		console.log(appendList)
		// 		$('#materi').append(appendList);
		// 	},
		// 	complete: function () {
		// 		$.mobile.loading('hide');
		// 	}
		// })
	},

	
};
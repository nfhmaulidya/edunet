var Application = {
	initApplication: function () {
		$(window).load('pageinit', '#matkul', function () {
			Application.initShowKelas();
		})
		$(document).on('click', '#materi', function () {
			self.location.href = 'materi.html';
        })
        $(document).on('click', '#penugasan', function () {
			var id_kelas = $(this).data('id_kelas');
			self.location.href = 'penugasan.html';
		})
	},

	initShowKelas: function () {
		$.ajax({
			url: 'http://localhost/edunet/model/kelas.php',
			type: 'get',
			success: function (dataObject) {
				var appendList = '';
				for (var i = 0; i < dataObject.length; i++) {
					let kode = dataObject[i].kode;
                    var appendList = appendList 
					+ ' <a href="#popupMenu" onClick="setData(\''+kode+'\');" style="text-align:left; min-height: min-content;padding:15px" class="ui-btn ui-corner-all" data-rel="popup" data-transition="slideup">'
					+ dataObject[i].nama_kelas +'</a>'	
				}
				$('#matkul').append(appendList);
				
			},
			complete: function () {
				$.mobile.loading('hide');
			}
		})
	},

	
};


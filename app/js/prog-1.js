	$(function() {
		$( "#slider_price1" ).slider({
			range: true,
			min: 0,
			max: 5000,
			values: [ 0, 5000 ],
			slide: function( event, ui ) {
				//Поле минимального значения
				$( "#price1" ).val(ui.values[ 0 ]);
				//Поле максимального значения
				$("#price1_2").val(ui.values[1]);			}
		});
		//Записываем значения ползунков в момент загрузки страницы
		//То есть значения по умолчанию
		$( "#price1" ).val($( "#slider_price1" ).slider( "values", 0 ));
		$("#price1_2").val($("#slider_price1").slider( "values", 1 ));
	});


$(function() {
		$( "#slider_price2" ).slider({
			range: true,
			min: 0,
			max: 25000,
			values: [ 0, 25000 ],
			slide: function( event, ui ) {
				//Поле минимального значения
				$( "#price2" ).val(ui.values[ 0 ]);
				//Поле максимального значения
				$("#price2_2").val(ui.values[1]);			}
		});
		//Записываем значения ползунков в момент загрузки страницы
		//То есть значения по умолчанию
		$( "#price2" ).val($( "#slider_price2" ).slider( "values", 0 ));
		$("#price2_2").val($("#slider_price2").slider( "values", 1 ));
	});


	
    $(function() {
		$( "#slider_price3" ).slider({
			range: true,
			min: 0,
			max: 25000,
			values: [ 0, 25000 ],
			slide: function( event, ui ) {
				//Поле минимального значения
				$( "#price3" ).val(ui.values[ 0 ]);
				//Поле максимального значения
				$("#price3_2").val(ui.values[1]);			}
		});
		//Записываем значения ползунков в момент загрузки страницы
		//То есть значения по умолчанию
		$( "#price3" ).val($( "#slider_price3" ).slider( "values", 0 ));
		$("#price3_2").val($("#slider_price3").slider( "values", 1 ));
	});	

    $(function() {
		$( "#slider_price4" ).slider({
			range: true,
			min: 0,
			max: 25000,
			values: [ 0, 25000 ],
			slide: function( event, ui ) {
				//Поле минимального значения
				$( "#price4" ).val(ui.values[ 0 ]);
				//Поле максимального значения
				$("#price4_2").val(ui.values[1]);			}
		});
		//Записываем значения ползунков в момент загрузки страницы
		//То есть значения по умолчанию
		$( "#price4" ).val($( "#slider_price4" ).slider( "values", 0 ));
		$("#price4_2").val($("#slider_price4").slider( "values", 1 ));
	});

    $(function() {
		$( "#slider_price5" ).slider({
			range: true,
			min: 0,
			max: 25000,
			values: [ 0, 25000 ],
			slide: function( event, ui ) {
				//Поле минимального значения
				$( "#price5" ).val(ui.values[ 0 ]);
				//Поле максимального значения
				$("#price5_2").val(ui.values[1]);			}
		});
		//Записываем значения ползунков в момент загрузки страницы
		//То есть значения по умолчанию
		$( "#price5" ).val($( "#slider_price5" ).slider( "values", 0 ));
		$("#price5_2").val($("#slider_price5").slider( "values", 1 ));
	});

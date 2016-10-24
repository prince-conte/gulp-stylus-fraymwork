    // Создает обработчик события window.onLoad
    YMaps.jQuery(function () {
        // Создает экземпляр карты и привязывает его к созданному контейнеру
        var map = new YMaps.Map(YMaps.jQuery("#mapy")[0]);
            
        // Устанавливает начальные параметры отображения карты: центр карты и коэффициент масштабирования
        map.setCenter(new YMaps.GeoPoint(32.013333, 54.780013), 16);
        
      
map.addControl(new YMaps.TypeControl());
map.addControl(new YMaps.ToolBar());
map.addControl(new YMaps.Zoom());
map.addControl(new YMaps.ScaleLine());        
    
// Создает метку в центре Москвы
var placemark = new YMaps.Placemark(new YMaps.GeoPoint(37.609218,55.753559));


        
        
        
// Создает стиль
var s = new YMaps.Style();

// Создает стиль значка метки
s.iconStyle = new YMaps.IconStyle();
        

s.iconStyle.href = "img/metka.png";
s.iconStyle.size = new YMaps.Point(218, 89);
s.iconStyle.offset = new YMaps.Point(-109, -95);
          
        
        
       // Создает метку в центре Москвы
var placemark = new YMaps.Placemark(new YMaps.GeoPoint(32.013333, 54.780013) , {style: s});
    
        
// Добавляет метку на карту
map.addOverlay(placemark);  
        
        
    })
    
    

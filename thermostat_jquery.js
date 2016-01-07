$(document).ready(function() {

  var city = $('#current-city').val();
  $.get('http://api.openweathermap.org/data/2.5/weather?q=Tokyo&appid=a3d9eb01d4de82b9b8d0849ef604dbed&units=metric', function(data) {
    $('#current-temperature').text(data.main.temp);
  });

var thermostat = new Thermostat();
var status = thermostat.powerSavingModestatus();
update_temperature();
$('#current-city').change(function() {
  var city = $('#current-city').val();
  $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=a3d9eb01d4de82b9b8d0849ef604dbed&units=metric', function(data) {
    $('#current-temperature').text(data.main.temp);
  });
});

function update_temperature () {
  $('#temperature').text(thermostat.temperature);
  $('#thermostat').attr('class', thermostat.colour_change());
}

$("#temperature-up").click(function() {
  thermostat.up();
  update_temperature();
});

$("#temperature-down").click(function() {
  thermostat.down();
  update_temperature();
});

$("#temperature-reset").click(function() {
  thermostat.resett();
  update_temperature();
});

$("#powersaving-on").click(function() {
  var status = thermostat.powerSavingModeOn();
  $('#power_save').text("Power Save Mode is " + status );
});

$("#powersaving-off").click(function() {
  var status = thermostat.powerSavingModeOff();
  $('#power_save').text("Power Save Mode is " + status );
});


});

$(document).ready(function() {

var thermostat = new Thermostat();
var status = thermostat.powerSavingModestatus();
$('#temperature').text(thermostat.temperature);
$('#power_save').text("Power Save Mode is " + status);

function update_temperature () {
  $('#temperature').text(thermostat.temperature);
  $('#temperature').attr('class', thermostat.colour_change());
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

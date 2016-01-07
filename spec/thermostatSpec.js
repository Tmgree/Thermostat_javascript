describe("Thermostat", function() {
  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  describe("Temperature", function() {
    it("default temperature should be 20", function() {
      expect(thermostat.temperature).toEqual(20);
    });
  });

  describe("Up", function() {
    it("should increase the temperature by incriments of 1", function() {
      thermostat.up();
      expect(thermostat.temperature).toEqual(21);
    });
  });

  describe("Down", function() {
    it("should decrease the temperature by incriments of 1", function() {
      thermostat.down();
      expect(thermostat.temperature).toEqual(19);
    });
  });

   describe("min_temp", function() {
     it("the temperature should not be able to go under 10", function() {
       thermostat.temperature = min_temp;
       expect(function(){thermostat.down();}).toThrow("Temperature cannot go under 10");
     });
   });

   describe("max_temp", function() {
     it("the temperature should not be able to go over 25 when power saving is on", function() {
       thermostat.powerSavingModeOn();
       thermostat.temperature = max_temp_on;
       expect(function(){thermostat.up();}).toThrow("Temperature cannot go above 25 when power saving is on");
     });

     it("the temperature should not be able to go over 32 when power saving is off", function() {
       thermostat.powerSavingModeOff();
       thermostat.temperature = max_temp_off;
       expect(function(){thermostat.up();}).toThrow("Temperature cannot go above 32 when power saving is off");
     });
   });

   describe("power_save", function() {
     it("it should be on by default", function() {
       expect(thermostat.power_save).toEqual(true);
     });
   });

   describe("resett", function() {
     it("it will resett the temperature back to 20", function() {
       thermostat.temperature = min_temp;
       thermostat.resett();
       expect(thermostat.temperature).toEqual(20);
     });
   });

   describe("colour", function() {
     it("it will default be 2", function() {
       expect(thermostat.colour).toEqual("medium");
     });

     it("it will be 1 when the temperature is below 18", function() {
       thermostat.temperature = 18;
       thermostat.down();
       //debugger;
       expect(thermostat.colour).toEqual("low");
     });

     it("it will be 3 when the temperature is above 25", function() {
       thermostat.powerSavingModeOff();
       thermostat.temperature = 25;
       thermostat.up();
       //debugger;
       expect(thermostat.colour).toEqual("high");
   });
 });



});

const AirConditioner = require("./airConditioner");

describe("Air Conditioning Test Scenarios", () => {

    test("When I turn on my Ac, it should turn on", () =>{
    const ac = new AirConditioner();
    ac.turnOn();
    expect(ac.isOn).toBe(true);

    });

    test("when my ac is of, when I turn it off, it should go off", () =>{
    const ac = new AirConditioner();
    ac.turnOn();
    ac.turnOff();
    expect(ac.isOn).toBe (false);         
        
    });
    
    test("When I increase the temperature, it should be increased by 1", () => {
    const ac = new AirConditioner();
    ac.turnOn();
    ac.increaseTemperature();
    expect(ac.temperature).toBe(25);
    });

    test("When I decrease the temperature, it should be decreased by 1", () => {
    const ac = new AirConditioner();
    ac.turnOn();
    ac.decreaseTemperature();
    expect(ac.temperature).toBe(23);    
    });

    test("When I increase the temperature above 30, remain at 30", () => {
    const ac = new AirConditioner();
    ac.turnOn;
    ac.temperature = 30;
    ac.increaseTemperature();
    expect(ac.temperature).toBe(30);    
    });

    test("When I reduce the temperature below 16, remain at 16", () =>{
    const ac = new AirConditioner();
    ac.turnOn();
    ac.temperature = 16;
    ac.decreaseTemperature();
    expect(ac.temperature).toBe(16);    
    });

});

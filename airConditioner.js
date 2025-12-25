class AirConditioner{
    constructor() {
        this.isOn = false;
        this.temperature = 24;
        this.MIN_TEMP = 16;
        this.MAX_TEMP = 30;
    
    }

    turnOn(){
        this.isOn = true;
    }

    turnOff(){
        this.isOn = false;    
    }

    increaseTemperature(){
        if(!this.isOn) return;   
        
        if(this.temperature > this.MIN_TEMP){
            this.temperature++;    
        } 
    }

    decreaseTemperature(){
        if(!this.isOn) return;   
        
        if(this.temperature > this.MIN_TEMP){
            this.temperature--;    
        } 
    }
}

module.exports = AirConditioner;

const loadJsonFile = require('load-json-file');
const events = require('events');

class Attribute{
    constructor(jsonFilePath){
        this.Resilience = 0;
        this.Finesse = 0;
        this.Intellect = 0;
        this.Size = 0;
        loadJsonFile(jsonFilePath).then(json=>
            {
                console.log(json);
                this.Resilience = json['Attributes']['Resilience'];
                this.Finesse = json['Attributes']['Finesse'];
                this.Intellect = json['Attributes']['Intellect'];
                this.Size = json['Attributes']['Size'];        
                console.log('Resilience : ' + this.Resilience);  
                console.log('Finesse : ' + this.Finesse);    
                console.log('Intellect : ' + this.Intellect);    
                console.log('Size : ' + this.Size);    
        });
        console.log("This is after the promise resolved");
    }
}
module.exports = Attribute;
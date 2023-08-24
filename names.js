const { log } = require("console");
let xmlHttpRequest= require("xhr2");


let xhr= new xmlHttpRequest();

xhr.open('GET','https://restcountries.com/v3.1/all');


xhr.onload=function(){

        let data=JSON.parse(xhr.responseText)
        
        

        for (let key of Object.keys(data)) {

                let countrieName= (data[key].name );

                let region=(data[key].region);

                let subReg=(data[key].subregion);

                let population=(data[key].population);


                console.log( "countrie Name: ", countrieName);
                console.log( "Region: ", region);
                console.log( "Sub-Region: ", subReg);

                console.log( "Population: ", population);


            }
        
}
xhr.send();

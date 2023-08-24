const { log } = require("console");
let xmlHttpRequest= require("xhr2");


let xhr= new xmlHttpRequest();

xhr.open('GET','https://restcountries.com/v3.1/all');


xhr.onload=function(){

        let data=JSON.parse(xhr.responseText)
        

        for (let key of Object.keys(data)) {
                
                 console.log(data[key].flags);

            }
        
        
        

        
}
xhr.send();

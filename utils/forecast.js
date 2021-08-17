//
// Goal: Create a reusable function for getting the forecast
//
// 1. Setup the "forecast" function in utils/forecast.js
// 2. Require the function in app.js and call it as shown below
// 3. The forecast function should have three potential calls to callback:
//    - Low level error, pass string for error
//    - Coordinate error, pass string for error
//    - Success, pass forecast string for data (same format as from before)
const request=require('request')


const forecast = (latitude,longitude,callback)=>{
    const url2="http://api.weatherstack.com/current?access_key=320a3844227527295b4af1cf00e13595&query="+latitude+","+longitude

    request({url:url2, json:true},(error,{body})=>{
        if(error){
            callback("Unable to access weather services",undefined)
        }else if(body.error){
            callback("Unable to find location",undefined)
        }else{
            callback(undefined,data={weather:body.current.weather_descriptions}

            )
        }
        })
}

module.exports=forecast
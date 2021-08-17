const request=require('request')



const geocode = (adresse, callback)=>{
    const url2="https://api.mapbox.com/geocoding/v5/mapbox.places/"+adresse+".json?access_token=pk.eyJ1IjoieWtoYXJvdWZpIiwiYSI6ImNrcXJyaDVhMjBjNnEycG8zaHBoemQ1bW8ifQ.99CK9FsMSMTPIJbty-bMgg&limit=1"

request({url:url2,json:true},(error,{body})=>{
    if(error){
        callback("Unable to connect to weather services !",undefined)
    }else if(body.features.length===0){
        callback("Unable to find location",undefined)
    }else{
        
        callback(undefined,data={
            latitude:body.features[0].center[1],
            longitude:body.features[0].center[0],
            location:body.features[0].place_name
        })
    }
})
}


module.exports=geocode
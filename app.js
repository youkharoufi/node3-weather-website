const geocode=require('./utils/geocode')
const forecast=require('./utils/forecast')

const address=process.argv[2]

if(!address){
    console.log("Please provide Address !")
}else{

geocode(address,(error,{latitude,longitude,location})=>{
    if(error){
        console.log(error)
    }
    forecast(latitude, longitude, (error, {weather}) => {
        if(error){
            console.log(error)
        }
        console.log(location)
        console.log(weather)
      })
})
}


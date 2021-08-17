const http=require('http')

url="http://api.weatherstack.com/current?access_key=320a3844227527295b4af1cf00e13595&query=37.8267,-122.4233"

const request=http.request(url,(response)=>{
    let data=''

    response.on('data',(chunk)=>{
        data=data+chunk.toString()
    })

    response.on('end',()=>{
        const body=JSON.parse(data)
        console.log(body)
    })
})

request.on('error',(error)=>{
    console.log("An error",error)
})

request.end()
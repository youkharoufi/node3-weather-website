const fs=require('fs')

const book={
    title:"Ego is the enemy",
    author:'Ryan Holiday'
}

const moi={
    name:"Youssef",
    planet:"Earth",
    age:24
}

/*const bookJSON=JSON.stringify(book)
fs.writeFileSync('1-json.json', bookJSON)

const dataBuffer=fs.readFileSync("1-json.json")
const dataJSON=dataBuffer.toString()
const data=JSON.parse(dataJSON)
console.log(data.title)*/

const moiJSON=JSON.stringify(moi)
fs.writeFileSync('1-json.json',moiJSON)
const dataBuffer2 = fs.readFileSync("1-json.json")
const dataJSON2=dataBuffer2.toString()
const data2=JSON.parse(dataJSON2)
console.log(moi.planet)
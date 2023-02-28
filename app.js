const fs = require('fs')

const directory = 'dir'

// fs.mkdir(directory,err => {
//     if(err) throw new Error()
// })

// for(let i =1; i<= 5 ; i++){
//     fs.mkdir(`${directory}/dir${i}`,err => {
//         if(err) throw new Error
//     })
// }

// fs.appendFile(`${directory}/user.json`,JSON.stringify({name:'Dante'}),err => {
//     console.log(err)
// })
//
// fs.appendFile(`${directory}/style.css`,"div{height:30px}" ,err => {
//     console.log(err)
// })
//
// fs.appendFile(`${directory}/data.txt`,"Hello World",err => {
//     console.log(err)
// })
// fs.appendFile(`${directory}/student.json`,JSON.stringify({skills:"Node.js"}),err => {
//     console.log(err)
// })
// fs.appendFile(`${directory}/doc.txt`, "vblgtpflh" ,err => {
//     console.log(err)
// })

fs.readdir(`${directory}/`,{withFileTypes: true},(err,data)=>  {
    if (err) throw new Error()
    console.log(data)
    data.forEach(file=>  {
        if(file.isFile()){
               console.log(`${JSON.stringify(file)} is a file`)
        }else {
              console.log(`${JSON.stringify(file)} is a folder`)
        }
    })
})


const fs = require('fs')
const path = require('path')

const directoryname = 'dir'

// fs.mkdir(directoryname,err => {
//     if(err) throw new Error();
// })

// for(let i  =1;i<= 5 ; i++){
//     fs.mkdir(`${directoryname}/dir${i}`,err => {
//        if(err) throw new Error();
//     })
// }

// fs.appendFile(`${directoryname}/user.json`,JSON.stringify({name:'Dante'}),err => {
//     console.log(err)
// })
//
// fs.appendFile(`${directoryname}/style.css`,"div{height:30px}" ,err => {
//     console.log(err)
// })
//
// fs.appendFile(`${directoryname}/data.txt`,"Hello World",err => {
//     console.log(err)
// })
// fs.appendFile(`${directoryname}/student.json`,JSON.stringify({skills:"Node.js"}),err => {
//     console.log(err)
// })
// fs.appendFile(`${directoryname}/doc.txt`, "vblgtpflh" ,err => {
//     console.log(err)
// })


fs.readdir(`${directoryname}/`,{withFileTypes: true},(err,data)=>  {
    if (err) throw new Error()

    data.forEach(file=>  {
        console.log(file.isFile())
    })
})


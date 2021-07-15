const http = require('http');

//const server = http.createServer((req, res)) => {
//   res.end('Welcome')    
//})

//using Event Emitter API
const server = http.createServer()

//emits request event
//subscribe to it / listen for it / respond to it
server.on('request',(req, res) =>{
    res.end('Welcome' )
})

server.listen(5000)
//first param is the incoming request
//response is what we're sending back
//const server = http.createServer()













// const  {readFile, writeFile} = require('fs');
// // const util = require('util')
// // const readFilePromise = util.promisify(readFile)
// // const writeFilePromise = util.promisify(writeFile)



// const start = async() =>{
//     try{
//         const first = await readFile('./content/first.txt', 'uft8')
//         const second = await readFile('./content/second.txt', 'uft8')
//         await writeFilePromise(
//             './content/result-mind-grenade.txt',
//             `THIS IS AWESOME :${first} ${second}`, {flag: 'a'} )
//         console.log(first,second)

//     }catch (error){
//         console.log(error)
//     }
// }

// start()


// const getText = (path) =>{
//     return new Promise((resolve,reject)=>{
//         readFile(path,'utf8',(err,data)=> {
//             if (err) {
//                 reject(err);
//             } else {
//                 resolve(data)
//             }
//         })
//     })
// }




// // getText('./content/first.txt')
// // .then(result => console.log(result))
// // .catch(err => console.log(err))
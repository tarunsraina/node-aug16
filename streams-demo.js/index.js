

let fs = require('fs');
let data = 'hiii';

let readerStream = fs.createReadStream('sample.txt');
readerStream.setEncoding('utf8');

readerStream.on('data',(chunk)=>{
    data += chunk;
})

readerStream.on('end',()=>console.log(data))

readerStream.on('error',(err)=>console.log(err))

let writerStream = fs.createWriteStream('sample.txt')
let dataToWrite = "Writing this data to file";
writerStream.write(dataToWrite,'utf8');
writerStream.end();

writerStream.on('finish',()=>console.log("Write is completed successfully!"));

writerStream.on('error',()=>console.log("Something went wrong"));

let fs = require('fs');

// This is Asyncronous way of reading a file

fs.readFile('input.txt',(err,data)=>{
    if(err){
        console.log("Error :"+err);
    }

    console.log(data.toString());

})

// this is opening a file to read and write
console.log("Going to open file!");
fs.open('input.txt', 'r+', function(err, fd) {
   if (err) {
      return console.error(err);
   }
   console.log("File opened successfully!");     
});


console.log("Writing into a file");

fs.writeFile('sample.txt','Writing this',(err)=>{
    if(err){
        console.log("error: "+err);
    }
    
})

console.log("Data is written successfully!");

console.log("Lets read newly written data:");
fs.readFile('sample.txt',(err,data)=>{
    if(err){
        console.log("Error: "+err);
    }

    console.log(data.toString())
})
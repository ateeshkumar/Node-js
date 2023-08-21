const fs = require('fs');
// reading file
// fs.readFile('text.txt',(err,data)=>{
//     if(err){
//         console.log(err)
//     }
//     console.log(data);
//     console.log(data.toString());
// })

// writing file

// fs.writeFile('text.txt',"Ateesh Kumar",()=>{
//     console.log("file was written");
// });


// directries

// fs.mkdir('./assets',(err)=>{
//     if(err){
//         console.log(err);
//     }
//     console.log("Folder is Created");
// })

// deleting file

if(fs.existsSync('text.txt')){
    fs.unlink('text.txt',(err)=>{
        if(err){
            console.log(err);
        }
        console.log("File Deleted");
    })
}
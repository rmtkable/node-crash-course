const fs = require('fs');

//reading files
// fs.readFile('./docs/blog.txt', (err, data) => {
//     if(err) {
//         console.log(err);
//     }
//     console.log(data.toString());
// });

// console.log("last line");

//writing files

// fs.writeFile('./docs/blog.txt', 'hello class', () => {
//     console.log('file was written');
// });

// fs.writeFile('./docs/blog2.txt', 'hello class', () => {
//     console.log('file was written');
// });

//directories

if(!fs.existsSync('./assets')){
fs.mkdir('./assets', err => {
    if(err) {
        console.log(err);
    }
    console.log('folder was created');
});
} else {
    fs.rmdir('./assets', (err) => {
        if (err) {
            console.log(err)
        }
        console.log('folder deleted');
    });
}


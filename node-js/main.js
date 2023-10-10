const fileSysteme = require('./src/librairies/fileSysteme.js');

// fileSysteme.createDirectory('testindex');
// const content = `
//     <!DOCTYPE html>
//     <html lang="en">
//     <head>
//         <meta charset="UTF-8">
//         <meta name="viewport" content="width=device-width, initial-scale=1.0">
//         <title>Document</title>
//     </head>
//     <body>
        
//     </body>
//     </html>
// `;
// fileSysteme.createfile('testindex/index.html',content);

fileSysteme.removeFile('testindex/index.html');

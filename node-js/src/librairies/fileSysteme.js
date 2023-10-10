const fs =require('fs');
module.exports={
     createDirectory : (nom)=>{
        fs.mkdir(nom, (err)=>{
            if(err){
                console.log("marche pas");
            }
        })
    },

    removeDirectory :(nom) =>{
        fs.rmdirSync(nom);
    },

    createFile: (nom , contenue)=>{
        fs.appendFileSync(nom, contenue);
    },
    removeFile: (nom)=>{
        fs.unlinkSync(nom);
    },
}

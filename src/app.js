const fs = require("fs");
const {addMovie} = require ('./utils/index')

const app=()=>{

    let movieArray 
    
        try {
             movieArray= JSON.parse(fs.readFileSync('storage.json'))
        } catch (error) {
             movieArray=[]
            console.log (movieArray)
        }




    if (process.argv[2] === 'title' && process.argv[4] === 'actor'){
        // const stringyObj = JSON.stringify({title: process.argv[3], actor: process.argv})
        addMovie(movieArray, {title: process.argv[3], actor:process.argv[5]})
        // fs.writeFileSync('storage.txt', `title:${process.argv[3]}, actor: ${process.argv[5]}`);
    } else{
        console.log("i don't understand")
    }
}


app()


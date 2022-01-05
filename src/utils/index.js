const fs = require("fs");

const addMovie = (movieArray, movieObject) => {
    try {
        console.log(movieArray)
        console.log(movieObject)
        movieArray.push(movieObject)
        console.log(movieArray)
        const stringyObj = JSON.stringify(movieArray);
        fs.writeFileSync('./storage.json', stringyObj);
    } catch (error) {
        console.log(error);
    }
};

module.exports = {
    addMovie
};


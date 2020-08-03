module.exports.beBasic = () => "That's so fetch!"

//module.exports is a js object that contains all code we want to export.
// for import in other files (like our entry point index.js). here beBasic is returning That's so fetch.

module.exports.count = () => {
    for(let i = 0; i <= 10; i++){
        console.log(i)
    }
}

module.exports.code = () => "jkljkld44"
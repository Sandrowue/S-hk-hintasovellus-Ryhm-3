const fs = require('fs');

/*const timestamp = new Date();
const isoTimeStamp = timestamp.toISOString();
let operation = 'Data Fetch operation';
let status = 'processes successfully';
let entry = operation + ' ' + status + ' @ ' + isoTimeStamp + '\n'

console.log(entry);

fs.appendFile('dataOperation.log', entry, (err) => {
    if (err) {
        console.log(err);
    }
})*/

const add2log = (entry, fileName) => {
    const isoTimeStamp = new Date().toISOString();
    const logRow = entry + '@' + isoTimeStamp + '\n'
    fs.appendFile(fileName, logRow, (err) => {
        if (err) {
            console.log(err);
        }
    })
}

add2log('This is an informational message', 'dataOperation.log')

module.exports = {
    add2log
}




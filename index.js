var osascript = require('node-osascript');

let toRight = () => osascript.execute('tell application "System Events" to keystroke (ASCII character 29)', {}, function(err, result, raw){
    if (err) return console.error(err);
    // console.log(result, raw);
});

(async function main() {
    try {
        await toRight();
    } catch (e) {
        console.log('Error');
    };
})();

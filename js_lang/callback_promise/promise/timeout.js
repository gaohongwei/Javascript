function doStuff() {/*...*/}
setTimeout(doStuff, 300);


timeout(300).then(doStuff)
function timeout(delay) {
    return new Promise(function(resolve, reject) {
        setTimeout(resolve, delay);
    });
}

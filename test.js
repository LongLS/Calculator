/*
setTimeout(function() {
    console.log("Hello");
    setTimeout(function() {
        console.log("World");
        setTimeout(function() {
            console.log("I'm ready!");
        }, 3000)
    }, 3000)
}, 5000)
*/

/*function resolveAfter2Seconds() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('resolved');
        }, 2000);
    });
}

async function asyncCall() {
    console.log('calling');
    var result = await resolveAfter2Seconds();
    console.log(result);
    // expected output: "resolved"
}

asyncCall();*/

function wait(milisec) {
    return new  Promise(function (resolve, reject) {
        setTimeout(reject, milisec);
    });
    //delay milisec
}

/*function writelog(conten) {
    return new Promise(function (resolve, rejrct) {
        console.log(conten);
    });
}*/
console.log("Hello");
wait(5000).then(function () {
    console.log("World");
    return wait(3000);
}).then(function () {
    console.log("I'm");
    return wait(2000);
}).then(function () {
    console.log("Ready");
});

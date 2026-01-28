const myPromise = new Promise((resolve, reject) => {
    let age = 5;

    if (age > 18) {
        resolve("Eligible for vote");
    } else {
        reject("Not eligible for vote");
    }
});

myPromise
    .then((msg) => {
        console.log(msg);
    })
    .catch((err) => {
        console.log(err);
    });

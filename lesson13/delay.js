function Delay(t) {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            resolve({
                time: t
            });
        }, t * 1000);

        setTimeout(function() {
            reject({
                message: 'promise rejected'
            });
        }, 2000);
    });
}

console.time('Create promise');
const after1 = new Delay(1),
    after5 = new Delay(5);

console.log(after1);
after1.then(function(data) {
    console.log('Promise done!', data);
    console.timeEnd('Create promise');
});

after5.then(
    function(data) {
        console.log('after5 done', data);
    },
    // function(error) {
    //     console.log('after5 error', error);
    // }
).catch(
    function(error) {
        console.log('after5 error', error);
    }
);

console.log(5, after5);

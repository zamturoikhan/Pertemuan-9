const a = 'a';
const promiseKu = new Promise((resolve, reject) => {
    if ( === 'a') {
        resolve('Of Course');
    } else {
        reject('coba lagi');
    }
});

promiseKu.then(res => {
  console.log(res);
}).catch(err => {
    console.log(err);
});
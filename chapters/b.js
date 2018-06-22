const promiseArray = [
  new Promise((resolve, reject) => setTimeout(() => resolve(1), 1000)).catch(e => console.log(e)), // 1
  new Promise((resolve, reject) => setTimeout(() => reject(2), 3000)).catch(e => e), // 2
  new Promise((resolve, reject) => setTimeout(() => reject(3), 1000)).catch(e => e)  // 3
];

Promise.all(promiseArray).then( 
( data ) => console.log( data ),
( err ) => console.log( err ) ); // 3
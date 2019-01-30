console.log('Starting app' + new Date() );

setTimeout(()=>{
    console.log('inside callback function' + new Date().getTime());
}, 2000);

setTimeout(()=>{
    console.log('second callback function' + process.hrtime()[0]/3600);
}, 0);

console.log('Finishing up'+ new Date());
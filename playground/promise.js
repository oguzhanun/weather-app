const somePromise = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        //resolve('Hey, It worked...')
        reject('Hey, It didnt worked...')
    }, 2500);
} );

somePromise.then((message) => {
    console.log('success: ' + message);
}, (message) =>{
    console.log('error: ' + message);
})

const asyncAdd = (a, b) => {
    return new Promise((resolve, reject) => {
        if(typeof a === 'number' && typeof b == 'number'){
            resolve(a + b);
        } 
        else {
            reject('Unable to add...');
        }
    })
};


// Burada ikinci asyncAdd komutu ile birlikte hatalar tüm then komutlarında yakalandığı için herhangi bir basamakta hata oluştuğunda
// nasıl olsa o hata yakalandı herşey yolunda diyerek diyer bağlı fonksiyon çağırısı da yerine getiriliyor. bunu önlemek için then 
// fonksiyonu içinde sadece resolve ın dönüşü işenmeli hatalar için en sonda catch fonksiyonu kullanılmalı...
asyncAdd(5,'5').then((result) => {
    console.log('the result is : ' + result);
    return asyncAdd(result, 33);
//}, (errorMessage) => {
    //console.log('error :' + errorMessage);
}).then((result) => {
    console.log('the second asyncAdd result is : ' + result);
}//, (errorMessage) => {
//    console.log('the second asyncAdds errorMessage : ' + errorMessage);
//}
).catch((message) => {
    console.log(message);
})
const dummyFetch = (forectReject = false) => {
    return new Promise( (resolve, reject) => {
        setTimeout(() => {
            if(forectReject){
                reject();
            }
            resolve({auth: true, name: 'zamurd'});
        },3000);
    } );
}
export {dummyFetch};
let getTitle = new Promise((resolve,reject) => {
    let isTitleReceived=true;
    if(isTitleReceived){
        resolve('Print the title');
    }else{
        reject('Title no printed');
    }
});


getTitle.then((resolvedText) => {
    console.log(resolvedText);
}).catch((rejectText) => {
    console.log(rejectText);
});
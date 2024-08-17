let typestring = 'werewfdwf fdsfdsf sdfsdfsdf';

let stringtoarray = typestring.split('').filter(cl => cl !== ' ');

let letterCountinginObject: {} = stringtoarray.reduce((acc, cv) => {
    if(!acc[cv]){
        acc[cv] = 1
    }

    else{
        acc[cv]++;
    }
    return acc;
}, <any>{})

console.log(letterCountinginObject);

async function getIPFunction(){
try {

    const response = await fetch('https://api.ipify.org?format=json');
    // console.log(response.text());

    const data = await response.text();
    console.log(data);
    
    
} catch (error) {
    console.log('Error caught ', error);
}    
}

getIPFunction();
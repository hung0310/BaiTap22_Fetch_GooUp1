fetchData();

async function fetchData() {
    try {
        const response = await fetch('https://dummyjson.com/products');
         
        const data = await response.json();
        console.log(data);
    } catch(error) {
        console.log(error);
    }
}
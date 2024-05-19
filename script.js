// ------GET---------
fetch('https://dummyjson.com/products')
    .then(res => res.json())
    .then(console.log)

// -------POST-------
fetch('https://dummyjson.com/products/add', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json'},
    body: JSON.stringify({
        title: 'Hello World',
        description: 'Hello World',
        price: 10,
        discountPercentage: 10,
    })
})
.then(res => res.json())
.then(console.log);

// --------PUT-------
fetch('https://dummyjson.com/products/1', {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json'},
    body: JSON.stringify({
        title: 'Hello World'
    })
})
.then(res => res.json())
.then(console.log);

// -------DELETE------
fetch('https://dummyjson.com/products/1', {
    method: 'DELETE',
})
.then(res => res.json())
.then(console.log);

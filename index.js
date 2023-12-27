// Async Fetch API with POST in JavaScript
fetch('https://api.example.com/post', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({ key: 'value' }),
})
    .then(response => response.json())
    .then(data => {
        // ... (handle fetched data)
    })
    .catch(error => {
        // ... (handle errors)
    });

function fetchData() {
    fetch('/api/data')
        .then(response => response.json())
        .then(data => {
            document.getElementById('data').textContent = data.message;
        })
        .catch(error => {
            console.error('There was an error fetching data:', error);
        });
}

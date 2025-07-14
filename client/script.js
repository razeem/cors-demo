// client/script.js
document.getElementById('fetchData').addEventListener('click', () => {
  fetch('http://localhost:3001/api/data')
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      document.getElementById('response').textContent = JSON.stringify(data, null, 2);
    })
    .catch(error => {
      document.getElementById('response').textContent = 'Error: ' + error.message;
    });
});

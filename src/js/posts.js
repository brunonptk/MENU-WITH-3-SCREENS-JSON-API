const showData = (result) => {
    
    for(const campo in result) {                
        document.querySelector("#tbody").innerHTML += '<tr><th scope="row">' + result[campo].userId + '</th><td>' + result[campo].id + '</td><td>' + result[campo].title + '</td><td>' + result[campo].body + '</td></tr>'; 
    }
}

fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json()
        .then(data => showData(data)))
    .catch(e => console.log('Error: ' + e.message))
let filtro = 0;

const showData = (result) => { 
    console.log(filtro)

        //todos
        if(filtro == 0) {
            for(const campo in result) {                 
                document.querySelector("#tbody").innerHTML += '<tr><th scope="row">' + result[campo].userId + '</th><td>' + result[campo].id + '</td><td>' + result[campo].title + '</td><td>' + (result[campo].completed ? 'sim' : 'não') + '</td></tr>';     
            }
        }    

        //apenas completos
        if(filtro == 1) {
            for(const campo in result) {   
                if(result[campo].completed) 
                    document.querySelector("#tbody").innerHTML += '<tr><th scope="row">' + result[campo].userId + '</th><td>' + result[campo].id + '</td><td>' + result[campo].title + '</td><td>' + (result[campo].completed ? 'sim' : 'não') + '</td></tr>';     
            }    
        }    
    
        //apenas não completos
        if(filtro == 2) {
            for(const campo in result) {   
                if(!result[campo].completed) 
                    document.querySelector("#tbody").innerHTML += '<tr><th scope="row">' + result[campo].userId + '</th><td>' + result[campo].id + '</td><td>' + result[campo].title + '</td><td>' + (result[campo].completed ? 'sim' : 'não') + '</td></tr>';     
            }
        }    
}

get();

//filtro
const completed = document.querySelector("#completed");

completed.addEventListener("change", (e) => {    
    document.querySelector("#tbody").innerHTML = "";
    filtro = completed.value;
    get();
})

function get() {    
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then(response => response.json()
        .then(data => showData(data)))
    .catch(e => console.log('Error: ' + e.message))
}
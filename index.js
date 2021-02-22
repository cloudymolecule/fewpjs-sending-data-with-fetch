// Add your code here
function submitData(name, email) {
    let formData = {
        name: name,
        email: email
    }

    let configObj = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(formData)
    };

    return fetch('http://localhost:3000/users', configObj)
        .then(function(response) {
            return response.json()
        })
        .then(function(object) {
            const p = document.createElement('p')
            p.innerHTML = object.id
            document.body.appendChild(p)
        })
        .catch(function(error) {
            const p2 = document.createElement('p')
            p2.innerHTML = error.message
            document.body.appendChild(p2)
        })
}


function submitData(name, email) {
    return fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
        },
        body: JSON.stringify({
            name: name,
            email: email,
        })
    })
        .then(function (response) {
            return response.json();
        })
        .then(function (object) {
            const id = object.id;
            const body = document.querySelector("body");
            const p = document.createElement("p");
            p.textContent = `New ID: ${id}`;
            body.appendChild(p);
        })
        .catch(function (error) {
            const body = document.querySelector("body");
            const p = document.createElement("p");
            p.textContent = `Error: ${error.message}`;
            body.appendChild(p);
        });
}
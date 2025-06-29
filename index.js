function submitData(name, email) {
    const userData = {
      name: name,
      email: email
    };
  
    const configObj = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(userData)
    };
  
    return fetch("http://localhost:3000/users", configObj)
      .then((response) => response.json())
      .then((data) => {
        // Append the id to the body
        const p = document.createElement("p");
        p.textContent = `ID: ${data.id}`;
        document.body.appendChild(p);
      })
      .catch((error) => {
        const p = document.createElement("p");
        p.textContent = error.message;
        document.body.appendChild(p);
      });
  }
  

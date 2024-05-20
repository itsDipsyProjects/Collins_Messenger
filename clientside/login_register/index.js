async function registerRequest(registerObj){

    let requestObj = {
        method: "POST", 
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(registerObj)
    }
    let response = await fetch("./serverside/server.js", requestObj);
    let data = await response.text();
    
    console.log(data);
}

registerRequest({test1: "test1"})


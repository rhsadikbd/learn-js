document.getElementById('btn').addEventListener('click', makeRequest);


// Using Promise Then
/*
function makeRequest () {
    console.log("Button Clicked");
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => {
        if(!res.ok){
            throw new Error("Error fatching data");
        }
       return res.json()
    })
    .then((data) => {
        console.log(data);
    })
    .catch((error) => {console.log(error)})
}
    */

// Using Async await
   async function makeRequest () {
    try{
        const allData = document.getElementById("allData");
        console.log("Button Clicked");
        const res = await fetch('https://jsonplaceholder.typicode.com/posts');
        if(!res.ok){
            throw Error(res.statusText)
        }
        const data = await res.json()
        console.log(data);
        data.forEach(element => {
            allData.innerHTML += `
                <h5>ID: ${element.id}</h5>
                <h5>Title: ${element.title}</h5>
                <p>Body: ${element.body}</p>
                <hr>
            `
        })
    } catch(error) {
        console.log("Error Fatching data");
    }
   }
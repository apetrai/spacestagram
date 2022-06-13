const url = "https://api.nasa.gov/planetary/apod?api_key=MjJr56MQueWTzIBITJgknidIEvd4maZ5MXMl996e"

fetch(url, {
    method: 'GET',
    redirect: 'follow'
}).then((res) => {
    return res.json()
}).then((data) => {
    document.getElementById("cards").innerHTML = `
    <div id="card">
        <h1 class="title">${data.title}</h1>
        <p class="date">${data.date}</p>

        <img id="first_result" class="images"
            src="${data.url}" alt="img">
        
        <p class="copyright">Copyright: ${data.copyright}</p>
        <p class="description">Description: ${data.explanation}</p>
        <button id="like-button">Like</button>
    </div>
`
    const scriptTag = document.createElement("script")
    scriptTag.innerHTML = `
        alert('yeah')
        initLikeBtn(${data.date})
    `
    document.body.appendChild(scriptTag)

}).catch((err) => {
    console.error(err);
})

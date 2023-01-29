var msgContainer = document.createDocumentFragment();

async function getAPIChuckNorrisRandom(){

        await fetch('https://api.chucknorris.io/jokes/random',{ method: 'GET',})
        .then(response => response.json())
        .then(success  => joke = success.value)
        
        document.getElementById("jokeRandom").innerHTML = joke
}

async function getAPIChunkNorrisCategory(){

    var e = document.getElementById("categorySelector").value;
    await fetch('https://api.chucknorris.io/jokes/random?category='+e,{ method: 'GET',})
    .then(response => response.json())
    .then(success  => joke = success.value)

    document.getElementById("jokeRandomCat").innerHTML = joke
}

async function getAPIChuckNorrisSearch(){
    try {

    var e = document.getElementById("search").value;
    console.log(e.length)

    if (e.length === 0){
        var joke = msgContainer.appendChild(document.createElement("li"));
        joke.innerHTML = "No input in search field";
        document.getElementById("jokeSearch").replaceChildren(msgContainer);
        return
    }

    var joke = await  fetch('https://api.chucknorris.io/jokes/search?query='+e,{ method: 'GET',}) 
    .then(response => response.json())

joke.result.forEach(element => {
    var joke = msgContainer.appendChild(document.createElement("li"));
    joke.innerHTML = element.value
});

if (joke.total === 0){
    var joke = msgContainer.appendChild(document.createElement("li"));
    joke.innerHTML = "Not everything is funny... no jokes for this word, sorry.";
}
document.getElementById("jokeSearch").replaceChildren(msgContainer);
    } catch (error) {console.log(error)}
}
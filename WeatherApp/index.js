const url = "https://api.weatherapi.com/v1/current.json?key=79bed1b0f5694a24ad975755211510&q=Beijing"

fetch(url)
  .then(res => res.json())
  .then(data => {
    const current = data.current.cloud
    console.log(current)
    charactersDiv = document.querySelector("#temp");

    let characterElement = document.createElement('p');
    characterElement.innerText = `Character Name: ${current}`;
    console.log(characterElement)
    charactersDiv.append(characterElement);
    // do something with data
    // let container = document.querySelector('#temp');
    // container.innerHTML = characterElement;
  })
  .catch(err => {
    // error catching
    console.log(err)
  })

  // let content = `<p>Character Name: ${current.last_updated} </p>`;

// fetch(url)
//   .then(response => response.json())
//   .then(data => console.log(data.current));

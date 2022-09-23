document.querySelector('button').addEventListener('click',getFetch)

function getFetch(){
  
  const url = 'https://api.nasa.gov/planetary/apod?api_key=vIn5A36tyJL0QLmQG6ahSCP89ei7GYOtTa1XGD3U'
  
  fetch(url) 
    .then(res => res.json())
    .then(data => {
         console.log(data)
      document.querySelector('img').src = data.hdurl
      document.querySelector('h2').innerText = data.title
      document.querySelector('p').innerText = data.explanation
    })
    .catch(err => {
          console.log(`error ${err}`)
    })
}
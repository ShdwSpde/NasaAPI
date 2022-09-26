document.querySelector('button').addEventListener('click',getFetch)

function getFetch(){
  const choice = document.querySelector('input').value
  const url = `https://api.nasa.gov/planetary/apod?api_key=vIn5A36tyJL0QLmQG6ahSCP89ei7GYOtTa1XGD3U&date=${choice}`
  
  fetch(url) 
    .then(res => res.json())
    .then(data => {
         console.log(data)
      if (data.media_type === 'image'){
        document.querySelector('img').src = data.hdurl
      } else if (data.media_type === 'video'){
        document.querySelector('iframe').src = data.url
      }
      document.querySelector('h2').innerText = data.title
      document.querySelector('p').innerText = data.explanation
    })
    .catch(err => {
          console.log(`error ${err}`)
    })
}
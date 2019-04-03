var apiKey = config.apiKey;
var userID = config.userID;

const container = document.getElementById('behanceContainer')

var perPage = 4;
var urlAPI = 'http://www.behance.net/v2/users/'+ userID +'/projects?callback=?&api_key=' + apiKey;
var dateOptions = { year:"numeric", month:"short", day:"numeric"};



function err(error){
  console.log(error)
  const errorMessage = document.create('errorMsg')
  errorMessage.textContent = 'Error'
  container.appendChild(errorMessage)
}

$.ajax({
  url: urlAPI,
  dataType: "jsonp",
  success: function(data){
    $.each(data.projects, function(i, project){
      const card = document.createElement('div')
      card.setAttribute('class', 'behanceCard')

      const cardInfo = document.createElement('div')
      cardInfo.setAttribute('class', 'behanceCardInfo')

      const spanLink = document.createElement('span')
      const postLink = document.createElement('a')
      postLink.href = project.url

      const coverImg = document.createElement('img')
      coverImg.src = project.covers["404"]
      //
      const h1 = document.createElement('h1')
      h1.textContent = project.name


      var newDate = new Date(project.published_on*1000);
      const p = document.createElement('p')
      var dateFormat = newDate.toLocaleDateString("en-US", dateOptions);
      p.textContent = dateFormat

      container.appendChild(card)
      card.appendChild(coverImg)
      card.appendChild(cardInfo)
      spanLink.appendChild(postLink)
      card.appendChild(spanLink)
      cardInfo.appendChild(h1)
      cardInfo.appendChild(p)
    })
  },
  error: "err"
});
// Open a new connection, using the GET request on the URL endpoint
// request.open('GET', urlAPI, true)
//
// request.onload = function () {
//   // Begin accessing JSON data here
//   var data = JSON.parse(this.response)
//   if (request.status >= 200 && request.status < 400) {
//     data.forEach(projects => {
//       console.log(project.name)
//       // const card = document.createElement('div')
//       // card.setAttribute('class', 'card')
//       //
//       // const h1 = document.createElement('h1')
//       // h1.textContent = movie.title
//       //
//       // const p = document.createElement('p')
//       // movie.description = movie.description.substring(0,300)
//       // p.textContent = `${movie.description}...`
//       //
//       // container.appendChild(card)
//       // card.appendChild(h1)
//       // card.appendChild(p)
//
//     })
//   } else {
//     const errorMessage = document.create('errorMsg')
//     errorMessage.textContent = 'Error'
//     app.appendChild(errorMessage)
//   }
//
// }
//
//
// // Send request
// request.send()

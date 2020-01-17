// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.


axios.get('https://lambda-times-backend.herokuapp.com/articles').then(response => {
    console.log(response.data.articles)
    const articleInfo = response.data.articles;
    Object.keys(articleInfo).forEach(topic => {
        articleInfo[topic].forEach(article => {
            newCards.append(createCards(article))
        })
    })
    console.log(Object.values(articleInfo))
})
    .catch(error => {
        console.log('This data was not returned', error);
    })



  const newCards = document.querySelector('.cards-container');

  function createCards(object) {
  
      const card = document.createElement('div');
      const header = document.createElement('div');
      const authorDiv = document.createElement('div');
      const imageDiv = document.createElement('div');
      const image = document.createElement('img');
      const span = document.createElement('span');

      card.classList.add('card');      
      header.classList.add('headline');
      authorDiv.classList.add('author');
      imageDiv.classList.add('img-container');
      
      header.textContent = object.headline;
      span.textContent = `By: ${object.authorName}`;

      image.src = object.authorPhoto;

      card.appendChild(header)  
      card.appendChild(authorDiv);
      authorDiv.appendChild(imageDiv);
      imageDiv.appendChild(image);
      authorDiv.appendChild(span);
  
      return card
  }
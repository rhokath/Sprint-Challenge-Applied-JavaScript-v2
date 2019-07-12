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

const cardsContainer = document.querySelector('.cards-container')
axios.get("https://lambda-times-backend.herokuapp.com/articles")
.then(data => {
    console.log('response', data)
    // console.log(data.data.articles)
    let articles = data.data.articles
    for(topic in articles){
        articles[topic].forEach(article => {
            cardsContainer.appendChild(createArticle(article))
        })
    }
    // let bootstrap = data.data.articles.bootstrap
    // let javascript = data.data.articles.javascript
    // let jquery = data.data.articles.jquery
    // let node = data.data.articles.node
    // let technology = data.data.articles.technology
    // // const cardsContainer = document.querySelector('.cards-container')
    // console.log(bootstrap)
    // bootstrap.forEach(item => {
    //     console.log(item)
    //     const element = createArticle(item.headline, item.authorPhoto, item.authorName)
    //     cardsContainer.appendChild(element)

    // })
    // javascript.forEach(item => {
    //     console.log('js', item)
    //     const element = createArticle(item.headline, item.authorPhoto, item.authorName)
    //     cardsContainer.appendChild(element)

    // })
    // jquery.forEach(item => {
    //     console.log('jq', item)
    //     const element = createArticle(item.headline, item.authorPhoto, item.authorName)
    //     cardsContainer.appendChild(element)

    // })
    // node.forEach(item => {
    //     console.log('node', item)
    //     const element = createArticle(item.headline, item.authorPhoto, item.authorName)
    //     cardsContainer.appendChild(element)

    // })
    // technology.forEach(item => {
    //     console.log('tech', item)
    //     const element = createArticle(item.headline, item.authorPhoto, item.authorName)
    //     cardsContainer.appendChild(element)

    // })


})
.catch(error => {
    console.log("there was an error getting this api", error)
})

function createArticle(obj){
    // create elements
    const card = document.createElement('div')
    const headline = document.createElement('div')
    const authorDiv = document.createElement('div')
    const imgContainer = document.createElement('div')
    const img = document.createElement('img')
    const authorName = document.createElement('span')
    // set styles
    card.classList.add('card')
    headline.classList.add('headline')
    authorDiv.classList.add('author')
    imgContainer.classList.add('img-container')
    // set content 
    headline.textContent = obj.headline
    img.src = obj.authorPhoto
    authorName.textContent = `By ${obj.authorName}`
    //set up structure
    card.appendChild(headline)
    card.appendChild(authorDiv)
    authorDiv.appendChild(imgContainer)
    imgContainer.appendChild(img)
    authorDiv.appendChild(authorName)
    return card;
}
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
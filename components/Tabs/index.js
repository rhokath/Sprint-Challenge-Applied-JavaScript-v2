// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

axios.get("https://lambda-times-backend.herokuapp.com/topics")
.then(data => {
    console.log('response', data)
    console.log(data.data.topics)
    const topics = data.data.topics
    const tabs = document.querySelector('.topics')
    topics.forEach(topic => {
        const tabDiv = document.createElement('div')
        tabDiv.classList.add('tab')
        tabDiv.textContent = topic
        tabs.appendChild(tabDiv)
        
    });
})
.catch(error => {
    console.log("the api isn't working", error)
})
// const tabs = document.querySelector('.tabs')
// console.log(tabs)
// tabs.appendChild()
// function createTabs(){
//     const tabDiv = document.createElement('div')
//     tabDiv.classList.add('tab')
//     tabDiv.textContent = topic
// }
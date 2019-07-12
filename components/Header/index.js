// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .headerContainer component
let headerContainer = document.querySelector('.header-container')
console.log(headerContainer)
headerContainer.appendChild(Header())

function Header() {
    // Create elements
    const headerDiv = document.createElement('div')
    const dateSpan = document.createElement('span')
    const title = document.createElement('h1')
    const tempSpan = document.createElement('span')

    // Set styles
    headerDiv.classList.add('header')
    dateSpan.classList.add('date')
    tempSpan.classList.add('temp')

    // Set content
    dateSpan.textContent = "SMARCH 28, 2019"
    title.textContent = "Lambda Times"
    tempSpan.textContent = "98°"

    // Put it all together
    headerDiv.appendChild(dateSpan)
    headerDiv.appendChild(title)
    headerDiv.appendChild(tempSpan)

    return headerDiv;

}

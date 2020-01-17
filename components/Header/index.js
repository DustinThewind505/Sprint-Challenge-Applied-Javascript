// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component
let headerContainer = document.querySelector('.header-container');
function Header() {

    let docHeader = document.createElement('div');
    let date = document.createElement('span');
    let header = document.createElement('h1');
    let temp = document.createElement('span');

    docHeader.classList.add('header');
    date.classList.add('date');
    temp.classList.add('temp');

    date.textContent = 'SMARCH 28, 2019';
    header.textContent = 'Lambda Times';
    temp.textContent = '98°';

    docHeader.append(date);
    docHeader.append(header);
    docHeader.append(temp);

    return docHeader;
    
}

headerContainer.append(Header());
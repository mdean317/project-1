/*-------------------------------- Constants --------------------------------*/
const bookCoversArray = [
    {path: './Korean.png', language: 'Korean'}, 
    {path: './Hebrew.png', language: 'Hebrew'}, 
    {path: './Russian.png', language: 'Russian'}, 
    {path: './Vietnamese.png', language: 'Vietnamese'}];

/*-------------------------------- Variables --------------------------------*/
let currentHat = "";
let currentBookCover = 0;
let ytPlayer;


/*------------------------ Cached Element References ------------------------*/

/* Dropdown elements */
const dropDownButton = document.querySelector('.dropbtn');
const dropDownContainer = document.querySelector('.dropdown-content');
const dropDownSoftwareEng = document.querySelector('#software-engineer');
const dropDownSpeaker = document.querySelector('#speaker');
const dropDownAuthor = document.querySelector('#author');

/* Main section elements */ 
const mainContainer = document.querySelector('.container');
const mainTitle = document.querySelector('#mainTitle');
const resumeDisplay = document.querySelector('#resume-display');
const speakerReel = document.querySelector('#speaker-reel');
const bookCover = document.querySelector('#bookCover');

// Init main area
mainContainer.innerHTML = "";


/* Aside section elements */ 
const asideContainer = document.querySelector('.aside-container');
const asideProg = document.querySelector('#prog-aside');
const asideAuthor = document.querySelector('#author-aside');

const accordionArrowLeft = document.querySelector('#left-arrow');
const accordionArrowRight = document.querySelector('#right-arrow');
const showingBookCover = document.querySelector('#showingBookCover');
const bookCoverLang = document.querySelector('#language');

// Init aside area
asideContainer.innerHTML = "";

/* Footer elements */ 

/* Modal Buttons */
const progModalBtn = document.querySelector('#progModalBtn');
const speakModalBtn = document.querySelector('#speakModalBtn');
const writeModalBtn = document.querySelector('#writeModalBtn');

/* Modals */
const progModal = document.querySelector('#progModal');
const speakModal = document.querySelector('#speakModal');
const writeModal = document.querySelector('#writeModal');

/* Modal close buttons */ 
const progModalCloseBtn = document.querySelector('#progModalCloseBtn');
const speakModalCloseBtn = document.querySelector('#speakModalCloseBtn');
const writeModalCloseBtn = document.querySelector('#writeModalCloseBtn');

/*----------------------------- Event Listeners -----------------------------*/

// Open Dropdown list
dropDownButton.addEventListener('click', (event) => {

    // Shows dropdown options
    dropDownContainer.classList.add("show");
    
})

// Upon selecting Software Engineer... 
dropDownSoftwareEng.addEventListener('click', (event) => {

    // Remove all content from main and aside areas
    mainContainer.innerHTML = "";
    asideContainer.innerHTML = "";

    // Checks current 'profession', and updates dropbpox.
    if (currentHat === dropDownSpeaker.id) {
        
        // Adjust dropdown
        dropDownContainer.insertBefore(dropDownSpeaker, dropDownAuthor);

        // Clears animation
        speakerReel.classList.remove('prog-in');

    }
    else if (currentHat === dropDownAuthor.id) {
        
        // Adjust dropdown
        dropDownContainer.appendChild(dropDownAuthor);
        
        // Clear animation
        speakerReel.classList.remove('prog-in');
    }

    // Call adjustment fuction
    changeToSoftwareEngineer();
    
})

// Upon selecting Speaker... 
dropDownSpeaker.addEventListener('click', (event) => {

    // Remove all content from main and aside areas
    mainContainer.innerHTML = "";
    asideContainer.innerHTML = "";

    // Checks current 'profession', and updates dropbpox.
    if (currentHat === dropDownSoftwareEng.id) {

        // Adjust dropdown
        dropDownContainer.insertBefore(dropDownSoftwareEng, dropDownAuthor);
        
        // Clear animation
        resumeDisplay.classList.remove('prog-in');

    }
    else if (currentHat === dropDownAuthor.id) {
        
        // Adjust dropdown
        dropDownContainer.appendChild(dropDownAuthor);

        // Clear animation
        bookCover.classList.remove('prog-in');
    }

    // Call adjustment fuction
    changeToSpeaker();
    
})

// Upon selecting Author... 
dropDownAuthor.addEventListener('click', (event) => {

    // Remove all content from main and aside areas
    mainContainer.innerHTML = "";
    asideContainer.innerHTML = "";

    // Checks current 'profession', and updates dropbpox.
    if (currentHat === dropDownSoftwareEng.id) {

        // Adjust dropdown
        dropDownContainer.insertBefore(dropDownSoftwareEng, dropDownSpeaker);

        // Clear animation
        resumeDisplay.classList.remove('prog-in');
    }
    else if (currentHat === dropDownSpeaker.id) {

        // Adjust dropdown
        dropDownContainer.appendChild(dropDownSpeaker);

        // Clear animation
        speakerReel.classList.remove('prog-in');
    }

    // Call adjustment fuction
    changeToAuthor();
    
})

// Modal button event listeners - just show the modals. 
progModalBtn.addEventListener('click', (event) => {

    // Show relavent modal, close other ones. 
    progModal.classList.add("show");
    speakModal.classList.remove("show");
    writeModal.classList.remove("show");
    
})

speakModalBtn.addEventListener('click', (event) => {

    // Show relavent modal, close other ones. 
    progModal.classList.remove("show");
    speakModal.classList.add("show");
    writeModal.classList.remove("show");
    
})

writeModalBtn.addEventListener('click', (event) => {

    // Show relavent modal, close other ones. 
    progModal.classList.remove("show");
    speakModal.classList.remove("show");
    writeModal.classList.add("show");
    
})

// Modal close button event listeners - just hide the modals. 
progModalCloseBtn.addEventListener('click', (event) => {

    progModal.classList.remove("show");
    speakModal.classList.remove("show");
    writeModal.classList.remove("show");
    
})

speakModalCloseBtn.addEventListener('click', (event) => {

    progModal.classList.remove("show");
    speakModal.classList.remove("show");
    writeModal.classList.remove("show");
    
})

writeModalCloseBtn.addEventListener('click', (event) => {

    progModal.classList.remove("show");
    speakModal.classList.remove("show");
    writeModal.classList.remove("show");
    
})

// Book cover arrow event listeners
accordionArrowLeft.addEventListener('click', (event) => {

    // Make sure we are not on the first book cover
    if (currentBookCover > 0) {
        
        // Adjust position index
        currentBookCover = currentBookCover - 1;

        // Update cover shown
        showingBookCover.setAttribute("src", bookCoversArray[currentBookCover].path)

        // Update text shown
        bookCoverLang.textContent = bookCoversArray[currentBookCover].language;
    }
    
})

accordionArrowRight.addEventListener('click', (event) => {

    // Make sure we are not on the last book cover
    if (currentBookCover < bookCoversArray.length - 1) {

        // Adjust position index
        currentBookCover = currentBookCover + 1;

        // Update cover shown
        showingBookCover.setAttribute("src", bookCoversArray[currentBookCover].path)

        // Update text shown
        bookCoverLang.textContent = bookCoversArray[currentBookCover].language;
    }
})

/*-------------------------------- Functions --------------------------------*/
const changeToSoftwareEngineer = () => {
    
    // Add element to main container
    mainContainer.appendChild(resumeDisplay)

    // Activate main content transition
    resumeDisplay.classList.add('prog-in');

    // Show aside content
    asideContainer.appendChild(asideProg);

    // Adjust dropbox
    dropDownButton.textContent = 'Software Engineer';
    dropDownSoftwareEng.parentNode.removeChild(dropDownSoftwareEng);
    dropDownContainer.classList.remove("show");

    // Adjust main content title
    mainTitle.textContent = "Past experience in tech:"

    // Adjust global profession variable 
    currentHat = dropDownSoftwareEng.id;

}

const changeToSpeaker = () => {

    
    // Add element to main container
    mainContainer.appendChild(speakerReel);

    // Activate main content transition
    speakerReel.classList.add('prog-in');

    // Adjust main content title
    mainTitle.textContent = "Take a look at my speaker reel!" 

    // Adjust dropbox
    dropDownButton.textContent = 'Speaker';
    dropDownSpeaker.parentNode.removeChild(dropDownSpeaker);
    dropDownContainer.classList.remove("show");

    // Adjust global profession variable 
    currentHat = currentHat = dropDownSpeaker.id;

}

const changeToAuthor = () => {

    // Add element to main container
    mainContainer.appendChild(bookCover);

    // Activate main content transition
    bookCover.classList.add('prog-in');


    // Show aside content
    asideContainer.appendChild(asideAuthor);

    // Adjust main content title
    mainTitle.textContent = "Buy my #1 best-seller, Pixar Storytelling!" 

    // Adjust dropbox
    dropDownButton.textContent = 'Author';
    dropDownAuthor.parentNode.removeChild(dropDownAuthor);
    dropDownContainer.classList.remove("show");

    // Adjust global profession variable 
    currentHat = dropDownAuthor.id;
}

function onYouTubeIframeAPIReady() {
    ytPlayer = new YT.Player('', {
        playerVars: {
            'autoplay': 1,
            'controls': 1
        },
    });
}
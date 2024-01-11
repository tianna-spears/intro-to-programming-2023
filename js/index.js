// alert('Welcome to my Webpage!') // Cute welcome alert.

// Insert Copyright Text in Footer (Lesson 4.2)

const today= new Date(); // Create a new date object and store it in a variable named today
const fullName= 'by Tianna Spears'; // Create name variable

const thisYear= today.getFullYear(); // Retrieve the current year from your date object and store it in a variable named thisYear

const footer= document.querySelector('footer'); // Using "DOM Selection", select the <footer> element from the DOM and store it in a variable named footer

const copyright= document.createElement('p'); // Create a new paragraph (p) element and store it in a variable named copyright
copyright.innerHTML = 'Copyright © ' + fullName + ' ' + thisYear; // Set the inner HTML of your copyright element to display your name and the current year

footer.appendChild(copyright); // Using "DOM Manipulation", append the copyright element to the footer

console.log(copyright); // it works!!!

// Lesson 4.2 Homework (Create List of Skills)
// List your technical skills by creating an Array of String values and store it in a variable named skills
// * changed to create an array of experiences and stored in variable named experience

const experiences = ['Programming Bootcamp at Code The Dream ( Sep. 2023 - Current )',
'Front-End Engineer Career Path at Codecademy ( Jul. 2023 - Current )',
'Learn JavaScript, Codecademy Certificate ( Oct. 2023 ) - 25 hours'];

const experienceSection= document.getElementById('experienceList'); // Using "DOM Selection", select the #skills section by id and store it in a variable named skillsSection

const experienceList= experienceSection.querySelector('ul'); // Using "DOM Selection", query the skillsSection (instead of the entire document) to find the <ul> element and store it in a variable named skillsList

for (let i = 0; i < experiences.length; i++) { // Create a for loop to iterate over your skills Array, starting at index 0

let experience = document.createElement('li');  // Inside the loop, create a new list item (li) element and store it in a variable named skill

experience.innerText = experiences[i]; // On the next line, set the inner text of your skill variable to the value of the current Array element
experienceList.appendChild(experience); // On the next line, append the skill element to the skillsList element
}

// Homework 4-3 (Handle Message Form Submit and Display Messages in List)

const messageForm= document.getElementById('leave_message'); 
messageForm.addEventListener("submit", callBack);

function callBack (event) {
  const usersName= document.getElementById('usersName').value;
  const usersEmail= document.getElementById('usersEmail').value;
  const usersMessage= document.getElementById('usersMessage').value;
  
    console.log('Name:', usersName);
    console.log('Email:', usersEmail);
    console.log('Message:', usersMessage);

    event.preventDefault();

// Display Messages in List - 4.3 HW Question //

    const messageSection= document.getElementById('msgdisplay');
    const messageList= messageSection.querySelector('ul');
    
    const newMessage= document.createElement('li');
    
    newMessage.innerHTML= '<a href=" mailto: ' + usersEmail + '" > ' 
    + usersName + '</a>' + ' wrote' + ' " ' + ' <span> ' + usersMessage 
    +  ' " ' + ' </span> ';

// 4.3 HW Question Stretch Goal-- Add Edit Button for Submitted Messages

const editButton= document.createElement('button');
editButton.id= 'editButton';
editButton.innerText=  ' Edit ';

editButton.addEventListener("click", function () {
  const editedMessage= prompt("Edit your message here:", usersMessage)
  if (editedMessage !== null) {
    newMessage.querySelector('span').innerText= editedMessage;
    hideMessageDisplay();
  }
});

newMessage.appendChild(editButton);

// 4.3 HW Question Stretch Goal-- Add Remove Button for Submitted Messages

const removeButton= document.createElement('button');
removeButton.innerText=  ' remove';
removeButton.type= 'button';
  
removeButton.addEventListener("click", function () {
const entry= removeButton.parentNode;
entry.remove();
hideMessageDisplay();
});
  
newMessage.appendChild(removeButton);
messageList.appendChild(newMessage);
    
document.getElementById('leave_message').reset();
hideMessageDisplay();
}

      
// 4.3 HW Question Stretch Goal-- Hide #messages section when list is empty

    function hideMessageDisplay() {
      const messageSection= document.getElementById('msgdisplay');
      const messageList= messageSection.querySelector('ul');
  
      if (messageList.children.length === 0) {
        messageSection.style.display= 'none';
      } else {
        messageSection.style.display= 'block';
      }
    }

    const messagesForm= document.getElementById('leave_message'); 

    messagesForm.addEventListener("submit", function (event) {
      const editButton= document.getElementById('editButton');

      hideMessageDisplay();
    });

    const messageSection= document.getElementById('msgdisplay');
    messageSection.style.display= 'none';
    const editButton= document.getElementById('editButton');

    hideMessageDisplay();

// Homework Lesson 6-1

// Fetch GitHub Repositories
const githubRequest =new XMLHttpRequest();
githubRequest.open('GET', 'https://api.github.com/users/tianna-spears/repos');

// Handle Response from Server
githubRequest.onload = function () {
  const repositories= JSON.parse(githubRequest.responseText);

// Display Repositories in List

const projectSection= document.getElementById('projects');
const projectList= projectSection.querySelector('ul');

// Limit number of repositories shown-- (my preference)

const limit= 7;
let i= 3;

for (let i= 3; i < repositories.length; i++) {

  if (i>= limit) {
    break;
  }
  const project= document.createElement('li');

  // Lesson 6-1 Stretch Goals-- Transform repository names into <a> tags that link to GitHub
  // Display additional repository information
  // Customize styling of Projects Section List-- look in CSS

  const reposLinks= document.createElement('a');

  reposLinks.href= repositories[i].html_url;
  reposLinks.textContent= repositories[i].name;

  const reposDescription= document.createElement('p');
  reposDescription.textContent= repositories[i].description;

  const normalDate= new Date(repositories[i].created_at);

  reposDescription.textContent= repositories[i].description + ' ; ' + ' Created on ' + normalDate.toLocaleDateString();

  project.appendChild(reposLinks);
  project.appendChild(reposDescription);
  projectList.appendChild(project);
  }
};

githubRequest.send();



















//   to input a new/modified message

//   Stuck. Commenting to come back later
//     editButton.addEventListener('click', function () {
//       const editText= editButton.childNode;
//     editButton.appendChild(newMessage);

//     practice for infinite scrolling banner but in JS-- 
//   const banners= ['PROJECTS', 'PROJECTS', 'PROJECTS', 'PROJECTS'];
//   const getBanner= document.getElementById('projects');
//   const runBanner= getBanner.querySelector('h1');

//   for (let i=0; i< banners.length; i++) {
//   let banner= document.createElement('p');
//   banner.innerText= banners[i];
//   runBanner.appendChild(banner);
//   }
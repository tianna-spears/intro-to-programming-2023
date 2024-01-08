// alert('Welcome to my Webpage!') // Cute welcome alert.

// Insert Copyright Text in Footer (Lesson 4.2)

const today= new Date(); // Create a new date object and store it in a variable named today
const fullName= 'Tianna Spears'; // Create name variable

const thisYear= today.getFullYear(); // Retrieve the current year from your date object and store it in a variable named thisYear

const footer= document.querySelector('footer'); // Using "DOM Selection", select the <footer> element from the DOM and store it in a variable named footer

const copyright= document.createElement('p'); // Create a new paragraph (p) element and store it in a variable named copyright
copyright.innerHTML = 'Copyright © ' + fullName + ' ' + thisYear; // Set the inner HTML of your copyright element to display your name and the current year

footer.appendChild(copyright); // Using "DOM Manipulation", append the copyright element to the footer

console.log(copyright); // it works!!!

// Code for Lesson 4.2 (Create List of Skills)

const skills = ['HTML','JavaScript', 'CSS', 'Git', 'GitHub', 'Visual Studio Code', 'GitLab']; // List your technical skills by creating an Array of String values and store it in a variable named skills
const skillsSection= document.getElementById('skills'); // Using "DOM Selection", select the #skills section by id and store it in a variable named skillsSection

const skillsList= skillsSection.querySelector('ul'); // Using "DOM Selection", query the skillsSection (instead of the entire document) to find the <ul> element and store it in a variable named skillsList

for (let i = 0; i < skills.length; i++) { // Create a for loop to iterate over your skills Array, starting at index 0
  let skill = document.createElement('button');  // Inside the loop, create a new list item (li) element and store it in a variable named skill
  skill.innerText = skills[i]; // On the next line, set the inner text of your skill variable to the value of the current Array element
  skillsList.appendChild(skill); // On the next line, append the skill element to the skillsList element
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

    const messageSection= document.getElementById('message_display');
    const messageList= messageSection.querySelector('ul');
    
    const newMessage= document.createElement('li');
    
    newMessage.innerHTML= '<a href=" mailto: ' + usersEmail + '" > ' 
    + usersName + '</a>' + ' wrote' + ' " ' + ' <span> ' + usersMessage 
    +  ' " ' + ' </span> ';

// Stretch Goal-- Add Edit Button for Submitted Messages

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

// Stretch Goal-- Add Remove Button for Submitted Messages

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

      
// Stretch Goal- Hide #messages section when list is empty

    function hideMessageDisplay() {
      const messageSection= document.getElementById('message_display');
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

    const messageSection= document.getElementById('message_display');
    messageSection.style.display= 'none';
    const editButton= document.getElementById('editButton');

    hideMessageDisplay();



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
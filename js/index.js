alert('Welcome to my Webpage!') // Cute welcome alert.

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
const skills = ['JavaScript Functions', 'Loops', 'Arrays', 'Objects','DOM Manipulation)', 'HTML', 'HTML Forms', 'Git', 'GitHub', 'How the Internet Works', 'Command Line']; // List your technical skills by creating an Array of String values and store it in a variable named skills
const skillsSection= document.getElementById('skills'); // Using "DOM Selection", select the #skills section by id and store it in a variable named skillsSection

const skillsList= skillsSection.querySelector('ul'); // Using "DOM Selection", query the skillsSection (instead of the entire document) to find the <ul> element and store it in a variable named skillsList

for (let i = 0; i < skills.length; i++) { // Create a for loop to iterate over your skills Array, starting at index 0
  let skill = document.createElement('li');  // Inside the loop, create a new list item (li) element and store it in a variable named skill
  skill.innerText = skills[i]; // On the next line, set the inner text of your skill variable to the value of the current Array element
  skillsList.appendChild(skill); // On the next line, append the skill element to the skillsList element
}


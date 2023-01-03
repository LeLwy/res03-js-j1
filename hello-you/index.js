const now = new Date();
const userAge = now - new Date();
const currentYear = now.getFullYear();
const currentMonth = now.getMonth();
const currentDay = now.getDate();
const userFirstName = window.prompt("Quel est votre prénom ?");
const userName = window.prompt("Quel est votre nom ?");
const userBirthDate = window.prompt("Quelle est ta date de naissance (xx/xx/xxxx) ?");

console.log(`Salut ${userFirstName} ${userName}, cette année tu as ${userAge} ans !`);
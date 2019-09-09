// Paul van der Lei
// Media- en Applicatieontwikkelaar leerjaar 1

alert("Hey... hier kan je wat vragen beantwoorden"); //geeft de popup melding zodra javascript word aangeroepen
var voornaam = prompt ('Wat is je voornaam?', 'voornaam' ); // vraagt om voornaam en slaat op als variable voornaam
var achternaam = prompt ('Wat is je achternaam?', 'achternaam' ); // vraagt om achternaam en slaat op als variable achternaam
var leeftijd = prompt ('Wat is je leeftijd?', 'leeftijd' ); // vraagt om leeftijd en slaat op als variable leeftijd

document.write('hallo ' + voornaam + ' ' + achternaam + ' fijn dat je er bent, zucht jij bent al oud ' + leeftijd + ' jaar oud');

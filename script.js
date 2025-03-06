// if/else statement

// operators
/*

if(her skriver vi sjekk){
  her skriver vi hva som skal skje
} else {
  hvis ikke if statement er true, så skjer det vi skriver her
}

= betyr å erklære noe
=== betyr samme verdi og samme datatype

< betyr mindre enn (less then)
> betyr større enn (more then)

&& betyr og (and)
|| betyr eller (or)

! betyr "med mindre", brukes å gjerne for å sjekke om data er undefined

falsy verdier:

false
undefined
Null
NAN


*/

let isPresent = true;

// Viss det er sant at isPresent er usant viser resultatet "Person is present", viss det ikke er sant viser resultatet "Person is away"
if (isPresent) {
  console.log('person is present');
} else {
  console.log('person is away');
}

//
//

let closingHour = 22;
let timeNow = 23;

// Viss det er sant at closingHour er mindre enn timeNow viser resultatet "Shop is closed", viss det ikke er sant viser resultatet "Shop is open"
if (closingHour > timeNow) {
  console.log('Shop is open');
} else {
  console.log('shop is closed');
}

//
//

let age = 23;

// Viss det er sant at age er mindre enn 18 viser resultatet "Sorry, you are not old enough", viss det ikke er sant viser resultatet "Welcome to the nightclub"
if (age > 18) {
  console.log('Welcome to the nightclub');
} else {
  console.log('sorry, you are not old enough');
}

const hour = 15;

// Sjekker om klokken er mindre enn 12
if (hour < 12) {
  console.log('Good morning');
} else if (hour === 12) {
  // Sjekker om klokken er akkurat 12
  console.log('The clock is 12!');
} else if (hour > 14 && hour < 18) {
  // Sjekker om klokken er mellom 14 og 18.
  console.log('The clock is between 14 and 18');
} else {
  // Tidspunkt som ikke passer før 12 eller akkurat 12
  console.log('Good day');
}

//OPPGAVE//
/*
Den lokale butikken stenger kl.21, lag en sjekk som ser om butikken er åpen
1.lag en variabel som inneholder tidspunktet på dagen
2. lag en if statement som sjekker om variabel for tidspunkt er mindre enn stengetid
3. legg til en else som console.log en beskjed som sier at butikken er stengt om tidspunkt er etter stengetid

BONUS!

4. lag en variabel for åpningstid og sjekk om tidspunktet er etter åpningstid OG før stengetid
*/

if (closingHour > 21) {
  console.log('Store is closed');
} else {
  console.log('Store is open');
}

//
//

// få inn verdier fra forms i Html

// if else som sjekker hvilken nummertype some er valgt og som gjør om tall

let displayBtn = document.querySelector('#convertButton');

function unitConverter() {
  let displayResult = document.querySelector('#displayResult');
  let unitInput = parseFloat(document.querySelector('#unitInput').value);
  let unitFrom = document.querySelector('#unitFrom').value;
  let unitTo = document.querySelector('#unitTo').value;
  let convertedNumber = 0;

  if (unitFrom === 'MM' && unitTo === 'M') {
    convertedNumber = unitInput * 1000;
    displayResult.textContent = convertedNumber;
  }

  console.log(convertedNumber);
}

displayBtn.addEventListener('click', unitConverter);

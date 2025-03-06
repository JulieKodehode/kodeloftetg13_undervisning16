//  IF/ELSE STATEMENTS
/*
if(her skriver vi sjekk){
  her skriver vi hva som skal skje
} else {
  hvis ikke if statement er true, så skjer det vi skriver her
}
*/

// OPERATORS
/*
= betyr å erklære noe
=== betyr samme verdi og samme datatype

< betyr mindre enn (less then)
> betyr større enn (more then)

&& betyr og (and)
|| betyr eller (or)

! betyr "med mindre", brukes å gjerne for å sjekke om data er undefined

Fale verdier:
  false
  undefined
  Null
  NAN
*/

let isPresent = true;

// Viss det er sant at isPresent er usant viser resultatet "Person is present", viss det ikke er sant viser resultatet "Person is away"
if (isPresent) {
  console.log("Person is present");
} else {
  console.log("Person is away");
}

//
console.log("-BREAK-");
//

let closingHour = 22;
let timeNow = 23;

// Viss det er sant at closingHour er mindre enn timeNow viser resultatet "Shop is closed", viss det ikke er sant viser resultatet "Shop is open"
if (closingHour > timeNow) {
  console.log("Shop is open");
} else {
  console.log("shop is closed");
}

//
console.log("-BREAK-");
//

let age = 23;

// Viss det er sant at age er mindre enn 18 viser resultatet "Sorry, you are not old enough", viss det ikke er sant viser resultatet "Welcome to the nightclub"
if (age > 18) {
  console.log("Welcome to the nightclub");
} else {
  console.log("sorry, you are not old enough");
}

//
console.log("-BREAK-");
//

const hour = 15;

// Sjekker om klokken er mindre enn 12
if (hour < 12) {
  console.log("Good morning");
} else if (hour === 12) {
  // Sjekker om klokken er akkurat 12
  console.log("The clock is 12!");
} else if (hour > 14 && hour < 18) {
  // Sjekker om klokken er mellom 14 og 18.
  console.log("The clock is between 14 and 18");
} else {
  // Tidspunkt som ikke passer før 12 eller akkurat 12
  console.log("Good day");
}

//
console.log("-BREAK-");
//

//OPPGAVE//
/*
Den lokale butikken stenger kl.21, lag en sjekk som ser om butikken er åpen
1.lag en variabel som inneholder tidspunktet på dagen
2. lag en if statement som sjekker om variabel for tidspunkt er mindre enn stengetid
3. legg til en else som console.log en beskjed som sier at butikken er stengt om tidspunkt er etter stengetid

BONUS!
4. lag en variabel for åpningstid og sjekk om tidspunktet er etter åpningstid OG før stengetid
*/

let isStoreOpenNow;
const currentTime = 11;
const storeClosingTime = 21;

if (storeClosingTime > currentTime) {
  isStoreOpenNow = true;
  console.log(isStoreOpenNow + " Store is open");
} else {
  isStoreOpenNow = false;
  console.log(isStoreOpenNow + " Store is closed");
}

//
console.log("-BREAK-");
//

// GJENNOMGANG AV FORM & CONDITIONS SAMMEN
// 1. Få inn verdier fra forms i HTML til JS
// 2. if/else statement som sjekker hvilken nummertype some er valgt og som gjør et regnestykke

// Knapp som viser resultat når det trykkes
let displayBtn = document.querySelector("#convertButton");

// Funksjon som konventerer tall
function unitConverter() {
  // Variabel som viser tekst resultatet
  let displayResult = document.querySelector("#displayResult");
  console.log(displayResult);
  // En variabel som henter et verdi som er skrevet inni et element i HTML
    // parseFloat gjør en string om til et tall
  let unitInput = parseFloat(document.querySelector("#unitInput").value);
  console.log(unitInput);
  // En variabel som henter hvilken verdi som er valgt inni et select-elementet for enhet fra.
  let unitFrom = document.querySelector("#unitFrom").value;
  console.log(unitFrom);
    // En variabel som henter et verdi som er valgt inni et select-elemente for enhet til.
  let unitTo = document.querySelector("#unitTo").value;
  console.log(unitTo);
    // En variabel som setter tallet til 0 som start
  let convertedNumber = 0;

  // Sjekker etter hvilken verdi de ulike select-elementene har ut i fra hvilken konventering som skal skje
  if (unitFrom === "MM" && unitTo === "M") {
    // Regnestykket for MM til M
    convertedNumber = unitInput / 1000;
    // Sjekker at regnestykker er rett i loggen før sendes til siden
    console.log(convertedNumber);
    // Setter textContent så resultatet av regnestykket synes
    displayResult.textContent = convertedNumber;
  }
}

// Knapp som lytter etter et trykk og kjører funksjonen over
displayBtn.addEventListener("click", unitConverter);

// Declaring a function
function nb_year(p0, percent, aug, p) {
    let years = 0;
    while (p0 < p) {
        p0 += p0 * (percent / 100) + aug;
        years++;
    }
    return years;
}

// Given values
const initialPopulation = 1000;
const growthRate = 2;
const newInhabitants = 50;
const intendedPopulation = 1200;

// Calculate the number of years
const yearsNeeded = nb_year(initialPopulation, growthRate, newInhabitants, intendedPopulation);

console.log(`The town needs ${yearsNeeded} years to reach or exceed a population of ${intendedPopulation} inhabitants.`);

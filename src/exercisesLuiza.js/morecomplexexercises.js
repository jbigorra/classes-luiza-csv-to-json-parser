// More complex exercise would be something like:

function Country (country, capital, language, currency) {
    this.country = country;
    this.capital = capital;
    this.language = language;
    this.currency = currency;
}

const Poland = new Country('Poland', 'Warsaw', 'polish', 'zloty');
const Germany = new Country('Germany', 'Berlin', 'german', 'euro');
const GB = new Country('GB', 'London', 'english', 'pound');
const China = new Country('China','Beijing', 'chinese', 'juan');
const USA = new Country('USA', 'Washington', 'english', 'dollar');
const Brazil = new Country('Brazil', 'Brasilia', 'portugeese', 'real');

const arrayCountries = [Poland, Germany, GB, China, USA, Brazil];
const europe = [];

europe.push(Poland, Germany, GB);

console.log(arrayCountries);
console.log(europe);

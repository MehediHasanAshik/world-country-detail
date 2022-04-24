const searchCountry = () => {
  const searchField = document.getElementById('search-field');
  const searchText = searchField.value;
  searchField.value = '';

  //fetching data by countrywise
  const url = `https://restcountries.com/v3.1/name/${searchText}`
  fetch(url)
    .then(res => res.json())
    .then(data => showCountryDetail(data[0]))
}

const showCountryDetail = (country) => {
  console.log(country)
  const countryDetails = document.getElementById('country-details');
  countryDetails.textContent = ''
  const div = document.createElement('div');
  div.classList.add('card')
  div.innerHTML = `
  <div class="card mb-3" style="max-width: 540px;">
  <div class="row g-0">
    <div class="col-md-4">
      <img src="${country.flags.png}" class="img-fluid rounded-start" alt="...">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">Name: ${country.name.common}</h5>
        <p>Official Name: ${country.name.official}</p>
        <p>Capital: ${country.capital}</p>
        <p>Continent: ${country.continents}</p>
        <p>Population: ${country.population}</p>
        <p>Currency: '${loadCurrency(country.currencies)}'</p>
        <p>Language: '${loadLanguage(country.languages)}'</p>
        <p>Borders: ${country.borders[0]},${country.borders[1]}</p>
      </div>
    </div>
  </div>
</div>
    `
  countryDetails.appendChild(div);

}

const loadLanguage = (language) => {
  for (const key in language) {
    const innerobj = language[key];
    // console.log(innerobj)
    if (innerobj == 'English') {
      return innerobj
    } else {
      return innerobj
    }

  }
}

const loadCurrency = (Currency) => {
  for (const key in Currency) {
    const innerobj = Currency[key]
    for (const val in innerobj) {
      return innerobj[val]
    }
  }
}
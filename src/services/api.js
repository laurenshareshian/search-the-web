

export default {
  getHouses(searchTerms) {
      
  //    - use "encodeURIComponent" to escape search values:
  //    ?APIKEY=abc123&search=${encodeURIComponent(name)}

    let searchString = 'https://www.portlandmaps.com/api/assessor/?api_key=FD35EC4B8D96AA58FAD98FD40B530D67&sqft_larger=1';
    searchString += `&sold_after=${ encodeURIComponent(searchTerms[0])} `;
    searchString += `&sold_before=${ encodeURIComponent(searchTerms[1])} `;
    searchString += `&market_larger=${ encodeURIComponent(searchTerms[2])} `;
    searchString += `&market_smaller=${ encodeURIComponent(searchTerms[3])} `;
    searchString += `&sqft_larger=${ encodeURIComponent(searchTerms[4])} `;
    searchString += `&sqft_smaller=${ encodeURIComponent(searchTerms[5])} `;
    searchString += `&built_after=${ encodeURIComponent(searchTerms[6])} `;
    searchString += `&built_before=${ encodeURIComponent(searchTerms[7])} `;
    return fetch(searchString)
    /* de-serialize the data to real JavaScript object! */
      .then(response => response.json());
  },

  getHouseById(property_id) {
      
    return fetch(`https://www.portlandmaps.com/api/assessor/?api_key=FD35EC4B8D96AA58FAD98FD40B530D67&property_id=${encodeURIComponent(property_id)}`)
      .then(response => response.json());
  }
};
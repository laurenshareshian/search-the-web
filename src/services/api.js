

export default {
  // return the promise, which is the final promise
  // after calling response.json(). This means:
  // 1) Web Request is made to server
  // 2) _when_ browser gets response, _then_ call the callback
  // 3) The return value of that _then_ callback is passed to the next then (outside this function)
  getHouses(searchTerm = '') {
      
  // url:
  // 1) protocol (https://)
  // 2) host server  (swapi.co)
  // 3) path (/api/)
  // 4) search or query
  //    - separated from path via "?"
  //    - name=value pairs separated by "&"
  //    - use "encodeURIComponent" to escape search values:
  //    ?APIKEY=abc123&search=${encodeURIComponent(name)}
          
    if(searchTerm === 'jar') return Promise.reject(new Error('i think that bad search'));
  
    // return fetch(`https://swapi.co/api/people?search=${encodeURIComponent(searchTerm)}`)
    // return fetch(`https://www.portlandmaps.com/api/assessor/?api_key=FD35EC4B8D96AA58FAD98FD40B530D67&address=${encodeURIComponent(searchTerm)}`)
    return fetch(`https://www.portlandmaps.com/api/assessor/?api_key=FD35EC4B8D96AA58FAD98FD40B530D67&sqft_larger=1&sold_after=${encodeURIComponent(searchTerm)}`)
    /* de-serialize the data to real JavaScript object! */
      .then(response => response.json());
  },

  getHouseById(property_id) {
      
    // url:
    // 1) protocol (https://)
    // 2) host server  (swapi.co)
    // 3) path (/api/)
    // 4) search or query
    //    - separated from path via "?"
    //    - name=value pairs separated by "&"
    //    - use "encodeURIComponent" to escape search values:
    //    ?APIKEY=abc123&search=${encodeURIComponent(name)}
          
    return fetch(`https://www.portlandmaps.com/api/assessor/?api_key=FD35EC4B8D96AA58FAD98FD40B530D67&property_id=${encodeURIComponent(property_id)}`)
      /* de-serialize the data to real JavaScript object! */
      .then(response => response.json());
  }
};
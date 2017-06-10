/**
 * @param {string} url - API entry point
 * @param {Object} vm - Vue instance
 * @param {string} dataName - Vue data name
 * @description Function fetches json data and writes parameter dataName to component data
 */

const getData = (url, vm, dataName) => {
  fetch(url, {
    'method': 'get'
  }).then(response => response.json()).then(data => {
    console.log(data)
    vm[dataName] = data
  }).catch(err => {
    console.log(err)
  })
}

export default getData

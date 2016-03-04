
module.exports = {
  init(baseUri) {
    return {
      index: {
        home: {method: 'GET', url: '/', absoluteURL: baseUri + '/'},
        essai: {method: 'GET', url: '/essai', absoluteURL: baseUri + '/essai'}
      }
    }
  }
}

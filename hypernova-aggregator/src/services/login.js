
const axios = require('axios')

module.exports.getLogin = () => {
  return axios.post('http://0.0.0.0:3031/batch', {
    header: {
      name: 'Login',
      data: {
        title: 'Wizeline',
        links: [
          {
            url: 'https://www.wizeline.com/',
            text: 'Home'
          },
          {
            url: 'https://github.com/airbnb/hypernova',
            text: 'Hypernova'
          }
        ]
      }
    }
  })
    .then(({ data }) => {
      return data.results
    })
}

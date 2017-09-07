import axios from 'axios'

const getData = username => {
  return axios
    .get(`https://github-user.now.sh?username=${username}`)
    .then(response => response.data)
}

export default getData

const axios = require('axios');

const getTrains = (config) => {
    return new Promise((resolve, reject) => {
        axios.get(process.env.RAILWAYS_API + 'search_trains', config.body, {
            params: config.params
        }).then((response) => {
            resolve(response)
        }).catch((error) => {
            reject(error)
        })
    })
}

const getStations = () => {
    return new Promise((resolve, reject) => {
        axios.post(process.env.RAILWAYS_API + 'search_stations', config.body, {
            params: config.params
        }).then((response) => {
            resolve(response)
        }).catch((error) => {
            reject(error)
        })
    })
}

module.exports = {
    getTrains,
    getStations
}

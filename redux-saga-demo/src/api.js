import apisauce from 'apisauce'
import sha1 from 'crypto-js/sha1'


const create = (baseURL = 'http://localhost:5000/api') => {
    const api = apisauce.create({
        baseURL,
        headers: {
            'Cache-Control': 'no-cache',
            'X-APP-ID': 'appid',
            'X-API-KEY': '145618',
            'X-MARKS-THE-SPOT': 'yarrrrr'
        },
        timeout: 10000
    });
    api.addRequestTransform(request => {
      const ts = new Date().valueOf();
      request.params['ts'] = ts;
      request.headers['X-Request-Transform'] = 'Changing Stuff!'
    })
    const getLatestStatus = () => api.get('status');
    return {
        getLatestStatus,
    }
}

// let's return back our create method as the default.
export default {
    create
}

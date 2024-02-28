import axios from "axios";

const PublicAxios = (baseAddress, type, method, obj = null) => {

    if (type == "get" || type == "Get") {
        return new Promise(resolve => {
            axios.get(`${baseAddress}/${method}`).
                then(res => {
                    resolve(res)

                })
                .catch(err => {

                    resolve(err)
                })
        })

    }
    if (type == "post" || type == "Post") {
        return new Promise(resolve => {
            axios.post(`${baseAddress}/${method}`, obj).
                then(res => {
                    resolve(res)

                })
                .catch(err => {

                    resolve(err)
                })
        })
    }
    if (type == "delete" || type == "Delete") {
        return new Promise(resolve => {
            axios.delete(`${baseAddress}/${method}`).
                then(res => {
                    resolve(res)

                })
                .catch(err => {

                    resolve(err)
                })
        });

    }
    else {
        debugger
        let data = JSON.stringify(obj);
        let config=null
if(data=="null")
{
     config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: `${baseAddress}/${method}`,
        headers: {         
        },
       // data: data
    };
}
else
{
     config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: `${baseAddress}/${method}`,
        headers: {
            'Content-Type': 'application/json'
        },
        data: data
    };

}

        return new Promise(resolve => {
            axios.request(config)
                .then((response) => {
                    console.log(JSON.stringify(response.data));
                    resolve(response.data)
                })
                .catch((error) => {
                    console.log(error);
                    resolve(error)
                });
        })

    }
}

/*
const axios = require('axios');

let config = {
  method: 'post',
  maxBodyLength: Infinity,
  url: 'http://localhost:9003/api/Message/CreateBackup',
  headers: { }
};

axios.request(config)
.then((response) => {
  console.log(JSON.stringify(response.data));
})
.catch((error) => {
  console.log(error);
});
*/
export {
    PublicAxios
}





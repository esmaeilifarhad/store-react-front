import axios from "axios";

const PublicAxios = (baseAddress, type, method, obj = null) => {

  
let data = JSON.stringify(obj);
let config = null

if (data == "null") {
    config = {
        method: type,
        maxBodyLength: Infinity,
        url: `${baseAddress}/${method}`,
        headers: {
            'Content-Type': 'application/json'
        },
        // data: data
    };
}
else {
    config = {
        method: type,
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

export {
    PublicAxios
}





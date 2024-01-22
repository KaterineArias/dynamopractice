const AWS = require("aws-sdk");
AWS.config.update({ region: 'us-west-1' });

const csd = new AWS.CloudSearchDomain({
    endpoint: 'search-td-notes-search-ctf4njgtj57edjnns2b2k2c3ny.us-east-1.cloudsearch.amazonaws.com'
});

csd.search({
    query: "mobile usb"
}, (err, data)=>{
    if(err) {
        console.log(err);
    } else {
        console.log(JSON.stringify(data, null, 2));
    }
});
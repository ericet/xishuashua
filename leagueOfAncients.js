const axios = require('axios');
const ethers = require('ethers');
const LOA_URL= 'https://loapi.leagueofancients.com/api/create';
const REF_USER = '0x5241aa99a776866296D1d695C02bB2E31B3Ff998'; //Your ETH Wallet Address

let synchronous_request = function (url, params) {
    if (params == undefined) {
        return new Promise(function (resolve, reject) {
            axios.get(url).then(res => {
                resolve(res.data);
            }).catch(err => {
                reject(err)
            });
        })
    } else {
        return new Promise(function (resolve, reject) {
            axios.post(url, params).then(res => {
                resolve(res.data);
            }).catch(err => {
                reject(err);
            });
        })
    }
}

start()
async function start() {
    const account = ethers.Wallet.createRandom();
    let response = await synchronous_request(LOA_URL, { 'ref_user_id': REF_USER,'referral_link':'','wallet_address':account.address })
    console.log(response);
}
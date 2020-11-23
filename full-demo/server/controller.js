const fetch = require('node-fetch');

async function login(req, res, next) {
    
    let mockAuthAPI = new Promise((resolve, reject) => {
        setTimeout(() => {
            let userInfo = {
                name: 'Andy',
                age: '38',
                title: '开发'
            };
            resolve(userInfo);
        }, 2000);
    });
    
    
    let accountInfoJson = await mockAuthAPI;
    console.log(accountInfoJson);

    return res.status(200).json(accountInfoJson);
}

async function logout(req, res, next) {
    res.status(200).send();
}

module.exports.login = login;
module.exports.logout = logout;
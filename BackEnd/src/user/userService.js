var userModel = require('./userModel');
var key = '123456789trytryrtyr';
var encryptor = require('simple-encryptor')(key);

module.exports.getDataFromDBService = () => {
    return new Promise(function checkURL(resolve, reject) {
        userModel.find({})
            .then(result => {
                resolve(result);
            })
            .catch(err => {
                console.error(err);
                reject(false);
            });
    });
}

module.exports.createUserDBService = (userDetails) => {
    console.log("Received request data:", userDetails); 
    return new Promise(function myFn(resolve, reject) {

        var userModelData = new userModel();

        userModelData.name = userDetails.name;
        userModelData.username = userDetails.username;
        userModelData.email = userDetails.email;
        userModelData.phoneNo = userDetails.phoneNo;
        userModelData.password = userDetails.password;

        userModelData.save().then(() => {
            resolve(true);
            console.log(`Data inserted successfully with Username: ${userDetails.name}`)
        }).catch((error) => {
            console.error(error);
            reject(false);
        });
    });
}

module.exports.updateUserDBService = (id, userDetails) =>{
    return new Promise(function myFn(resolve, reject){
        userModel.findByIdAndUpdate(id, userDetails, function returnData(error, result){
            if(error) reject(false);
            else resolve(result);
        });
    });
}

module.exports.deleteUserDBService = (id) =>{
    return new Promise(function myFn(resolve, reject){
        userModel.findByIdAndDelete(id, function returnData(error, result){
            if(error) reject(false);
            else resolve(result);
        })
    })
}

module.exports.loginuserDBService = async (userDetails) => {
    try {
      const result = await userModel.findOne({ username: userDetails.username });
      if (result) {
        if (result.password === userDetails.password) {
          return { status: true, msg: "User validated successfully" };
        } else {
          throw { status: false, msg: "User validation failed" };
        }
      } else {
        throw { status: false, msg: "User not found" };
      }
    } catch (error) {
      throw { status: false, msg: error };
    }
  };
  

var sellerModel = require('./sellerModel');

module.exports.createSellerDBService = (sellerDetails) => {
    console.log("Received request data:", sellerDetails); 
    return new Promise(function myFn(resolve, reject) {

        var sellerModelData = new sellerModel();

        sellerModelData.name = sellerDetails.name;
        sellerModelData.username = sellerDetails.username;
        sellerModelData.email = sellerDetails.email;
        sellerModelData.phoneNo = sellerDetails.phoneNo;
        sellerModelData.password = sellerDetails.password;

        sellerModelData.save().then(() => {
            resolve(true);
            console.log(`Data inserted successfully with sellername: ${sellerDetails.name}`)
        }).catch((error) => {
            console.error(error);
            reject(false);
        });
    });
}

module.exports.loginSellerDBService = async (sellerDetails) => {
    try {
      const result = await sellerModel.findOne({ username: sellerDetails.username });
      if (result) {
        if (result.password === sellerDetails.password) {
          return { status: true, msg: "seller validated successfully" };
        } else {
          throw { status: false, msg: "seller validation failed" };
        }
      } else {
        throw { status: false, msg: "seller not found" };
      }
    } catch (error) {
      throw { status: false, msg: error };
    }
  };
  
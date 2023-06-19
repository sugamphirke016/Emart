var sellerService = require('./sellerService');

var createSellerControllerFn = async(req, res) =>{
    var status = await sellerService.createSellerDBService(req.body);
    if(status) res.send({"status": true, "message": "seller Create Successfully!"});
    else res.send({"status": false, "message": "Error creating seller"});
}

var loginSellerControllerFn = async (req, res) => {
    var result = null;
    try {
        result = await sellerService.loginSellerDBService(req.body);
        if (result.status) {
            res.send({ "status": true, "message": result.msg });
        } else {
            res.send({ "status": false, "message": result.msg });
        }
 
    } catch (error) {
        console.log(error);
        res.send({ "status": false, "message": error.msg });
    }
}

module.exports = {createSellerControllerFn,loginSellerControllerFn};
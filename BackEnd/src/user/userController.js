var userService = require('./userService');

var getDataControllerFn = async(req, res) => {
    var user = await userService.getDataFromDBService();
    res.send({"status":true, "data": user});
}

var createUserControllerFn = async(req, res) =>{
    var status = await userService.createUserDBService(req.body);
    if(status) res.send({"status": true, "message": "User Create Successfully!"});
    else res.send({"status": false, "message": "Error creating user"});
}

var updateUserControllerFn = async(req, res) =>{
    var result = await userService.updateUserDBService(req.params.id, req.body);
    if(result) res.send({"status": true, "message": "User credentials updated successfully!"});
    else res.send({"status": false, "message": "Error while updating user credentials!"});
}

var deleteUserControllerFn = async(req, res) =>{
    var result = await userService.deleteUserDBService(req.params.id);
    if(result) res.send({"status": true, "message": "User deleted successfully!"});
    else res.send({"status": false, "message": "Error while deleting the user!"});
}

var loginUserControllerFn = async (req, res) => {
    var result = null;
    try {
        result = await userService.loginuserDBService(req.body);
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

module.exports = {getDataControllerFn, createUserControllerFn, updateUserControllerFn, deleteUserControllerFn, loginUserControllerFn};
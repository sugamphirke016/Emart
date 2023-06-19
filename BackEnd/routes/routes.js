const express = require('express');
const router = express.Router();

// user routes
var userController = require('../src/user/userController');
router.route('/user/getAll').get(userController.getDataControllerFn);

router.route('/user/create').post(userController.createUserControllerFn);

router.route('/user/update/:id').patch(userController.updateUserControllerFn);

router.route('/user/delete/:id').delete(userController.deleteUserControllerFn);

router.route('/user/login').post(userController.loginUserControllerFn);

// seller routes
var sellerController = require('../src/seller/sellerController');
router.route('/seller/create').post(sellerController.createSellerControllerFn);

router.route('/seller/login').post(sellerController.loginSellerControllerFn);

module.exports = router;
'use strict';

const BaseController = require('./base');

class HomeController extends BaseController {
  async index() {
    return this.returnData('hi, Mr.80');
  }
}

module.exports = HomeController;

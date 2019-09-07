import util from "../utils/utils.js";
module.exports = class extends think.Logic {

  __before() {
    if (this.isGet) {
      let err = util.checkGet(this, [
        "user_id",
        "user_name",
      ]);
      if (err) {
        return this.fail(err, {});
      }
    } else {
      let err = util.checkPost(this, [
        "user_id",
        "user_name",
      ]);
      if (err) {
        return this.fail(err, {});
      }
    }
  }

  indexAction() {

  }

  addAssetsAction() {
    this.allowMethods = 'post';
    let err = util.checkPost(this, [
      "assets_model",
      "status",
      "name",
      "factory_name",
      "serial_no",
      "place",
      "type",
    ]);
    if (err) {
      return this.fail(err, {});
    }
  }

  getAssetsListAction() {
    this.allowMethods = 'get';
  }

  addManyAssetsAction() {
    this.allowMethods = 'post';
    let assets_json = this.post("assets_json");
    let arr = JSON.parse(assets_json);
    console.log("arr:", arr);
    if (!arr || arr.length == 0) {
      return this.fail("添加资产参数异常！", {});
    } else {
      for (let item of arr) {
        let err = util.checkParams(item, [
          "assets_model",
          "status",
          "name",
          "factory_name",
          "serial_no",
          "place",
        ]);
        if (err) {
          return this.fail("添加资产参数异常！", {});
        }
      }
    }
  }

  updateAssetsAction(){
    this.allowMethods = 'post';
    let err = util.checkPost(this, [
      "assets_id"
    ]);
    if (err) {
      return this.fail(err, {});
    }
  }

  deleteAssetsAction(){
    this.allowMethods = 'post';
    let err = util.checkPost(this, [
      "assets_ids"
    ]);
    if (err) {
      return this.fail(err, {});
    }
  }

  allotAssetsAction(){
    this.allowMethods = 'post';
    let err = util.checkPost(this, [
      "assets_id",
      "own_user_name",
      "own_user_id",
    ]);
    if (err) {
      return this.fail(err, {});
    }
  }

  getAssetsTypeAction(){
    this.allowMethods = 'get';
  }

  addAssetsTypeAction(){
    this.allowMethods = 'post';
    let err = util.checkPost(this, [
      "type_name"
    ]);
    if (err) {
      return this.fail(err, {});
    }
  }

  getAssetsStatusAction(){
    this.allowMethods = 'get';
  }

  addAssetsStatusAction(){
    this.allowMethods = 'post';
    let err = util.checkPost(this, [
      "status_name"
    ]);
    if (err) {
      return this.fail(err, {});
    }
  }

  getUserAssetsAction(){
    this.allowMethods = 'get';
    let err = util.checkGet(this, [
      "own_id",
    ]);
    if (err) {
      return this.fail(err, {});
    }
  }

  getStatusCountAction(){
    this.allowMethods = 'get';
  }
};
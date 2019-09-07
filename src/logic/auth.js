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

  addAuthAction(){
    this.allowMethods = 'post';
    let err = util.checkPost(this, [
      "auth_name",
      "auth_code",
    ]);
    if (err) {
      return this.fail(err, {});
    }
  }

  getAuthListAction(){
    this.allowMethods = 'get';
  }

  setAuthAction(){
    this.allowMethods = 'post';
    let err = util.checkPost(this, [
      "auth_user_id",
      "auth_codes",
    ]);
    if (err) {
      return this.fail(err, {});
    }
  }
};

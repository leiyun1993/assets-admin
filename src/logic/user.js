import util from "../utils/utils.js";
module.exports = class extends think.Logic {
  indexAction() {

  }
  registerAction(){
    this.allowMethods = 'post';
    let err = util.checkPost(this,["user_name","password"]);
    if(err){
      return this.fail(err,{});
    }
  }
  loginAction(){
    this.allowMethods = 'post';
    let err = util.checkPost(this,["user_name","password"]);
    if(err){
      return this.fail(err,{});
    }
  }
  getUserListAction(){
    this.allowMethods = 'get';
  }
};

const Base = require('./base.js');
import util from "../utils/utils.js";
import dayjs from "dayjs";
import { think } from "thinkjs";
module.exports = class extends Base {
  indexAction() {
    return this.display();
  }

  async addAuthAction() {
    let params = {
      auth_name: this.post("auth_name"),
      auth_code: this.post("auth_code"),
      add_time: dayjs().unix()
    }
    let model = this.model("auth");
    let res = await model.where(`auth_name = "${params.auth_name}" OR auth_code = "${params.auth_code}"`).thenAdd(params);
    if (res.type === "exist") {
      this.fail("权限已存在！", {});
    } else {
      this.success({
        id: res.id
      });
    }
  }

  async getAuthListAction() {
    let model = this.model("auth");
    let res = await model.select();
    this.success({
      list: res
    });
  }

  async setAuthAction(){
    let model = this.model("user");
    let userId = this.post("auth_user_id");
    let authJson = this.post("auth_codes");

    let hasUser = await model.where({id:userId}).find();
    if(think.isEmpty(hasUser)){
      return this.fail("用户不存在！",{});
    }
    let res = await model.where({id:userId}).update({
      auth:authJson
    })
    if(res){
      this.success({});
    }else{
      this.fail("设置权限失败！",{});
    }
    
  }
};
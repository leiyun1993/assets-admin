const Base = require('./base.js');
import dayjs from "dayjs";
module.exports = class extends Base {
  indexAction() {
    return this.display();
  }

  async registerAction(){
    let model = this.model("user");
    let userInfo = {
      user_name:this.post("user_name"),
      password:this.post("password"),
      nick_name:this.post("nick_name"),
      avatar:this.post("avatar"),
      add_time:dayjs().unix(),
      position:this.post("position")
    }
    let res = await model.where({user_name:userInfo.user_name}).thenAdd(userInfo);
    if(res.type === "exist"){
      this.fail("用户名已存在！",{});
    }else{
      let user = await model.where({user_id:res.id}).find();
      delete user["password"];
      this.success(user);
    }
  }

  async loginAction(){
    let model = this.model("user");
    let data = await model.where({user_name:this.post("user_name"),password:this.post("password")}).find();
    if(think.isEmpty(data)){
      this.fail("账号或密码错误！",{});
    }else{
      delete data["password"];
      this.success(data);
    }
  }

  async getUserListAction(){
    let page = this.get("page")||1;
    let size = this.get("size")||10;
    let model = this.model("user");
    let res = await model.page(page,size).countSelect();
    let list = res.data;
    for(let item of list){
      delete item.password;
    }
    this.success({
      list:list,
      total:res.count
    })
  }
};

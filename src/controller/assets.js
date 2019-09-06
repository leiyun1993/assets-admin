const Base = require('./base.js');
import dayjs from "dayjs";
module.exports = class extends Base {
  indexAction() {
    return this.display();
  }

  async addAssetsAction(){
    let params = {
      assets_model:this.post("assets_model"),
      status:this.post("status"),
      name:this.post("name"),
      factory_name:this.post("factory_name"),
      serial_no:this.post("serial_no"),
      own_user_name:this.post("own_user_name"),
      own_user_id:this.post("own_user_id"),
      place:this.post("place"),
      add_time:dayjs().unix()
    }
    let model = this.model("assets");
    let res = await model.add(params);

    this.model("operatelog").addLog(1,res.id,this.post("user_id"),this.post("user_name"),"",params.name);
    this.success(res);
  }

  async getAssetsListAction(){
    let page = this.get("page")||1;
    let size = this.get("size")||10;
    let model = this.model("assets");
    let res = await model.page(page,size).where({is_delete:0}).countSelect();
    let list = res.data;
    this.success({
      list:list,
      total:res.count
    })
  }

  async addManyAssetsAction(){
    let list = JSON.parse(this.post("assets_json"));
    let model = this.model("assets");
    let res = await model.addMany(list);

    let nameList = [];
    for(let item of list){
      nameList.push(item.name);
    }
    this.model("operatelog").addLog(1,res.join(","),this.post("user_id"),this.post("user_name"),"",nameList.join(","));
    this.success({
      list:res
    });
  }
};

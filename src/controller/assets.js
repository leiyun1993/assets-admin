const Base = require('./base.js');
import dayjs from "dayjs";
module.exports = class extends Base {
  indexAction() {
    return this.display();
  }

  async addAssetsAction() {
    let params = {
      assets_model: this.post("assets_model"),
      status: this.post("status") || 1,
      name: this.post("name"),
      factory_name: this.post("factory_name"),
      serial_no: this.post("serial_no"),
      own_user_name: this.post("own_user_name"),
      own_user_id: this.post("own_user_id"),
      place: this.post("place"),
      type: this.post("type"),
      remark: this.post("remark"),
      add_time: dayjs().unix()
    }
    let model = this.model("assets");
    let res = await model.add(params);

    this.model("operatelog").addLog(1, res.id, this.post("user_id"), this.post("user_name"), "", params.name);
    this.success(res);
  }

  async getAssetsListAction() {
    let page = this.get("page") || 1;
    let size = this.get("size") || 10;
    let model = this.model("assets");
    let res = await model.page(page, size).where({
      is_delete: 0
    }).countSelect();
    let list = res.data;
    this.success({
      list: list,
      total: res.count
    })
  }

  async addManyAssetsAction() {
    let list = JSON.parse(this.post("assets_json"));
    let model = this.model("assets");
    let res = await model.addMany(list);

    let nameList = [];
    for (let item of list) {
      nameList.push(item.name);
    }
    this.model("operatelog").addLog(1, res.join(","), this.post("user_id"), this.post("user_name"), "", nameList.join(","));
    this.success({
      list: res
    });
  }

  async updateAssetsAction() {
    let model = this.model("assets");
    let res1 = await model.where({
      id: this.post("assets_id")
    }).find();
    if (think.isEmpty(res1)) {
      return this.fail("assets_id不存在！", {});
    }

    let params = {};
    if (this.post("assets_model")) {
      params.assets_model = this.post("assets_model");
    }
    if (this.post("status")) {
      params.status = this.post("status");
    }
    if (this.post("name")) {
      params.name = this.post("name");
    }
    if (this.post("type")) {
      params.type = this.post("type");
    }
    if (this.post("factory_name")) {
      params.factory_name = this.post("factory_name");
    }
    if (this.post("serial_no")) {
      params.serial_no = this.post("serial_no");
    }
    if (this.post("own_user_id")) {
      params.own_user_id = this.post("own_user_id");
      if (!this.post("own_user_name")) {
        this.fail("修改所属人时own_user_name为必传！", {})
      }
      params.own_user_name = this.post("own_user_name");
      params.status = 5;
      this.model("operatelog").addLog(4, res1.id, this.post("user_id"), this.post("user_name"), params.own_user_id, res1.name);
    }
    if (this.post("place")) {
      params.place = this.post("place");
    }
    if (this.post("remark")) {
      params.place = this.post("remark");
    }

    if (think.isEmpty(params)) {
      return this.fail("你没有任何修改的参数！", {});
    } else {
      params.up_time = dayjs().unix();
    }
    let res = await model.where({
      id: this.post("assets_id")
    }).update(params);
    this.model("operatelog").updateLog(3, res1.id, this.post("user_id"), this.post("user_name"), "", res1.name, JSON.stringify(res1), JSON.stringify(params));
    if (res1.status != params.status) {
      this.model("operatelog").updateLog(5, res1.id, this.post("user_id"), this.post("user_name"), "", res1.name, JSON.stringify(res1), JSON.stringify(params));
    }
    if (res) {
      this.success({});
    } else {
      this.fail("修改失败！", {});
    }
  }

  async deleteAssetsAction() {
    let delArr = this.post("assets_ids").split(",");

    let list = [];
    for (let id of delArr) {
      list.push({
        id: id,
        is_delete: 1,
        del_time: dayjs().unix()
      })
    }

    let model = this.model("assets");
    let res = await model.updateMany(list);
    this.model("operatelog").addLog(2, delArr.join(","), this.post("user_id"), this.post("user_name"), "", "");
    if (res) {
      this.success({});
    } else {
      this.fail("删除失败！", {});
    }
  }

  async allotAssetsAction() {
    let params = {
      own_user_name: this.post("own_user_name"),
      own_user_id: this.post("own_user_id"),
      allot_time: dayjs().unix()
    }

    let model = this.model("assets");
    let res1 = await model.where({
      id: this.post("assets_id"),
      is_delete: 0
    }).find();
    if (think.isEmpty(res1)) {
      return this.fail("assets_id不存在！", {});
    }

    let res = await model.where({
      id: this.post("assets_id")
    }).update(params);
    this.model("operatelog").addLog(4, res1.id, this.post("user_id"), this.post("user_name"), params.own_user_id, res1.name);
    if (res) {
      this.success({});
    } else {
      this.fail("分配失败！", {});
    }
  }

  async getAssetsTypeAction() {
    let model = this.model("assetstype");
    let res = await model.select();

    this.success({
      list: res
    })
  }

  async addAssetsTypeAction() {
    let name = this.post("type_name")
    let model = this.model("assetstype");
    let res = await model.where({
      type_name: name
    }).thenAdd({
      type_name: name,
      add_time: dayjs().unix(),
      is_def: 0
    });

    if (res.type === "exist") {
      this.fail("分类已存在！", {});
    } else {
      this.success({
        id: res.id
      });
    }
  }

  async getAssetsStatusAction() {
    let model = this.model("assetsstatus");
    let res = await model.select();

    this.success({
      list: res
    })
  }

  async addAssetsStatusAction() {
    let name = this.post("status_name")
    let model = this.model("assetsstatus");
    let res = await model.where({
      status_name: name
    }).thenAdd({
      status_name: name,
      add_time: dayjs().unix(),
      is_def: 0
    });

    if (res.type === "exist") {
      this.fail("状态已存在！", {});
    } else {
      this.success({
        id: res.id
      });
    }
  }

  async getUserAssetsAction() {
    let page = this.get("page") || 1;
    let size = this.get("size") || 10;
    let own_id = this.get("own_id");
    let model = this.model("assets");

    let res = await model.page(page, size).where({
      own_user_id: own_id,
      is_delete: 0
    }).countSelect();
    let list = res.data||[];
    this.success({
      list: list,
      total: res.count||0
    })
  }

  async getStatusCountAction(){
    let count = {};

    let model = this.model("assets");
    let all = await model.count();
    count.all = all;

    let model1 = this.model("assetsstatus");
    let resStatus = await model1.select();

    for(let item of resStatus){
      let itemCount = await model.where({status:item.id}).count();
      count[`${item.status_name}`]=itemCount;
    }
    
    this.success(count);
  }


};
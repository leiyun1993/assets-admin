const Base = require('./base.js');

module.exports = class extends Base {
  indexAction() {
    return this.display();
  }

  async getLogsAction() {
    let page = this.get("page") || 1;
    let size = this.get("size") || 10;
    let type = this.get("type");
    let assetsID = this.get("assets_id");
    let model = this.model("operatelog");
    let params = {};

    if(type){
      params.type = type;
    }

    if(assetsID){
      params.assets_id = assetsID;
    }

    let res = await model.page(page, size).where(params).countSelect();
    let list = res.data;
    this.success({
      list: list,
      total: res.count
    })
    
  }

};
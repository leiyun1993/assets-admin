const Base = require('./base.js');

module.exports = class extends Base {
  indexAction() {
    return this.display();
  }

  async getLogsAction() {
    let page = this.get("page") || 1;
    let size = this.get("size") || 10;
    let type = this.get("type");
    let model = this.model("operatelog");

    if (!type) {
      let res = await model.page(page, size).countSelect();
      let list = res.data;
      this.success({
        list: list,
        total: res.count
      })
    }else{
      let res = await model.page(page, size).where({type:type}).countSelect();
      let list = res.data;
      this.success({
        list: list,
        total: res.count
      })
    }
  }
};
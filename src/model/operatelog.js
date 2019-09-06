import dayjs from "dayjs";
module.exports = class extends think.Model {


    addLog(type,assets_id,user_id,user_name,own_id,assets_name){
        this.add({
            type:type,
            assets_id:assets_id,
            user_id:user_id,
            user_name:user_name,
            own_id:own_id,
            assets_name:assets_name,
            add_time:dayjs().unix()
        })
    }
};

"use strict";
export default {
    checkGet(data, keyArray) {
        let error = [];
        for (let key of keyArray) {
            if (!data.get(key)) {
                error.push(`${key}为必填项`);
            }
        }
        return error.join("、");
    },
    checkPost(data, keyArray) {
        let error = [];
        for (let key of keyArray) {
            if (!data.post(key)) {
                error.push(`${key}为必填项`);
            }
        }
        return error.join("、");
    },
    checkParams(data, keyArray) {
        let error = [];
        for (let key of keyArray) {
            if (!data[key]) {
                error.push(`${key}为必填项`);
            }
        }
        return error.join("、");
    }
}
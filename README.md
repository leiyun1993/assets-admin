### BASE_URL
```
http://118.24.239.242:8361
```
### 添加用户-注册
```
URL: /user/register
METHOD: POST
```
| 参数名    | 必选 | 类型   | 说明   |
| :-------- | :--- | :----- | ------ |
| user_name | 是   | string | 用户名 |
| password  | 是   | string | 密码   |
| nick_name | 否   | string | 昵称   |
| avatar    | 否   | string | 头像   |
| position  | 否   | string | 职位   |

**返回示例**
```json
{
    "code": 1004,
    "msg": "用户名已存在！",
    "data": {}
}
```
### 登录
```
URL: /user/login
METHOD: POST
```
| 参数名    | 必选 | 类型   | 说明   |
| :-------- | :--- | :----- | ------ |
| user_name | 是   | string | 用户名 |
| password  | 是   | string | 密码   |

**返回示例**
```json
{
    "code": 0,
    "msg": "",
    "data": {
        "user_id": 1,
        "user_name": "test1",
        "nick_name": "testNick",
        "avatar": "",
        "add_time": "0",
        "up_time": "",
        "position": "",
        "auth": ""
    }
}
```
### 用户列表
```
URL: /user/getUserList
METHOD: GET
```
| 参数名 | 必选 | 类型   | 说明            |
| :----- | :--- | :----- | --------------- |
| page   | 否   | string | 页码 默认1      |
| size   | 否   | string | 每页数量 默认10 |

**返回示例**
```json
{
    "code": 0,
    "msg": "",
    "data": {
        "list": [
            {
                "id": 1,
                "user_name": "test1",
                "nick_name": "testNick",
                "avatar": "",
                "add_time": "0",
                "up_time": "",
                "position": " ",
                "auth": []
            }
        ],
        "total": 4
    }
}
```

### 添加资产
```
URL: /assets/addAssets
METHOD: POST
```
| 参数名        | 必选 | 类型   | 说明                                               |
| :------------ | :--- | :----- | -------------------------------------------------- |
| assets_model  | 是   | string | 型号                                               |
| status        | 是   | string | 状态                                               |
| name          | 是   | string | 资产名字                                           |
| factory_name  | 是   | string | 厂家名字                                           |
| serial_no     | 是   | string | 序列号                                             |
| place         | 是   | string | 地方                                               |
| own_user_name | 是   | string | 所属人名 分配时带上                                |
| own_user_id   | 是   | string | 所属人ID 分配时带上                                |
| own_user_name | 是   | string | 地方                                               |
| type          | 是   | string | 类型                                               |
| remark        | 否   | string | 这个自定义列暂时不好实现，用备注要记录想加的信息吧 |

**返回示例**
```json
{
    "code": 0,
    "msg": "",
    "data": {}
}
```
### 资产列表
```
URL: /assets/getAssetsList
METHOD: GET
```
| 参数名 | 必选 | 类型   | 说明            |
| :----- | :--- | :----- | --------------- |
| page   | 否   | string | 页码 默认1      |
| size   | 否   | string | 每页数量 默认10 |

**返回示例**
```json
{
    "code": 0,
    "msg": "",
    "data": {
        "list": [
            {
                "id": 1,
                "assets_model": "型号",
                "status": 1,
                "name": "资产名字",
                "factory_name": "厂家名字",
                "serial_no": "序列号",
                "own_user_name": "",
                "own_user_id": null,
                "place": "地方",
                "add_time": "1567758403",
                "up_time": "",
                "del_time": "",
                "allot_time": "",
                "is_delete": "0"
            }
        ],
        "total": 4
    }
}
```

### 批量添加
```
URL: /assets/addManyAssets
METHOD: POST
```
| 参数名      | 必选 | 类型   | 说明                                                                                                                 |
| :---------- | :--- | :----- | -------------------------------------------------------------------------------------------------------------------- |
| assets_json | 是   | string | [{"assets_model":"型号","status":1,"name":"资产名字","factory_name":"厂家名字","serial_no":"序列号","place":"地方"}] |

**返回示例**
```json
{
    "code": 0,
    "msg": "",
    "data": {
        "list": [
            6
        ]
    }
}
```

### 修改资产信息
```
URL: /assets/updateAssets
METHOD: POST
```
| 参数名    | 必选 | 类型   | 说明               |
| :-------- | :--- | :----- | ------------------ |
| assets_id | 是   | string | 需要修改的数据的id |
| 其他字段  | 否   | string | 对应添加的数据字段 |
**返回示例**
```json
{
    "code": 0,
    "msg": "",
    "data": {}
}
```

### 删除资产信息
```
URL: /assets/deleteAssets
METHOD: POST
```
| 参数名     | 必选 | 类型   | 说明                             |
| :--------- | :--- | :----- | -------------------------------- |
| assets_ids | 是   | string | 需要删除的数据的ids 例：1  1,2,3 |
**返回示例**
```json
{
    "code": 0,
    "msg": "",
    "data": {}
}
```

### 分配资产信息
```
URL: /assets/allotAssets
METHOD: POST
```
| 参数名        | 必选 | 类型   | 说明       |
| :------------ | :--- | :----- | ---------- |
| assets_id     | 是   | string | 分配的ID   |
| own_user_id   | 是   | string | 所属人ID   |
| own_user_name | 是   | string | 所属人name |
**返回示例**
```json
{
    "code": 0,
    "msg": "",
    "data": {}
}
```

### 获取资产分类
```
URL: /assets/getAssetsType
METHOD: GET
```
| 参数名 | 必选 | 类型   | 说明 |
| :----- | :--- | :----- | ---- |
|        | 否   | string |      |
**返回示例**
```json
{
    "code": 0,
    "msg": "",
    "data": {
        "list": [
            {
                "id": 1,
                "type_name": "device",
                "add_time": "1567834982",
                "is_def": 1
            },
            {
                "id": 2,
                "type_name": "computer",
                "add_time": "1567834982",
                "is_def": 1
            },
            {
                "id": 3,
                "type_name": "phone",
                "add_time": "1567834982",
                "is_def": 1
            },
            {
                "id": 4,
                "type_name": "consumables",
                "add_time": "1567834982",
                "is_def": 1
            },
            {
                "id": 5,
                "type_name": "licenses",
                "add_time": "1567834982",
                "is_def": 1
            }
        ]
    }
}
```

### 添加资产分类
```
URL: /assets/addAssetsType
METHOD: POST
```
| 参数名    | 必选 | 类型   | 说明 |
| :-------- | :--- | :----- | ---- |
| type_name | 是   | string | 分类 |
**返回示例**
```json
{
    "code": 0,
    "msg": "",
    "data": {
        "id": 9
    }
}
```

### 获取资产状态
```
URL: /assets/getAssetsStatus
METHOD: GET
```
| 参数名 | 必选 | 类型   | 说明 |
| :----- | :--- | :----- | ---- |
|        | 否   | string |      |
**返回示例**
```json
{
    "code": 0,
    "msg": "",
    "data": {
        "list": [
            {
                "id": 1,
                "status_name": "active",
                "add_time": "1567838989",
                "is_def": "1"
            },
            {
                "id": 2,
                "status_name": "broken",
                "add_time": "1567838989",
                "is_def": "1"
            },
            {
                "id": 3,
                "status_name": "lose",
                "add_time": "1567838989",
                "is_def": "1"
            },
            {
                "id": 4,
                "status_name": "sending",
                "add_time": "1567838989",
                "is_def": "1"
            },
            {
                "id": 5,
                "status_name": "active_allot",
                "add_time": "1567838989",
                "is_def": "1"
            }
        ]
    }
}
```

### 添加资产状态
```
URL: /assets/addAssetsStatus
METHOD: POST
```
| 参数名      | 必选 | 类型   | 说明   |
| :---------- | :--- | :----- | ------ |
| status_name | 是   | string | 新状态 |
**返回示例**
```json
{
    "code": 0,
    "msg": "",
    "data": {
        "id": 9
    }
}
```

### 用户拥有的资产信息
```
URL: /assets/getUserAssets
METHOD: GET
```
| 参数名 | 必选 | 类型   | 说明   |
| :----- | :--- | :----- | ------ |
| own_id | 是   | string | 拥有者 |
**返回示例**
```json
{
    "code": 0,
    "msg": "",
    "data": {
        "list": [
            {
                "id": 3,
                "assets_model": "型号",
                "status": 5,
                "name": "资产名字",
                "type": "0",
                "factory_name": "厂家名字",
                "serial_no": "序列号",
                "own_user_name": "test",
                "own_user_id": "1",
                "place": "地方",
                "add_time": "1567758461",
                "up_time": "",
                "del_time": "",
                "allot_time": "",
                "is_delete": "0"
            }
        ],
        "total": 1
    }
}
```

### 资产总量和状态分布
```
URL: /assets/getStatusCount
METHOD: POST
```
| 参数名 | 必选 | 类型   | 说明 |
| :----- | :--- | :----- | ---- |
|        | 是   | string |      |
**返回示例**
```json
{
    "code": 0,
    "msg": "",
    "data": {
        "all": 8,
        "active": 7,
        "broken": 0,
        "lose": 0,
        "sending": 0,
        "active_allot": 1
    }
}
```
### 资产的历史操作记录
```
URL: /log/getLogs
METHOD: GET
```
| 参数名    | 必选 | 类型   | 说明                                                                  |
| :-------- | :--- | :----- | --------------------------------------------------------------------- |
| page      | 否   | string | 页码 默认1                                                            |
| size      | 否   | string | 每页数量 默认10                                                       |
| type      | 否   | string | 记录类型：1：新增资产 2：删除资产 3：修改资产 4：分配资产 5：改变状态 |
| asstes_id | 否   | string | 关联资产的ID                                                          |
**返回示例**
```json
{
    "code": 0,
    "msg": "",
    "data": {
        "list": [
            {
                "id": 2,
                "type": 1,
                "assets_id": "8",
                "user_id": 1,
                "user_name": "test1",
                "own_id": 0,
                "add_time": "1567765105",
                "assets_name": "资产名字",
                "new_json": "",
                "old_json": ""
            }
        ],
        "total": 1
    }
}
```

### 添加权限
```
URL: /auth/addAuth
METHOD: POST
```
| 参数名    | 必选 | 类型   | 说明     |
| :-------- | :--- | :----- | -------- |
| auth_name | 是   | string | 权限名字 |
| auth_name | 是   | string | 权限CODE |
**返回示例**
```json
{
    "code": 0,
    "msg": "",
    "data": {}
}
```

### 权限权限列表
```
URL: /auth/getAuthList
METHOD: GET
```
| 参数名 | 必选 | 类型 | 说明 |
| :----- | :--- | :--- | ---- |
**返回示例**
```json
{
    "code": 0,
    "msg": "",
    "data": {
        "list": [
            {
                "id": 1,
                "auth_name": "列表查看",
                "auth_code": "assetsList",
                "add_time": "1567844626"
            }
        ]
    }
}
```

### 添加权限
```
URL: /auth/setAuth
METHOD: POST
```
| 参数名       | 必选 | 类型   | 说明         |
| :----------- | :--- | :----- | ------------ |
| auth_user_id | 是   | string | 需要权限的ID |
| auth_codes   | 是   | string | 逗号分隔     |
**返回示例**
```json
{
    "code": 0,
    "msg": "",
    "data": {}
}
```

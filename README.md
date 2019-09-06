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
                "auth": " "
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
| 参数名        | 必选 | 类型   | 说明                |
| :------------ | :--- | :----- | ------------------- |
| assets_model  | 是   | string | 型号                |
| status        | 是   | string | 状态                |
| name          | 是   | string | 资产名字            |
| factory_name  | 是   | string | 厂家名字            |
| serial_no     | 是   | string | 序列号              |
| place         | 是   | string | 地方                |
| own_user_name | 是   | string | 所属人名 分配时带上 |
| own_user_id   | 是   | string | 所属人ID 分配时带上 |
| own_user_name | 是   | string | 地方                |

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

### 获取记录列表
```
URL: /log/getLogs
METHOD: POST
```
| 参数名 | 必选 | 类型   | 说明                                                      |
| :----- | :--- | :----- | --------------------------------------------------------- |
| page   | 否   | string | 页码 默认1                                                |
| size   | 否   | string | 每页数量 默认10                                           |
| type   | 否   | string | 记录类型：1：新增资产 2：删除资产 3：修改资产 4：分配资产 |

**返回示例**
```json
{
    "code": 0,
    "msg": "",
    "data": {
        "list": [
            {
                "id": 1,
                "type": 1,
                "assets_id": "7",
                "user_id": 1,
                "own_id": 0,
                "add_time": "1567764177",
                "assets_name": "资产名字"
            }
        ],
        "total": 1
    }
}
```


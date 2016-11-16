# codingRuleView-编码规则展示

####功能示例

![示例](https://github.com/huang-qing/codingRuleView/raw/master/codingRuleView-Example.png)

~~~javascript

    $("#demo").codingRuleView([{
        type:"01",
        length:5,
        name:"数字类型-长度为5"
    },{
        type:"02",
        length:6,
        name:"字符类型-长度为6"
    },{
        type:"05",
        length:3,
        name:"日期类型-长度为5"
    },{
        type:"03",
        length:0,
        name:"字母|数字类型-长度为任意"
    }]);

~~~


#### 参数

+   类型：数组

+   单个对象结构

~~~javascript
        {
            type:"01", 
            length:5, 
            name:"编码规则文字解释" 
        }

~~~

#### type(编码类型):

+ "01": 数字类型
+ "02": 字母类型
+ "03": 数字|字母类型
+ "04": 流水码类型
+ "05": 日期类型

#### length(编码长度): 

有效值为0到正无穷大。长度为0时，表示任意长度。

#### name(编码规则文字解释):

编码规则的文字描述

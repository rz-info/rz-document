## `sort(arr: any, type: number)`

```js
const arr = [1,2,3,1,2,3,1,2,3];
sort(arr,1); // [1, 1, 1, 2, 2, 2, 3, 3, 3]
```

描述：数组排序，修改原数组

参数：arr：目标数组； type：排序方式（1正序, 2倒序, 3随机）

返回值：排序后的原数组


## `deWeight(arr: Array<string>)`

```js
const arr = [1,2,3,1,2,3,1,2,3];
deWeight(arr); // [1, 2, 3]
```

描述：数组去重，不修改原数组

参数：arr：目标数组

返回值：去重后的新数组


## `cloneObj(obj: object)`

```js
const obj = [1,2,3,1,2,3,1,2,3];
cloneObj(obj); // [1, 2, 3, 1, 2, 3, 1, 2, 3]
```

描述：对象/数组深拷贝

参数：obj：目标对象

返回值：目标对象的深拷贝对象


## `handelMobile(value)`

```js
const phone = 12312341234;
handelMobile(obj); // 123****1234
```

描述：手机号中间四位显示星号

参数：手机号码

返回值：修改后的字符串


## `formatDate(date: any)`

```js
const nowDate = new Date();
formatDate(nowDate); // 2020-09-01
```

描述：格局化日期：yyyy-MM-dd

参数：日期对象

返回值：格式化后的字符串

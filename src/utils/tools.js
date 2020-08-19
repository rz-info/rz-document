/**
 * @description: 对象深拷贝
 * @param {type}
 * @return:obj
 * @author: 李咪
 */
export function cloneObj(obj) {
  let ret;
  if (Array.isArray(obj)) {
    ret = []; // 创建一个空数组
    for (let i = 0; i < obj.length; i++) {
      ret[i] = cloneObj(obj[i]);
    }
    return ret;
  } else if (Object.prototype.toString.call(obj) === "[object Object]") {
    ret = {}; // 创建一个空对象
    for (let i in obj) {
      ret[i] = cloneObj(obj[i]);
    }
    return ret;
  } else {
    return obj;
  }
}

// 生成导出配置
// [{
//   name: '',
//   prop: ''
// }]
export function createExportConfig(list, ignoreList = []) {
  const reqArr = [];
  list.forEach((ele, i) => {
    if (ignoreList.includes(ele.name)) return;
    reqArr.push({
      id: i + 1,
      itemName: ele.name,
      [ele.prop]: ele.name
    });
  });
  return reqArr;
}

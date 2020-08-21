/*
 * @Author: 李咪
 * @Date: 2020-02-05 14:58:09
 * @LastEditTime: 2020-06-24 10:46:08
 * @LastEditors: Please set LastEditors
 * @Version:
 * @Description:js工具类
 * @FilePath: \v2.0.1\src\utils\tools.ts
 */

/**
 * @description: url 参数指定key获取
 * @param {type}
 * @return:name||null
 * @author: 李咪
 */

export function getUrlParam(name: string) {
  var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
  var r = decodeURI(window.location.search)
    .substr(1)
    .match(reg);
  if (r != null) return r[2];
  return null;
}

/**
 * @description: 数组排序
 * @param {type} 1：从小到大   2：从大到小   3：随机
 * @return: arr
 * @author: 李咪
 */
export function sort(arr: any, type: number) {
  return arr.sort((a, b) => {
    switch (type) {
      case 1:
        return a - b;
      case 2:
        return b - a;
      case 3:
        return Math.random() - 0.5;
      default:
        return arr;
    }
  })
}
/**
 * @description: 数组去重
 * @param {type}
 * @return:newArr
 * @author: 李咪
 */

export function deWeight(arr: Array<string>) {
  if (Array.hasOwnProperty("from")) return Array.from(new Set(arr));
  var newArr = [];
  var flag = true;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] !== arr[i]) {
      if (flag && newArr.indexOf(arr[i]) === -1) {
        newArr.push(arr[i]);
        flag = false;
      }
    } else {
      if (newArr.indexOf(arr[i]) === -1) newArr.push(arr[i]);
    }
  }
  return newArr;
}


/**
 * @description:两数组取差集
 * @param {type}
 * @return:newArr
 * @author: 李咪
 */
export function diffArr(arr1, arr2) {
  return arr1.concat(arr2).filter(function (arg) {
    return !(arr1.indexOf(arg) >= 0 && arr2.indexOf(arg) >= 0);
  });
}


/**
 * @description: 对象深拷贝
 * @param {type}
 * @return:obj
 * @author: 李咪
 */
export function cloneObj(obj: object) {
  let ret: any;
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

/**
 * @description: 手机号中间四位显示星号
 * @param {type}
 * @return:string
 * @author: 李咪
 */
export function handelMobile(value) {
  if (!value) return "";
  if (typeof value !== "string") value = value.toString();
  return value.replace(/^(\d{3})\d*(\d{4})$/, "$1****$2");
}

/**
 * @description: 格局化日期：yyyy-MM-dd
 * @param {type}
 * @return:string
 * @author: 李咪
 */
export function formatDate(date: any) {
  let year = date.getFullYear();
  let month = date.getMonth() + 1;
  let weekDay = date.getDate();

  if (month < 10) {
    month = "0" + month;
  }
  if (weekDay < 10) {
    weekDay = "0" + weekDay;
  }
  return year + "-" + month + "-" + weekDay;
}

/**
 * @description: 日期yy-mm-dd加n天
 * @param {type}
 * @return:日期 string
 * @author: 李咪
 */
export function addDate(date: string, days: number) {
  let d: any = new Date(date);
  d.setDate(d.getDate() + days);
  let m = d.getMonth() + 1;
  return d.getFullYear() + "-" + m + "-" + d.getDate();
}

/**
 * @description: 防抖函数
 * @param {type}
 * @return:fn
 * @author: 李咪
 */
export const Debounce = (fn: any, t: number) => {
  let delay: number = t || 1500;
  let timer: any;
  return function () {
    let args: any = arguments;
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      timer = null;
      fn.apply(this, args);
    }, delay);
  };
};

/**
 * @description: 节流函数
 * @param {type} 
 * @return: fn
 * @author: 李咪
 */
export const throttle = (fn: any, wait: number) => {
  var pre = Date.now();
  return function () {
    let context = this;
    let args = arguments;
    let now = Date.now();
    if (now - pre >= wait || 1000) {
      fn.apply(context, args);
      pre = Date.now();
    }
  }
}
/**
 * @description: 文件大小格式化
 * @param {type} size 大小
 * @return: 
 * @author: 李咪
 */
export const formatterSizeUnit = (size) => {

  if (size) {
    let result: any = parseInt(size);
    if (result < 1024) {
      return result + " B";
    } else if (result < 1024 * 1024) {
      return Math.ceil(result / 1024) + " KB";
    } else if (result < 1024 * 1024 * 1024) {
      return Math.ceil(result / (1024 * 1024)) + " MB";
    } else {
      return Math.ceil(result / (1024 * 1024 * 1024)) + " GB";
    }
  }
}


//获取当前时间并格式化
export function getNowDate() {
  const date = new Date();
  let month: string | number = date.getMonth() + 1;
  let strDate: string | number = date.getDate();
  let hours: string | number = date.getHours();
  let minutes: string | number = date.getMinutes();
  if (month <= 9) {
    month = "0" + month;
  }
  if (strDate <= 9) {
    strDate = "0" + strDate;
  }
  if (hours <= 9) {
    hours = "0" + hours;
  }
  if (minutes <= 9) {
    minutes = "0" + minutes;
  }
  return (
    date.getFullYear() +
    "-" +
    month +
    "-" +
    strDate + ' ' + hours + ':' + minutes
  );
}
//获取当前时间并格式化
export function getNowDateHour() {
  const date = new Date();
  return (
    date.getHours() +
    ":" +
    date.getMinutes()
  );
}
/**
 * @description: 数组中对象去重
 * @param {type}
 * @return:newArr
 * @author: limi
 */
export function unique(arr: any, u_key: string) {
  let result = []
  result[0] = arr[0]
  arr.forEach((meta_item, i) => {
    //声明计数变量，如果源数组中的一个对象和result结果数组中的所有对象不同，就push
    let num = 0
    result.forEach((r_item, j) => {
      if (meta_item[u_key] !== r_item[u_key]) {
        num++
      }
      if (num === result.length) {
        result.push(meta_item)
      }
    })
  })
  return result
}


// 生成导出配置
// [{
//   name: '',
//   prop: ''
// }]
export function createExportConfig(list: any[], ignoreList: any[] = []) {
  const reqArr = [];
  list.forEach((ele, i) => {
    if (ignoreList.includes(ele.name)) return;
    reqArr.push({
      id: i + 1,
      itemName: ele.name,
      [ele.prop]: ele.name
    })
  })
  return reqArr;
}

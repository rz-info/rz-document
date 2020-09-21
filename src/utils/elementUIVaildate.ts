// elementUI 校验

const vaildateMap: Object = {
    // 数字, 可为小数
    isDecimal: {
        vaildate: /^\d+(\.\d+)?$/,
        message: '请输入数字'
    },
    // 正整数
    isPositiveInteger: {
        vaildate: /^[+]{0,1}(\d+)$/g,
        message: '请输入0及0以上的整数'
    }
}


export default function getVaildate(type) {
    const map = vaildateMap[type];
    if (map) {
        return function vaildateFn(rule, value, callback) {
            if (value && !map.vaildate.test(value)) {
                callback(new Error(map.message));
            } else {
                callback();
            }
        }
    }
    console.error('无校验规则');
}

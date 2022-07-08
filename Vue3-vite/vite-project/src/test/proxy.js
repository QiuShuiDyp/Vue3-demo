// proxy实现代理响应式
let getDouble = (n) => n * 2;
let obj = {};
let count = 1;
let double = getDouble(count);

// 通过代理的方式实现响应式
let proxy = new Proxy(obj, {
  get(target, prop) {
    return target[prop];
  },
  set(target, prop, value) {
    target[prop] = value;
    if (prop === "count") {
      double = getDouble(value);
    }
  },
  deleteProperty(target, prop) {
    delete target[prop];
    if (prop === "count") {
      double = NaN;
    }
  },
});

console.log(obj.count, double);
proxy.count = 2;
console.log(obj.count, double);
delete proxy.count;
console.log(obj.count, double);

// 输出结果：
// undefined 2
// 2 4
// undefined NaN

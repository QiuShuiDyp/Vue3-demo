// object.defineProperty实现响应式
let getDouble = (n) => n * 2;
let obj = {};
let count = 1;
let double = getDouble(count);
Object.defineProperty(obj, "count", {
  get() {
    return count;
  },
  set(val) {
    count = val;
    double = getDouble(val);
  },
});
console.log(double);
obj.count = 2;
console.log(double);
// defineProperty的缺陷在于部分操作无法实现监听，比如delete
delete obj.count;
console.log(double);

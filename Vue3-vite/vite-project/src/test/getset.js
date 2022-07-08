// vue3中的ref是通过利用对象的get和set函数来进行监听的
let getDouble = (n) => n * 2;
let _value = 1;
let double = getDouble(_value);
let count = {
  get value() {
    return _value;
  },
  set value(val) {
    _value = val;
    double = getDouble(_value);
  },
};

console.log(count.value, double);
count.value = 2;
console.log(count.value, double);

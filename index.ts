// Глава 8 (68)
interface iUser {
  name: string;
  age: number;
  haveCar: boolean
}

const user: iUser = {
  name: "Джо",
  age: 25,
  haveCar: false
}

type keysOfUser = keyof iUser;   // Мы используем keyof для получения ключей из интерфейса/объекта/класса, т.е тут мы передали ключи из интерфейса "iUser" в type "keysOfUser"
const testKey: keysOfUser = "haveCar"  //константу "testKey" мы типизируем с помощью. type "keysOfUser", следовательно, мы можем передать туда только те значения, 
                                       //которые мы извлекли ранее(строка 13) из интерфейса "iUser".


// функция getValue объявлена с дженериками "T" и "K", она принимает два параметра/аргумента: obj - объект, key - ключ объекта, которые, в свою очередь, типизированы с помощью "T" и "K"
// дженерик "K" экстендится/наследуется от "T", т.е мы извлекаем ключи из "obj: T" и передаем их в "key: K". Теперь, если мы в качестве первого агрумента передаем объект "user", 
//то второй аргумент может принимать только строку, которая ровна какому-то из ключей объекта "user", т.е "key: "name" | "age" | "haveCar"
const getValue = <T, K extends keyof T>(obj: T, key: K) => {
  return obj[key]
}


console.log(getValue(user, "age") )

//Глава 8 (70) keyof + typeof (извлекаем ключи из объекта)

 let strOrNumber: string | number  // мы можем с помощью "typeof" обозначить типы (на данный момент union) от другой переменной, 
 let param: typeof strOrNumber    // т.е переиспользовать их. 


const obj = {
    name: "Бобо",
    age: 44,
}

let keyOfUser: keyof typeof obj = "name" // комбинация keyof + typeof позволяет нам извлечь ключи из объекта, а затем присвоить их в качестве типав

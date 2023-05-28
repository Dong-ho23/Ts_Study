// let myCat = new Object(); // Object의 property에 length, weight가 없음
// myCat.length = 45.0;
// myCat.weight = 4.0; // JS에서의 정의

// let myCat = {}; // Object의 property에 length, weight가 없음
// myCat.length = 45.0;
// myCat.weight = 4.0; // JS에서의 정의

// 타입스크립트의 객체 생성
// 1. 클래스의 정의
// 2. 객체 생성: new

/* // 1.
class Cat {
  length: number;
  weight: number;
}

// 2.
let myCat = new Cat();
myCat.length = 45.0;
myCat.weight = 4.0;
console.log(myCat); */

/* // 1.
class Cat {
  length: number;
  weight: number;
  meow():string{
    return "ニャー";
  }
  eat(){
    this.length += 0.1;
    this.weight += 0.1;
    return "먹었음";  // 이 라인이 없으면 undefined 가 반환됨
  }
}

// 2.
let myCat = new Cat();
myCat.length = 45.0;
myCat.weight = 4.0;

// const msg = `고양이는 ${myCat.meow()} 라고 울고, 키는 ${myCat.length}입니다.`;
const msg = `고양이는 ${myCat['meow']()} 라고 울고, ${myCat['eat']()} 먹고나면, 키는 ${myCat['length']}입니다.`;

console.log(msg); */

/* class Cat {
  length: number;
  weight: number;
  private name: string;
  constructor();
  constructor(s:string)
  constructor(s?:any) {
    if(typeof(s)=="string") {
      this.name = s;
    } else {
      this.name = "이름없는 고양이";
    }
  }
  meow():string;
  meow(s:string):string;
  meow(s?:any):string{
    if(typeof(s) == "string") {
      return s;
    } else {
      return "にゃーん";
    }
  }
  eat(){
    this.length += 0.1;
    this.weight += 0.1;
    return "먹었음";  // 이 라인이 없으면 undefined 가 반환됨
  }
  setName(inputName:string) {
    this.name = inputName.slice(0,8); // 문자열의 인덱스가 0~7까지의 문자열을 잘라내어 저장
  }
  getName():string {
    return this.name;
  }
}

let myCat = new Cat();
let myCat1 = new Cat("일본IT");
myCat.length = 45.0;
myCat.weight = 4.0;

myCat1.length = 43.0;
myCat1.weight = 3.8;

// const msg = `고양이는 ${myCat.meow()} 라고 울고, 키는 ${myCat.length}입니다.`;
const msg = `고양이의 이름은 ${myCat.getName()}이고, ${myCat['meow']('test')} (이)라고 울고, ${myCat['eat']()} 먹고나면, 키는 ${myCat['length']}입니다.`;

myCat1.setName("흰둥이")

const msg1 = `고양이의 이름은 ${myCat1.getName()}이고, ${myCat1['meow']()} (이)라고 울고, ${myCat1['eat']()} 먹고나면, 키는 ${myCat1['length']}입니다.`;
console.log(msg, '\n', msg1); */


class Cat {
  private name: string;
  public setName(s: string) {
    this.name = s.slice(0, 8);
  }
  public getName(): string {
    return this.name;
  }
  public meow(): string {
    return "にゃーん";
  }
}

class Tiger extends Cat {  // （1）
  public meow(): string {  // （2）override
    return "がおー";
  }
}

var myTiger = new Tiger();  // （3）
myTiger.setName("とらお");  // （4）
alert("私の虎の名前は" + myTiger.getName() + "で、" + myTiger.meow() + "と鳴きます");  // （5）
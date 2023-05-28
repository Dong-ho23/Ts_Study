/* var price, total, taxrate : number;
price = 1200;   // （1）식: 변수=리터럴;
taxrate = 0.08; // （2）
total = price * (1 + taxrate);  // （3）식: 변수 = 변수 *(리터럴 + 변수)
alert(total); */

/* class Monster{  // 사용자정의 데이터타입
  name:string;  // 名前
  hp:number;    // 生命力
}
var aMonster: Monster = new Monster();
aMonster.name = "スライム";     // （1）
aMonster.hp = 10;               // （2）
// alert(aMonster.name + "(" + aMonster.hp + ")が現れた!");    // （3）
alert(`${aMonster.name}(${aMonster.hp})が現れた!`); */

// var x, y: number;
// x = 10;
// y = x / 0;
// alert(y);

/* var count: number;
count = 0;
alert(count++);
alert(count); */

// var a:number = 10, b:number = 20;
// var c;
// c = a + 1, b, 30;      // （1）
// alert(c);

var age: number;
age = 30;
/* if(18 <= age < 25) {      // ageが18以上、25未満なら
  alert("範囲内です");    // 「範囲内です」と表示する
} */

if((18 <= age) && (age < 25)) {      // ageが18以上、25未満なら
  alert("範囲内です");    // 「範囲内です」と表示する
}

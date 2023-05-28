// const calcCost = (price:number, amount:number, discount?:number):number => {
//   // price, amount: required parameter
//   // discount?: optional parameter: last position

//   if(discount) {
//     return price*amount*(1-discount);
//   } else {
//     return price*amount;
//   }
// }

// const calcCost = (price:number, amount:number, discount = 0):number => {
//   // price, amount: required parameter
//   // discount = 0: optional parameter: default value assignment

//   if(discount) {
//     return price*amount*(1-discount);
//   } else {
//     return price*amount;
//   }
// }

// alert(calcCost(1200, 10));
// alert(calcCost(1200, 10, 0.5));

// function paramtest(arg1: number, arg2:number = 123,...restparam: number[])
// {
//   return (
//     "required param: " + 
//     arg1 +
//     "\noptional param: " + 
//     arg2 +
//     "\nfirst item of restparam: " + 
//     restparam[0] +
//     "\nlength of restparam: " 
//     + restparam.length
//     );
// }
// alert(paramtest(1, 2, 3, 4, 5));
// // alert(paramtest(1, , 3, 4, 5));
// alert(paramtest(1, undefined, 3, 4, 5));


// function getLength(x: number): number;   // （1）function headers
// function getLength(x: string): number;   // （2）function headers
// function getLength(x: any): number {   // （3）function headers + body
//   if (typeof (x) == "string") {
//     return x.length
//   } else {
//     if (x == 0) return 1;
//     return Math.floor(Math.log(x) / Math.LN10) + 1;   // （4）
//   }
// }
// alert(getLength(123));


/* function getLength(x: number): number;
function getLength(x: string, isCharUnit: boolean): number;   // （1）
function getLength(x: any, isCharUnit = true): number {   // （2）
  if (typeof (x) == "string") {
    if (isCharUnit) {
      return x.length;
    } else {   // （3）
      var sum = 0;
      for (var i = 0; i < x.length; i++) {
        if (x.charCodeAt(i) < 256) {
          sum += 1;
        } else {
          sum += 2;
        }
      }
      return sum;
    }
  } else {
    if (x == 0) return 1;
    return Math.floor(Math.log(x) / Math.LN10) + 1;
  }
}

alert(getLength("abc日本語가나다", false)); */

/* function getLength(x: number): number;
function getLength(x: string, isCharUnit: boolean): number;   // （1）
function getLength(x: any, isCharUnit = true): number {   // （2）
  if(typeof (x) !== "string") {
    if (x == 0) return 1;
    return Math.floor(Math.log(x) / Math.LN10) + 1;
  }
  
  if (isCharUnit) {
    return x.length;
  } else {   // （3）
    var sum = 0;
    for (var i = 0; i < x.length; i++) {
      if (x.charCodeAt(i) < 256) {
        sum += 1;
      } else {
        sum += 2;
      }
    }
    return sum;
  }
  
  // 공통 처리 부분
}

alert(getLength("abcd日本語가나다", false)); */


/* function getLength<T, U>(x: T): U { // （1）
  return x.length;  // （3）T에 length 속성 미정의
}
alert(getLength<string, number>("総称型"));  // （2） */


/* interface PROP {
  length: any;  // （1）
}
function getLength<T extends PROP, U>(x: T): U {  // （2）
  return x.length;
}
alert(getLength<string, number>("総称型")); */


// circular queue: 원형큐

/* function getCircleArray<T>(data: T[], idx: number): T {
  var index: number;
  index = idx % data.length;  // （1）index: 0~ data.length-1
  return data[index];
}
var a = [10, 20, 30, 40];
var dir = ["N", "E", "S", "W"];
alert(getCircleArray<number>(a, 5));  // （2）
alert(getCircleArray<string>(dir, 5));  // （3） */


/* function getSerialNumber() { // high order function 고차함수
  var origin = 0;  // （1）private 변수
  function countUp(delta: number): number {  // （2）
    return origin += delta;
  }
  return countUp; // （3）함수 반환
};
var inside = getSerialNumber(); // （4）inside === countUp
alert(inside(2)); // （5）0+2 = 2
alert(inside(3)); // （6）2+3 = 5 */


/* const testClosure = (()=>{
  let outerVar = 0;
  return (delta:number) => {
    return (outerVar += delta);
  };
})(); // 이름없는 함수를 정의하면서 호출하는 예제
alert(testClosure(4)); // （5）
alert(testClosure(7)); // （6） */


const f1 = (i:number) => (j:number) => (k:number) => i-- * ++j % k;

const f2 = f1(3); // i
const f3 = f2(2); // j
alert(f3(6)); // k

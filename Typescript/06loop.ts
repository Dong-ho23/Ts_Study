/* let count: number = 0;
let dice: number; // 주사위, サイコロ
dice = Math.floor(Math.random() * 6) + 1;   // （1）1~6 사이의 임의의 수
// n ~ m : Math.floor(Math.random() * (m-n+1)) + n
while (dice != 6) { // （2）dice의 값이 1~5의 값인 경우 true
  count++;          // （3）
  dice = Math.floor(Math.random() * 6) + 1; // （4）조건을 변경시킬 문장
}
alert(count);   // （5）
window.close(); // （6） */

// 변수에 대입, 함수 호출을 적게해야 성능이 더 좋음

/* let count: number = 0;
let dice: number;
do {
  dice = Math.floor(Math.random() * 6) + 1;      // （1）
  count++;      // （2）
} while (dice != 6);    // （3）
alert(count);
window.close(); */

/* let data: number[] = [10, 20, 30, 40, 50];
let sum: number;
for (var i in data) {
  if (i >= data.length - 1) break;      // （1）
  sum = data[i] + data[i + 1];  // （2）
  document.body.innerHTML += sum + "<br/>";
} */

/* let data = [10, 20, 30, 40, 50];
let sum;
for (var i in data) {
  console.log(typeof i);
  if (i >= data.length - 1) break;      // （1）
  sum = data[i] + data[i + 1];  // （2）
  document.body.innerHTML += sum + "<br/>";
} */

/* let data = [10, 20, 30, 40, 50];
let sum;
for (var i in data) {
  console.log(typeof i);
  if (i >= data.length - 1) break;      // （1）
  sum = data[parseInt(i)] + data[parseInt(i) + 1];  // （2）
  document.body.innerHTML += sum + "<br/>";
} */


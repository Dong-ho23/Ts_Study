var c: string, t: string;
var h: number, d: Date; // Date - 내장객체
d = new Date();
h = d.getHours();

if(h < 12) {
  c='skyblue';
  t='테스트 참인경우';
} else {
  c = 'lightyellow';
  t='테스트 거짓인경우';
}

document.title = t;
document.body.style.backgroundColor = c;

/* var a: number = 1;
alert(a == "1"); 
alert(a === "1");

// 비교 대상이 객체를 참조하는 변수인 경우, 같은 객체를 참조하는지 여부를 조사하기 때문에 데이터 타입도 값도 같은데도 불구하고 false가 될 수 있습니다.
var x1: String = new String("hoge");  // （1）
var x2: String = new String("hoge");  // （2）
alert(x1 == x2);  // false
alert(x1 === x2); // false

var x1: String = new String("hoge");
var x2: string = "hoge";
alert(x1 == x2);  // true
alert(x1 === x2); // false  */

/* 
// 出力
var rank: string[] = ["不可", "可", "良", "優"];
// 入力
var score_data = document.createElement('input');  // 入力ボックス
var rank_text = document.createElement('div');     // 成績表示用
// 作業用（内部）
var score, rnum: number;
//
score_data.type = "number";  // 入力ボックスを数値専用にする
score_data.addEventListener("keydown", showText, false);  // キーを押したらshowText関数を実行する……（1）
document.body.appendChild(score_data);  // ドキュメントの本文に入力ボックスを追加……（2）
document.body.appendChild(rank_text);   // ドキュメントの本文にテキストを追加
// showText関数（点数に対する評価を表示）
function showText(event: KeyboardEvent) {
  if (event.keyCode == 13 || event.keyCode == 9) {  // ［Enter］キーまたは［Tab］キーを押したら……（3）
    var s: number = score_data.valueAsNumber;  // 入力ボックスから数値を取得
    if (s < 60) {
      rnum = 0;
    } else if (s < 70) {
      rnum = 1;
    } else if (s < 80) {
      rnum = 2;
    } else {
      rnum = 3;
    }
    rank_text.innerText = rank[rnum];  // 成績を表示
  }
} */

/* var str: string = "hoge";
if(str.indexOf("1e")) alert("見つかった"); // ...  （1）（誤った書き方）
if(str.indexOf("te") != -1) alert("見つかった"); // ...  （2） */

var rank: string[] = ['不可','可','良','優'];

var score_data = document.createElement('input'); // <input></input>
let rank_text = document.createElement('div'); // <div></div>

let score, rnum : number;

score_data.type = "number"; // <input type="number"></input>
score_data.addEventListener('keydown', showText, false);
document.body.appendChild(score_data);
document.body.appendChild(rank_text);

function showText(event: KeyboardEvent) {
  if (event.keyCode == 13 || event.keyCode == 9) {  // ［Enter］キーまたは［Tab］キーを押したら……（3）
    let s: number = score_data.valueAsNumber;  // 入力ボックスから数値を取得
    if (s < 60) {
      rnum = 0;
    } else if (s < 70) {
      rnum = 1;
    } else if (s < 80) {
      rnum = 2;
    } else {
      rnum = 3;
    }
    rank_text.innerText = rank[rnum];  // 成績を表示
    //  innerHtml, textContent
    // https://hianna.tistory.com/483
  }
}
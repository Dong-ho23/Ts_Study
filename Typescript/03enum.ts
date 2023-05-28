/* enum SEASONS{SPRING, SUMMER, AUTUMN, WINTER};
// enum 열거형명{ 열거요소1, 열거요소2, 열거요소3, 열거요소4, ... , 열거요소n }
// SPRING: 0, SUMMER: 1, AUTUMN: 2, WINTER: 3
alert(SEASONS.AUTUMN); */

/* enum SEASONS{SPRING=10, SUMMER, AUTUMN, WINTER};
alert(SEASONS.AUTUMN); */

enum SEASONS{SPRING=1, SUMMER=2, AUTUMN=4, WINTER=8};  // （1）
// 0b0001, 0b0010, 0b0100, 0b1000
var season:SEASONS, season1:SEASONS;
season = SEASONS.SPRING + SEASONS.SUMMER;   // （2）
// 0b0001 + 0b0010 = 0b0011(3)

season1 = SEASONS.SUMMER | SEASONS.WINTER;   // |, &, >>, << 비트연산자
// 0b0010 | 0b1000 = 0b1010(10)

season = season1

// （3）
switch(season){
case SEASONS.SPRING:
  alert("春物です");
  break;
case SEASONS.SPRING + SEASONS.SUMMER:
  alert("春夏物です");
  break;
case SEASONS.SUMMER | SEASONS.WINTER:
  alert("春冬物です");
  break;
default:
  alert("秋または冬にも使えます");
}
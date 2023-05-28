// 연도 입력하면 해당하는 연도의 10천간, 12간지 형태의 년도명 출력하기
// 2023년 : 계묘년
// 10천간: 갑 을 병 정 무 기 경 신 임 계
//         4  5  6 7  8  9  0  1  2  3
// 12간지: 자 축 인 묘 진 사 오 미 신 유 술 해
//         4  5 6  7  8  9 10 11  0  1 2  3

let animals: Array<string> = ['신', '유', '술', '해', '자', '축', '인', '묘', '진', '사', '오', '미'];
// enum animals: string = {'신', '유', '술', '해', '자', '축', '인', '묘', '진', '사', '오', '미'}
let tenWord : Array<string> = ['경', '신', '임', '계', '갑', '을', '병', '정', '무', '기']

const date: Date = new Date();
const idx: number = date.getFullYear(); // FullYear: 2023, Year: 23
console.log("올해의 연도명: " + tenWord[idx % 10] + animals[idx % 12] + "년 입니다.");

const click = document.querySelector('#click')!;
  click.addEventListener('click', (e)=>{
    e.preventDefault();
    const year = document.querySelector('#year') as HTMLInputElement;
    const y_idx = year.value;
    alert(tenWord[parseInt(y_idx) % 10] + animals[parseInt(y_idx) % 12] + "년 입니다.");
});
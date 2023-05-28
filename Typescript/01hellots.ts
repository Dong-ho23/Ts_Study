// alert('test');
var Message: string;
// Message = "안녕하세요? 여러분!"
// alert(Message)

class Cat {
    age: number;
    weight: number;
}
var myCat = new Cat();
myCat.age = 3;
myCat.weight = 5.1;
Message = "고양이는 " + myCat.age + "살이고, 체중은 " + myCat.weight + "kg입니다."

alert(Message)
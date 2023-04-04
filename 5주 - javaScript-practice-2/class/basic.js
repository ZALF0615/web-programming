class Person{
    constructor(name, age, sex){
        this.name = name;
        this.age = age;
        this.sex = sex
    }

    SayHello(){
        console.log(`안녕하세요! 제 이름은 ${this.name}입니다.`);
    }

    Introduce(){
        this.SayHello();
        console.log(`나이는 ${this.age}살이고, 성별은 ${this.sex}입니다.`);
    }
}

const person1 = new Person("Kim", 18, "남자");
const person2 = new Person("Park", 25, "여자");

person1.Introduce();
person2.SayHello();
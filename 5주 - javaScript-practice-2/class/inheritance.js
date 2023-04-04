// 부모 클래스 정의하기
class Animal {
    constructor(name) {
      this.name = name;
    }
  
    speak() {
      console.log(`${this.name} 이(가) 소리를 냅니다.`);
    }
  }
  
  // 자식 클래스 정의하기
  class Dog extends Animal {
    constructor(name) {
      super(name);
    }
  
    speak() {
      console.log(`${this.name} 이(가) 멍멍 짖습니다.`);
    }
  
    fetch() {
      console.log(`${this.name} 이(가) 공을 가져옵니다.`);
    }
  }
  
  class Cat extends Animal{
    constructor(name){
        super(name);
    }

    speak(){
        console.log(`${this.name} 이(가) 냐옹 하고 웁니다.`);
    }

    jump(){
        console.log(`${this.name} 이(가) 높게 뛰어오릅니다.`);
    }
  }
  
  // 객체 생성하기
  const dog = new Dog("뽀삐");
  const cat = new Cat("나비");
  const unknown = new Animal("아무개");

  dog.speak();
  dog.fetch();

  cat.speak();
  cat.jump();

  unknown.speak();
class Stack {
  // public: 외부에서 접근 가능 -> 클래스 내부, 외부에서 접근 가능
  // private: 외부에서 접근 불가능 -> 클래스 내부에서만 접근 가능
  // 사실 private으로 선언하는 것이 더 좋음
  public items: string[];

  // constructor: 클래스의 인스턴스 생성 시 초기 설정 역할
  // ex) const stack = new Stack() -> stack 에는 items 배열이 생성됨
  // this: 클래스의 인스턴스 자신을 가리키는 키워드
  constructor() {
    this.items = [];
  }

  // 스택에 요소 추가
  // push라는 이름은 다르게 해도 됨
  add(element: string) {
    this.items.push(element);
  }

  // 스택이 비어있는지 확인
  isEmpty() {
    return this.items.length === 0;
  }

  // 스택에서 맨 위 요소 제거 및 반환
  remove() {
    if (this.isEmpty()) {
      return '스택이 비어있음';
    }
    return this.items.pop();
  }

  peek() {
    if (this.isEmpty()) {
      return '스택이 비어있음';
    }
    return this.items[this.items.length - 1];
  }

  // 스택의 크기 반환
  size() {
    return this.items.length;
  }

  // 스택 초기화
  clear() {
    this.items = [];
  }
}

const stack = new Stack();
stack.add('가'); // stack => ["가"]
stack.add('나'); // stack => ["가", "나"]
stack.add('다'); // stack => ["가", "나", "다"]
console.log(stack.items);
stack.remove(); // stack => ["가", "나"]
console.log(stack.items);
stack.isEmpty(); // false
stack.peek(); // "나";
stack.size(); // 2;
stack.clear(); // stack => [];
console.log(stack.items);

// 컴파일
// npx tsc src/lib/stack.ts
// 실행
// node src/lib/stack.js

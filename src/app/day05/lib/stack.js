var Stack = /** @class */ (function () {
    // constructor: 클래스의 인스턴스 생성 시 초기 설정 역할
    // ex) const stack = new Stack() -> stack 에는 items 배열이 생성됨
    // this: 클래스의 인스턴스 자신을 가리키는 키워드
    function Stack() {
        this.items = [];
    }
    // 스택에 요소 추가
    // push라는 이름은 다르게 해도 됨
    Stack.prototype.add = function (element) {
        this.items.push(element);
    };
    // 스택이 비어있는지 확인
    Stack.prototype.isEmpty = function () {
        return this.items.length === 0;
    };
    // 스택에서 맨 위 요소 제거 및 반환
    Stack.prototype.remove = function () {
        if (this.isEmpty()) {
            return '스택이 비어있음';
        }
        return this.items.pop();
    };
    Stack.prototype.peek = function () {
        if (this.isEmpty()) {
            return '스택이 비어있음';
        }
        return this.items[this.items.length - 1];
    };
    // 스택의 크기 반환
    Stack.prototype.size = function () {
        return this.items.length;
    };
    // 스택 초기화
    Stack.prototype.clear = function () {
        this.items = [];
    };
    return Stack;
}());
var stack = new Stack();
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
function brackets(s) {
    stack.clear();
    for (var i = 0; i < s.length; i++) {
        for (var _i = 0, s_1 = s; _i < s_1.length; _i++) {
            var word = s_1[_i];
            if (word === "(") {
                stack.add(word);
            }
            else {
                if (stack.size() === 0) {
                    return false;
                }
                stack.remove();
            }
        }
        return stack.size() === 0;
    }
    console.log(brackets('()()'));
    console.log(brackets('(())()'));
    console.log(brackets(')()('));
    console.log(brackets('(()('));
    console.log(brackets('((()))))'));
}

#  바닐라 js로 momentom앱 만들기

## 1. THEORY
### 1.1 super Power of JS
  - realtime 채팅(socket.io)
  - js로 할 수 있는것들?
  <div class="alert alert-block alert-warning">
<strong><font color="blue" size="3em">interactive!</font></strong>
</div>
### 1.2 ES5, ES6, ..
  - JS의 Specification이다.   
  - vanilla.JS는 라이브러리가 없는 js이다. 

### 1.3 Vanilla.JS
  - 라이브러리에 의존하지 않고 JS자체를 갖고 학습하자   
  - 라이브러리들이 실행시키것이 결국 자바스크립트.. 자바스크립트를 좀 편리하게 이용하도록 도와주는 것.   

### 1.4 Hello World with Javascript
  ```sh
  ├─hoho_nomaecoder
  │  │  README.md
  |  |  index.css
  |  |  index.html
  |  |  index.js  
  ```

### 1.5 Your first JS variable 변수!
  변수는 변경되거나 변경될 수 있는 것을 말함.   
  expression(line)   
  let   

### 1.6 let, const, var
  const를 주로 이용함. 필요시에만 let을 사용   
  const로 선언한 변수는 수정이 불가, 이를 구별하기 위해 let이 있음   

### 1.7 data types on JS
  - const를 이용할 것
    string   
    boolean   
    number
    float   

### 1.8 Organizing Data with Arrays
  ```JavaScript
  const hi = "hi";
  const daysOfWeek = ["Mon", "Tue", "Thu", "fri",
                      0, true, hi]
  console.log(daysOfWeek[0])
  ```
  이런식으로 데이터를 표현 가능함

### 1.9 Organizing Data with Objects
```JavaScript
const info = {
  name: "hoho",
  age: 27,
  gender: "Male",
  isHandsome: true,
  favFood: ["pajeon", "kimchi", "chicken"],
  favMovie: [
    {
      name: "클래식",
      genere: "drama"
    },
    {
      name: "어벤져스",
      genere: "action"
    },
    {
      name: "hi",
      genere: "drama"
    }
  ]
}
console.log(info.favMovie[0].genere)
```

```
callback 함수, 반응이 일어났을 때에만 호출되라는 의미에서 resizeListener()가 아닌 resizeListener로 작성했다.
```

## 2. PRACTICE
### 2.1 function
### 2.2 JS DOM function
### 2.3 Modifying the DOM with JS
### 2.4 Events and event handlers
### 2.5 DOM - if else - function

## 3. JS APP
### 3.1 JS Clock
  ```JavaScript
   const date = new Date(); //Date를 객체로 만들어서 사용
   date.getDate();
   date.getHours(); 
   ```
   ```setInterval(fn, time(ms))``` 이용하기!
  - 삼항연산자!!!
### 3.2 Saving the User Name
  - localStorage..
  - localStorage.setItem("hoho",true);

### 3.3 Making a To Do List

### 3.4 Image Background

### 3.5 Getting the Weather
### CSS
- 화면크기가 작아질 때 요소크기를 직접 줄여줌.
  ```CSS
  @media (max-width: 600px){
    .clock{
      font-size: 6em;
    }
  }
  ```
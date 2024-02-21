## omok game 구현

### JavaScript

  디폴트 데이터
    - COLS : 19
    - ROWS : 19
  initGame
    - omokBoard에 cell 객체를 담음
    - drawCell 함수를 호출하여 omokBoard를 화면에 송출

  drawCell
    - omokBoard에 넣은 객체 데이터들을 화면에 송출하는 함수
    - 각 rows 마다 띄우기 위해서 Div 태그를 생성해서 각각의 row들을 div로 분리함
    - 각각의 row들을 omok-container에 append

  createCell
    - omok-container에 append할 요소 생성
    - Input 요소로 생성해서 클릭할 때 이벤트 발생할 수 있게 함
    - 생성된 요소를 클릭했을 떄 handleClick 함수를 호출

  handleClick
    - 생성된 요소를 click 했을 때 요소의 객체 인스턴스 값과 요소 class를 변경하여 이벤트를 발생시키는 함수
    - current 에 click된 요소의 Row값과 col값을 송출
    - 짝수번째에는 요소의 색이 흰색이 되게함
    - 홀수번째에는 요소의 색이 검은색이 되게함

  handleReset
    - click 했을 때 요소의 값과 데이터 값을 초기화 시키는 함수
    - getElFromRowCol 함수를 호출하여 요소에 접근함
    - 모든 요소를 순회하며 생성되었던 activeWhite와 activeBlack을 remove함
    - 모든 객체를 순회하며 active 인스턴스와 disabled 인스턴스를 초기화함
    
  getElFromeRowCol
    - row값과 Col값을 파라미터로 넣었을 때 일치하는 요소를 반환하는 함수
    

# 라우터를 기능별로 분리 시키기

#### 조건
#### 1. html 페이지로 정보를 넘어가게 만든다.
#### 2. 라우터는 총 세 가지로 구분하고 각각의 패스틑 다음과 같다.
> #### 2-1. 패스는 /, get으로 만들고 /를 호출하면 로그인 페이지로 넘어가게 만든다.
> #### 2-2. 패스는 /login, post로 만들고 /login을 호출하면 화면에 로그인 한 사람에 정보가 등록되게 만든다.
> #### 2-3. 패스는 /users/:id, get으로 만들고 쿠키에서 해당 아이디로 로그인 했던 정보를 출력한다. 
####          로그인한 정보가 없다면 로그인 한 정보가 없다고 띄운다. 
#### 3. 로그인한 정보는 브라우저에 90일 동안 지속되게 설정한다.

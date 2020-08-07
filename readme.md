## 🧑 api 서버

### 사용법 하단 참고
---
### config 설정

1. config.js 파일에 패스워드를 본인컴퓨터의 mysql 비번으로 수정할 것

2. mysql 접속

3. mysql 안에 boost database 생성, 아래 명령 사용
```
create database boost;
```

4. mysql 종료
```
exit
```

5. 아래 명령으로 백업한 db를 mysql 에 넣음
```
mysql -uroot -p boost < boost_0807.sql 
```
---
### rest api

1. 게시글 select 쿼리
    - GET /api/posts
 
2. 게시글 insert 쿼리
    - POST /api/posts
    - body : id, gender, age, info, start_date, end_date, place, group_name, story

3. 게시글 키워드로 검색 쿼리 
    - GET /api/posts/search/:keyword

4. 로그인 쿼리
    - POST /api/auth/login
    - body : id, pw

5. 회원 추가 => 임의의 회원정보 넣을 때 사용
    - POST /api/auth/register
    - body : id, pw, name, gender, age

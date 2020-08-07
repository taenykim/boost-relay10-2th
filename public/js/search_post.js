const datas = [
    {
      no: 0,
      gender: "남성",
      age: 3,
      info: "이사람은 00한 사람입니다.",
      from: "19940102",
      to: "19950102",
      place: "제주",
      group_name: "11초등학교",
      story: "00한 옛날 친구를 찾습니다!",
      keyword: "긴머리,귤,축구",
    },
    {
      no: 1,
      gender: "남성",
      age: 12,
      info: "이사람은 00한 사람입니다.",
      from: "19940102",
      to: "19950102",
      place: "서울",
      group_name: "11초등학교",
      story: "00한 옛날 친구를 찾습니다!",
      keyword: "짧은머리,귤,농구",
    },
    {
      no: 3, //o !(따로빼주기)왼쪽상단에 박아주고
      gender: "남성", //o 그아래 한줄
      age: 29, //o
      info: "이사람은 00한 사람입니다.", //x
      from: "19940102", //o
      to: "19950102", //o 이거 2개 한줄
      place: "제주", //o
      group_name: "22초등학교", //o 이거 2개 한줄
      story: "00한 옛날 친구를 찾습니다!",
      keyword: "귤", //o #해시태그
    },
  ]
  
  console.log(datas)
  
  const contentsDiv = document.getElementById("contents")
  
  const components = datas.map((item) => {
    const keywords = item.keyword.split(",").map((item) => `#${item}`)
  
    return `<article class='posts'>
      <div class='no'>No.${item.no}</div>
      <div class='who'>Who? ${item.age}세 ${item.gender}</div>
      <div class='when'>When? ${item.from} ~ ${item.to}</div>
      <div class='where'>Where? ${item.place} ${item.group_name}</div>
      <div class='keyword'>${keywords}</div>
      <button class="article-button">글 확인</button>
    </article>`
  })
  
  contentsDiv.innerHTML = `${components}`
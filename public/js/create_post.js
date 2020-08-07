const postButton = document.getElementById("form-btn")
postButton.addEventListener("click", () => {
  console.log("dd")
  const id = "a" // 우선은..
  const genderRadioButton = document.getElementsByName("gender")
  let checked_index = -1
  let checked_value = ""
  for (i = 0; i < genderRadioButton.length; i++) {
    if (genderRadioButton[i].checked) {
      checked_index = i
      checked_value = genderRadioButton[i].value
    }
  }
  const gender = checked_value
  const age = Number(document.getElementById("age").value)
  const start_date = document.getElementById("start_date").value
  const end_date = document.getElementById("end_date").value
  const info = document.getElementById("info").value
  const place = document.getElementById("place").value
  const group_name = document.getElementById("group_name").value
  const story = document.getElementById("story").value
  const obj = {
    id: id,
    gender: gender,
    age: age,
    start_date: start_date,
    end_date: end_date,
    info: info,
    place: place,
    group_name: group_name,
    story: story,
  }
  fetch("/api/posts/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(obj),
  })
})

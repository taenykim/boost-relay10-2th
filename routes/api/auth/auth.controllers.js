const model = require('../../../models/auth');

/*
* POST  api/auth/login
*/
const login = async (req, res) => { // 게시물 가져오기
  const { id, pw } = req.body;
  const [rows] = await model.getUser(id);
  const user = rows[0];

  if (user.pw === pw) {
    res.status(200).json({ message: "success" });
  } else {
    res.status(401).json({ message: "unauthorized" });
  }
}


/**
 * POST  api/auth/register
 * @param {id, pw, name, gender, age}
 */

const addUser = async (req, res) => {
  const { id, pw, name, gender, age } = req.body;
  const ret = await model.addUser(id, pw, name, gender, age);
  res.json({ message: "success" });

}

module.exports = { login, addUser };
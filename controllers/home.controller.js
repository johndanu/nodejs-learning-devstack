const users = [
  { id: 1, name: "john", age: 28 },
  { id: 2, name: "kumar", age: 34 },
  { id: 3, name: "raj", age: 22 },
  { id: 4, name: "anitha", age: 31 },
  { id: 5, name: "meena", age: 25 },
];

exports.getHome = (req, res) => {
  res.json(users);
};

exports.getSingleHome = (req, res) => {
  const id = req.params.id;
  let user = users.find((user) => user.id == id);
  console.log(user);
  if (user) {
    res.json(user);
  } else {
    res.status(404).json({ success: false });
  }
};

exports.postHome = (req, res) => {
  const data = req.body;
  console.log(data);
  res.status(404).json({ success: "true" });
};

exports.putHome = (req, res) => {
  res.json({ success: "true" });
};

exports.deleteHome = (req, res) => {
  res.json({ success: "true" });
};

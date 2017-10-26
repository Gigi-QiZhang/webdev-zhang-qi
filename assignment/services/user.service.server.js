module.exports = function (app) {
  app.post("/api/user", createUser);
  app.get("/api/user", findUsers);
  app.get("/api/user/:uid", findUserById);
  // app.get("/api/user?username=username", findUserByUsername);
  // app.get("/api/user?username=username&password=password", findUserByCredentials);
  app.put("/api/user/:uid", updateUser);
  app.delete("/api/user/:uid", deleteUser);
  // app.get("/api/user/hello", helloUser);

  const users = [
    { uid: "123", username: "alice", password: "alice", firstName: "Alice", lastName: "Wonder", email: "alice.w@gmail.com" },
    { uid: "234", username: "bob", password: "bob", firstName: "Bob", lastName: "Marley", email: "bob.m@gmail.com" },
    { uid: "345", username: "charly", password: "charly", firstName: "Charly", lastName: "Garcia", email: "charly.g@gmail.com" },
    { uid: "456", username: "jannunzi", password: "jannunzi", firstName: "Jose", lastName: "Annunzi", email: "jose.a@gmail.com" }
  ];


  function createUser(req, res) {
    const user = req.body;
    user.uid = newUserId();
    users.push(user);
    res.json(user);
  }

  function newUserId() {
    return (Number(users[users.length-1].uid)+1).toString();
  }

  function findUserById(req, res) {
    const userId = req.params["uid"];
    const user = users.find(function (user) {
      return user.uid === userId;
    });
    res.json(user);
  }

  function findUsers(req, res) {
    const username = req.query["username"];
    const password = req.query["password"];
    if(username && password) {
      const user = users.find(function (user) {
        return user.username === username && user.password === password;
      });
      if(user) {
        res.json(user);
      } else {
        res.json({});
        // res.json(null);
      }
      return;
    } else if(username) {
      const user = users.find(function (user) {
        return user.username === username;
      });
      if(user) {
        res.json(user);
      } else {
        res.json(null);
        // res.json(null);
      }
      return;
    }
    res.json(users);
  }

  function updateUser(req, res) {
    const userId = req.params["uid"];
    const updatedUser = req.body;
    const preUser = getUserByIdOnly(userId);
    const index = users.indexOf(preUser);
    users[index].username = updatedUser.username;
    users[index].firstName = updatedUser.firstName;
    users[index].lastName = updatedUser.lastName;
    users[index].email = updatedUser.email;
    res.json(updatedUser);
  }

  function deleteUser(req, res) {
    const userId = req.params["uid"];
    const user = getUserByIdOnly(userId);
    const index = users.indexOf(user);
    users.splice(index, 1);
    res.json(users);
  }

  function getUserByIdOnly(userId) {
    return users.find(function (user) {
      return user.uid === userId;
    });
  }
  // function helloUser(req, res) {
  //   console.log();
  //   res.send("hello user service");
  // }
};

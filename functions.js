const axios = require("axios");

const functions = {
  add: (x, y) => x + y,
  isNull: () => null,
  checkValue: x => x,
  createUser: () => {
    const user = { lastName: "Reed", firstName: "Charles" };
    return user;
  },
  fetchUser: () => {
    //     try {
    //       const res = await fetch("https://jsonplaceholder.typicode.com/users/1");
    //       const data = await res.json();
    //       return data;
    //     } catch (err) {
    //       return "error during fetch";
    //     }
    axios
      .get("https://jsonplaceholder.typicode.com/users/1")
      .then(res => res.data)
      .catch(err => "error during fetch");
  }
};

module.exports = functions;

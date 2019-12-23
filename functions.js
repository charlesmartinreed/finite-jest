const functions = {
  add: (x, y) => x + y,
  isNull: () => null,
  checkValue: x => x,
  createUser: () => {
    const user = { lastName: "Reed", firstName: "Charles" };
    return user;
  }
};

module.exports = functions;

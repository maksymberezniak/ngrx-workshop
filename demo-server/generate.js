module.exports = function () {
  var faker = require("faker");
  var _ = require("lodash");
  return {
    todos: _.times(100, function (n) {
      return {
        id: n,
        asignee: faker.name.findName(),
        avatar: faker.internet.avatar(),
        email: faker.internet.email(),
        description: faker.lorem.sentence()
      }
    })
  }
}

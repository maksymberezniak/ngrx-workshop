module.exports = function () {
  var faker = require("faker");
  var _ = require("lodash");
  return {
    todos: _.times(18, function (n) {
      return {
        id: n,
        stage: faker.random.arrayElement(['waiting', 'in progress', 'done']),
        asignee: faker.name.findName(),
        avatar: faker.internet.avatar(),
        email: faker.internet.email(),
        description: faker.lorem.sentence(),
        priority: faker.random.arrayElement(['high', 'low'])
      }
    })
  }
}

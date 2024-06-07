/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Ratings', [{
      score: 20,
    },
    {
      score: 30,
    }], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Ratings', null, {});
  },
};

module.exports = {
  up: function(queryInterface, Sequelize) {
    return [
      queryInterface.addColumn(
        'users',
        'email',
        {
          type: Sequelize.STRING,
          allowNull: false
        }
      ),
      queryInterface.addColumn(
        'users',
        'encryptedPassword',
        {
          type: Sequelize.STRING,
          allowNull: false
        }
      )
    ];

  },

  down: function(queryInterface, Sequelize) {
    // logic for reverting the changes
    return queryInterface.removeColumn(
      'Todo',
      'completed'
    );
  }
};

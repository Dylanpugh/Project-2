const bcrypt = require("bcrypt-nodejs")

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: true,
    },
    username: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    movie1: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
      }
    },
    movie2: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
      }
    },
    movie3: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
      }
    },
    movie4: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
      }
    },
    movie5: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
      }
    },
    actor1: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
      }
    },
    actor2: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
      }
    },
    actor3: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
      }
    },
    genre: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
      }
    }
  });

  
  User.associate = function ({ AuthToken }) {
    User.hasMany(AuthToken);
  };

  
  User.authenticate = async function(username, password) {

    const user = await User.findOne({ where: { username } });

    
    if (bcrypt.compareSync(password, user.password)) {
      return user.authorize();
    }

    throw new Error('invalid password');
  }

  User.prototype.authorize = async function () {
    const { AuthToken } = sequelize.models;
    const user = this

    
    const authToken = await AuthToken.generate(this.id);

    
    await user.addAuthToken(authToken);

    return { user, authToken }
  };


  User.prototype.logout = async function (token) {

    
    sequelize.models.AuthToken.destroy({ where: { token } });
  };

  return User;
};
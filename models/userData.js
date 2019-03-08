module.exports = function(sequelize, DataTypes) {

  var userProfile = sequelize.define("userProfile", {
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
      isAlpha: true
      }
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
      isAlpha: true
      }  
    },
    userName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
      }    
    },
    movie1: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
      }    
    },
    movie2: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
      }    
    },
    movie3: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
      }    
    },
    movie4: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
      }    
    },
    movie5: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
      }    
    },
    actor_ess1: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
      }    
    },
    actor_ess2: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
      }    
    },
    actor_ess3: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
      }    
    },
    email: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
      isEmail: true
      }    
    },

  });

  return userProfile;
};
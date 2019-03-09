module.exports = function(sequelize, DataTypes) {

  var userProfile = sequelize.define("userProfile", { 
  
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
    actor1: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
      }    
    },
    actor2: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
      }    
    },
    actor3: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
      }    
    },
      


  });

  return userProfile;
};
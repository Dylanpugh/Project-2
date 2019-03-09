const express = require('express');
const bcrypt = require("bcrypt-nodejs")

const router = express.Router();

const { User } = require('../models');

/* Register Route */
router.post('/register', async (req, res) => {

  const salt = bcrypt.genSaltSync(10);
  const hash = bcrypt.hashSync(req.body.password, salt);

  try {
    // create a new user with the password hash from bcrypt
    let user = await User.create(
      Object.assign(req.body, { password: hash })
    );

    // data will be an object with the user and it's authToken
    let data = await user.authorize();

    return res.json(data);

  } catch(err) {
    return res.status(400).send(err);
  }

});

router.get("/api/userData", function(req, res) {
 console.log(req.user.dataValues.id);
 User.findOne({  
  where: {id: req.user.dataValues.id},
})


.then(User => {
  console.log('Found user:' + User);
});


  });
  router.post("/api/userData",function(req,res){
    User.findOne({  
      where: {id: req.user.dataValues.id},
    })
    .then(user => {
      user.updateAttributes({
        actor1: req.body.actor1,
        actor2: req.body.actor2,
        actor3: req.body.actor3,
        movie1: req.body.movie1,
        movie2: req.body.movie2,
        movie3: req.body.movie3,
        movie4: req.body.movie4,
        movie5: req.body.movie5,
        genre: req.body.genre
      });
    });
 
  });


/* Login Route */
router.post('/login', async (req, res) => {
    const { username, password } = req.body;
  
    if (!username || !password) {
      return res.status(400).send(
        'Request missing username or password param'
      );
    }
  
    try {
  
      // we will cover the user authenticate method in the next section
      let user = await User.authenticate(username, password)
  
      return res.json(user);
  
    } catch (err) {
      return res.status(400).send('invalid username or password');
    }
  
  });

/* Logout Route */
router.delete('/logout', async (req, res) => {

  const { user, cookies: { auth_token: authToken } } = req

  if (user && authToken) {
    await req.user.logout(authToken);
    return res.status(204).send()
  }

  return res.status(400).send(
    { errors: [{ message: 'not authenticated' }] }
  );
});

router.get('/me', (req, res) => {
  if (req.user) {
    return res.send(req.user);
  }
  res.status(404).send(
    { errors: [{ message: 'missing auth token' }] }
  );
});

// export the router so we can pass the routes to our server
module.exports = router;
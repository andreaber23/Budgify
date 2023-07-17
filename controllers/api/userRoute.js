const router = require("express").Router();
const { User } =  require("../../model");

router.post("/login", async (req, res) => {
    try{
        const userData = await User.findOne({where:
        {email: req.body.email}});

    if (!userData) {
       return res.status(400).json ({
        message: "Email or password is incorrect, please try again"
       });
    }

        const correctPassword = await userData.checkpassword(req.body.password);
    if (!correctPassword) {
        return res.status(400).json ({
        message: "Email or password is incorrect, please try again"
               });
        }
        
        req.session.save(() => {
            req.session.user_id = userData.id;
            req.session.logged_in = true;
            req.session.username = userData.username;
            
            res.json({
                user: userData,
                message: "Log in suscessful!"
            })
        })
    } catch (err) {
        res.status(400).json(err);
      }
});

router.post("/logout", (req, res) => {
if (req.session.logged_in) {
    req.session.destroy(()=> {
        res.status(205).end();
    });
} else {
    res.status(404).end();
}
})

module.exports = router;
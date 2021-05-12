const router = express.Router()

//DEFAULT
router.get('/', (req,res,next) => {
  res.redirect(`${req.baseUrl}/signin`)
})
//SIGN IN
router.get('/signin', (req,res,next) => {
  console.log('signin attempt: ', )
})

router.post('/signin', (req,res,next) => {
  const {email, password} = req.body

  users.login(email, password, client(req))
    .then(user => {
      
    })
})
//SIGN UP
router.get('/signup', (req,res,next) => {
  res.redirect(`${req.baseUrl}/signin`)
})

router.post('/signup', (req,res,next) => {
  const {email, password} = req.body

  users.register(body, client(req))
    .then(user => {
      
    })
})
//RESET PASSWORD
router.get('/resetpassword', (req,res,next) => {
  res.redirect(`${req.baseUrl}/signin`)
})

//RESET
router.get('/reset', (req,res,next) => {
  res.redirect(`${req.baseUrl}/signin`)
})

//CHANGE PASSWORD
router.get('/changepassword', (req,res,next) => {
  res.redirect(`${req.baseUrl}/signin`)
})

//CHANGE EMAIL ADRESS
router.get('/changeaddress', (req,res,next) => {
  res.redirect(`${req.baseUrl}/signin`)
})

//CONFIRMATION
router.get('/confirm', (req,res,next) => {
  res.redirect(`${req.baseUrl}/signin`)
})


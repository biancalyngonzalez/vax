//////////////////////////////////
// DEPENDENCIES
/////////////////////////////////
const { Router } = require("express");
const auth = require("../authmiddleware");
const Vax = require("../../models/vax")

///////////////////////////////////////
// CREATE ROUTER
///////////////////////////////////////
const router = Router();

///////////////////////////////////////
// ROUTES
///////////////////////////////////////

//Index Route to Find Notes by the User
 router.get('/', auth, async (req, res) => {
   try {
    const vax = await Vax.find({ username: req.session.username });
    res.render("vax/index.jsx", { vax });
   } catch (err) {
     console.log(err);
   }
 }) 

 //New Route
 router.get('/new', auth, async (req, res) => {
  try{
    res.render('vax/new.jsx')
  }
  catch(error){
    console.log(error)
  }
 })
 
 //Create Route - Submit Vaccine
 router.post('/', auth, async (req, res) => {
   try{
    req.body.username = req.session.username
    const newVax = await Vax.create(req.body)
    res.redirect('/vax/')
   }
   catch(error){
    console.log(error)
   }
 })

 //Delete Route - Delete Vaccine
 router.delete("/", auth, async (req,res) => {
   try{
    await Vax.findByIdAndDelete(req,params.id)
    res.redirect('/vax')
   }
   catch(error){
     console.log(error)
   }
  
 })

 //Edit Route
 router.get('/edit/:id', auth, async (req, res) => {
   try{
   const vax = await Vax.findById(req.params.id)
   res.render('vax/edit.jsx', {vax})
   }
   catch(error){
     console.log(error)
   }
 })

 //Update Route - Edit Vaccine
 router.get('/edit/:id', auth, async (req, res) => {
   try{
    req.body.username = req.session.username
    await Vax.findByIDAndUpdate(req.params.id, req.body)
    res.redirect('/notes/')
   }
   catch(error){
     console.log(error)
   }
 })

//TEST ROUTE TO SHOW HOW AUTH MIDDLEWARE WORKS

router.get("/", auth, (req, res) => {
  res.send("if you see this you are logged in");
});

///////////////////////////////////////
// Export Router
///////////////////////////////////////
module.exports = router;

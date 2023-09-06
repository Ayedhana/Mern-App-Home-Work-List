const {Router}= require('express');
const {
  getToDo,
  saveToDo,
  updateToDo,
  deleteToDo,
} = require("../controllers/ToDoController");
const router=Router();

router.get('/',getToDo);
router.post("/saveToDo", saveToDo);
router.post("/updateToDo", updateToDo);
router.post("/deleteToDo", deleteToDo);




module.exports=router;
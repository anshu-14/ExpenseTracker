const { addExpense, getExpense, deleteExpense } = require('../controllers/expense');
const { addIncome, getIncome,deleteIncome } = require('../controllers/income');

const router = require('express').Router()
router.post('/add-income',addIncome)
.get('/getIncome',getIncome)
.delete('/deleteIncome/:id',deleteIncome)
.post('/add-expense',addExpense)
.get('/getExpense',getExpense)
.delete('/deleteExpense/:id',deleteExpense)
module.exports=router;
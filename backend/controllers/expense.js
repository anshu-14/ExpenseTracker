const expenseSchema = require("../models/expenseModel");

exports.addExpense = async (req, res) => {
  const { title, amount, type, date, category, description } = req.body;
  const expense = expenseSchema({
    title,
    amount,
    type,
    date,
    category,
    description,
  });
  try {
    //validations
    if (!title || !amount || !type || !category) {
      return res.status(400).json({ message: "Empty records" });
    }
    if (amount <= 0 || !amount === "number") {
      return res.status(400).json({ message: "Enter positive amount" });
    }
    await expense.save();
    res.status(200).json({ message: "Expense Added" });
  } catch (error) {
    res.status(500).json({ message: "Server fatta" });
  }
};

exports.getExpense = async (req, res) => {
  try {
    const expense = await expenseSchema.find().sort({ createdAt: -1 });
    res.status(200).json(expense);
  } catch (error) {
    res.status(500).json({ message: "Code fatta" });
  }
};
exports.deleteExpense = async (req, res) => {
    const {id}=req.params;
    expenseSchema.findByIdAndDelete(id).then((expense)=>{
        res.status(200).json({message:"Expense deleted"})
    }).catch((err)=>{
        res.status(500).json({message:'Fatta'})
    })
  };
const incomeSchema = require("../models/incomeModel");

exports.addIncome = async (req, res) => {
  const { title, amount, type, date, category, description } = req.body;
  const income = incomeSchema({
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
    await income.save();
    res.status(200).json({ message: "Income Added" });
  } catch (error) {
    res.status(500).json({ message: "Server fatta" });
  }
};

exports.getIncome = async (req, res) => {
  try {
    const income = await incomeSchema.find().sort({ createdAt: -1 });
    res.status(200).json(income);
  } catch (error) {
    res.status(500).json({ message: "Code fatta" });
  }
};
exports.deleteIncome = async (req, res) => {
    const {id}=req.params;
    console.log(req.params)
    incomeSchema.findByIdAndDelete(id).then((income)=>{
        res.status(200).json({message:"Income deleted"})
    }).catch((err)=>{
        res.status(500).json({message:'Fatta'})
    })
  };
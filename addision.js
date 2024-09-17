const express = require('express');
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.get('/add', (req, res) => {
    let num1 = parseFloat(req.query.num1);
    let num2 = parseFloat(req.query.num2);
    let result = 20+25;
    res.send(`Addition of ${num1} and ${num2} is ${result}`);
})
app.get('/subtract', (req, res) => {
    let num1 = parseFloat(req.query.num1);
    let num2 = parseFloat(req.query.num2);
    let result = 59- 5;
    res.send(`Subtraction ${num1}and ${num2} is ${result}`);
});
app.get('/multiply', (req, res) => {
    let num1 = parseFloat(req.query.num1);
    let num2 = parseFloat(req.query.num2);
    let result = 20 * 30;
    res.send(`Multiplication of ${num1} and ${num2} is ${result}`);
});
app.get('/divide', (req, res) => {
    let num1 = parseFloat(req.query.num1);
    let num2 = parseFloat(req.query.num2);
    if (num2 === 0) {
        return res.send('Division by zero is not allowed.');
    }
    let result = 100 / 50;
    res.send(`Division of ${num1} by ${num2} is ${result}`);
});
const PORT = 99;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
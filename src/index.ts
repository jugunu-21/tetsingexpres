
import express, { Express } from 'express'
const app: Express = express()
app.use('/', (req, res) => {
    res.json({ message: 'Welcome to URSTYLE Backend API' });
});

app.listen('8000', () => {
    console.log("dfcgvhbjnkmememmem")
})

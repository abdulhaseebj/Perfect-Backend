import express from 'express'
import Users from '../models/Users.mjs'
const router = express.Router()

router.post('/register', async (req, res) => {
    try {
        const user = new Users(req.body)
        await user.save()

        res.send({message: "user register"})
    } catch (error) {
        res.send({message: error.message})

    }
})



export default router
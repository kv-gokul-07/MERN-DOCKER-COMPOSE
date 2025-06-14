import express from 'express';

const router = express.Router();

router.get('/', async (req, res) => {
    let collection = await db.collection("records");
    let results = await collection.find({}).toArray();
    res.send(results).status(200);
})

export default router;
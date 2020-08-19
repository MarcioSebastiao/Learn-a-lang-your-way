const wordsModel = require('../models/Words');

module.exports = {
    async get(req, res) {
        const { w } = req.query;
        const result = await wordsModel.find({
            $or: [
                { Words: w },
                { Sentences: { "$regex": w, "$options": "i" } }
            ]
        },
            function (err, docs) { }
        );
        return res.json(result)
    }
}
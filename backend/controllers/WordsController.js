const wordsModel = require('../models/Words')

module.exports = {
    async getAll(req, res) {
        const { interval = 1 } = req.query;
        const count = await wordsModel.countDocuments();
        const limit = 20;

        let items = await wordsModel.find()
            .limit(limit)
            .skip((interval - 1) * limit);

        res.header('X-Total-Count', count);
        return res.json({ items, total: count });
    },
    async store(req, res) {

        const { words, pronounce, type, definition, sentences } = req.body;

        const wordsExists = await wordsModel.findOne({ Words: words })

        if (wordsExists) return res.json({ new: false, result: wordsExists });

        const result = await wordsModel.create({
            Words: words,
            Pronounce: pronounce,
            Type: type,
            Definition: definition,
            Sentences: sentences
        });

        return res.json({ new: true, result });
    },
    async update(req, res) {
        const { id } = req.params;
        const { words, pronounce, type, definition, sentences } = req.body;

        const newDoc = await wordsModel.findByIdAndUpdate(id, {
            Words: words,
            Pronounce: pronounce,
            Type: type,
            Definition: definition,
            Sentences: sentences
        }, { new: true });


        return res.json(newDoc);
    },
    async delete(req, res) {
        const { id } = req.params;
        await wordsModel.findByIdAndDelete(id);
        return res.json({ deleted: true });
    }
}
const TenderModel = require("../models/tender")

class TenderController {
    static Tender_insert = async (req, res) => {
        try {
            const { name, description, starttime, endtime, Buffertime } = req.body
            const result = new TenderModel({
                name: name,
                description: description,
                starttime: starttime,
                endtime: endtime,
                Buffertime: Buffertime,
            })
            const data = await result.save()
            res.status(200)
                .json({ status: "SUCCESS", message: " TENDER INSERT SUCCESSFULL", data })
        } catch (error) {
            console.log(error)
            res.status(500).json({ error: error })
        }
    }
    static getTenders = async (req, res) => {
        try {
            const data = await TenderModel.find()
            res.status(200).json(data)
        } catch (error) {
            console.log(error)
            res.status(500).json({ error: error })
        }
    }
    static ViewTender = async (req, res) => {
        try {
            const data = await TenderModel.findById(req.params.id)
            res.status(200).json(data)
        } catch (error) {
            console.log(error)
            res.status(500).json({ error: error })
        }
    }
    static UpdateTender = async (req, res) => {
        try {
            const { name, description, starttime, endtime, Buffertime } = req.body
            const data = await TenderModel.findByIdAndUpdate(req.params.id, {
                name: name,
                description: description,
                starttime: starttime,
                endtime: endtime,
                Buffertime: Buffertime,
            })
            res.status(200).json(data)
        } catch (error) {
            console.log(error)
            res.status(500).json({ error: error })
        }
    }
    static deleteTender = async (req, res) => {
        try {
            const { name, description } = req.body
            const data = await TenderModel.findByIdAndDelete(req.params.id)
            res.status(200).json({ message: " tender delete successfull" })
        } catch (error) {
            console.log(error)
            res.status(500).json({ error: error })
        }
    }
}

module.exports = TenderController
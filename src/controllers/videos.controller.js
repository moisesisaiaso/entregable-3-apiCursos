const videoServices = require("../services/video.services");

const createVideo = async (req, res) => {
    try {
        const newVideo = req.body;
        const result = await videoServices.create(newVideo);
        res.status(200).json(result);
    } catch (error) {
        res.status(400).json(error.message);
    }
};

const deleteVideo = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await videoServices.delete(id);
        res.status(200).json(result);
    } catch (error) {
        res.status(200).json(error.message);
    }
};

module.exports = {
    createVideo,
    deleteVideo,
};

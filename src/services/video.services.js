const Video = require("../models/videos.models");

class videoServices {
    static async create(video) {
        try {
            const result = await Video.create(video);
            return result;
        } catch (error) {
            throw error;
        }
    }

    static async delete(id) {
        try {
            const result = await Video.destroy({
                where: { id },
            });
            return result;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = videoServices;

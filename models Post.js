const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
    userId: mongoose.Schema.Types.ObjectId,
    content: String,
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Post", PostSchema);

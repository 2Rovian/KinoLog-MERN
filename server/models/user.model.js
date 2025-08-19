import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: { type: String, unique: true, required: true, trim: true, minLength: 6, maxLength: 20 },
    email: {
        type: String,
        unique: true,
        sparse: true,
        trim: true,
        lowercase: true,
        match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    },
    password: { type: String, required: true, minLength: 6 },

    liked_movies: [Number],
    genres_count: [{ type: Map, of: Number, default: {} }],
    actors_count: [{ type: Map, of: Number, default: {} }],
    directors_count: [{ type: Map, of: Number, default: {} }],
    countries_count: [{ type: Map, of: Number, default: {} }]

});

const User = mongoose.model('User', userSchema);
export { User };
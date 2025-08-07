"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connection = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const environments_1 = require("./environments");
const connection = async () => {
    try {
        await mongoose_1.default.connect(environments_1.MONGO_URI);
        console.log('Connected to MongoDB successfully');
    }
    catch (error) {
        console.log('Error connecting to MongoDB:', error);
    }
};
exports.connection = connection;

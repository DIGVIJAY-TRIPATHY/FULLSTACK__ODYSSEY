import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { User } from "../models/user.model.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import jwt from "jsonwebtoken";

const generateAccesAndRefreshTokens = async (userId) => {
    try {
        const user = await User.findById(userId);
        const accessToken = user.generateAccessToken();
        const refreshToken = user.generateRefreshToken();

        user.refreshToken = refreshToken;
        await user.save({ validateBeforeSave: false });

        return { accessToken, refreshToken };
    } catch (error) {
        throw new ApiError(
            500,
            "something went wrong while generating access and refresh tokens",
        );
    }
};

const registerUser = asyncHandler(async (req, res) => {
    const { email, username, password } = req.body;

    if (
        [ email, username, password].some(
            (field) => field?.trim() === "",
        )
    ) {
        throw new ApiError(400, "All fields are required");
    }

    const existedUser = await User.findOne({
        $or: [{ email }, { username }],
    });

    if (existedUser) {
        throw new ApiError(409, "User with email or username already exists");
    }

    const user = await User.create({
        email,
        username,
        password,
    });

    const createdUser = await User.findById(user._id).select(
        "-password -refreshToken",
    );

    if (!createdUser) {
        throw new ApiError(500, "User registration failed");
    }

    return res
        .status(201)
        .json(
            new ApiResponse(201, createdUser, "User registered successfully"),
        );
});

export {
    registerUser
}
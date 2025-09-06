import { ApiResponse } from "../utils/api-response.js";
import { asyncHandler } from "../utils/async-handler.js";

/*
const healthCheck = async (req, res, next) => {
  try {
    // There is a chance we need to import the user
    const user = await getUserFromDB(); //It could take time
    res
      .status(200)
      .json(new ApiResponse(200, { message: "Server is running" }));
  } catch (error) {
    next(err);
  }
};
*/

// More standardise Approach
const healthCheck = asyncHandler(async (req, res) => {
  res
    .status(200)
    .json(new ApiResponse(200, { message: "Server is Running !!" }));
});

export { healthCheck };

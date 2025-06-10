"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetUsersController = GetUsersController;
function GetUsersController(req, res, next) {
    try {
        (req, res) => {
            const { page, access_token } = req.query;
            res.status(200).json({
                status: "OK",
                data: [
                    {
                        id: 1,
                        name: "budi",
                    },
                    {
                        id: 2,
                        name: "sara",
                    },
                    {
                        id: 3,
                        name: "john",
                    },
                ],
                filter: {
                    page,
                    access_token,
                },
            });
        };
    }
    catch (err) {
        next(err);
    }
}

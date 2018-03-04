module.exports = function () {
    const router = require("express").Router();

    var apiRoutes = require("./api.js")();
    //var viewRoutes = require("./view");

    router.use("/", apiRoutes);
    //router.use("/", viewRoutes);

    return router;
}
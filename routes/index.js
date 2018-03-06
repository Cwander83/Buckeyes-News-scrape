module.exports = function () {
    var router = require("express").Router();

    var apiRoutes = require("./api.js")();
    router.use("/api", apiRoutes);

    var viewRoutes = require("./view.js")();
    router.use("/", viewRoutes);

    return router;
}
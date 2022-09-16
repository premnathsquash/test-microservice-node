"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.myDataSource = void 0;
var typeorm_1 = require("typeorm");
exports.myDataSource = new typeorm_1.DataSource({
    type: "mongodb",
    host: "localhost",
    database: "node_user",
    synchronize: true,
    logging: false,
    entities: [
        "entity/*.js"
    ]
});

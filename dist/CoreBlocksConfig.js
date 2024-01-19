"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CoreBlocksConfig = void 0;
const block_data_routers_1 = require("@cloakwp/block-data-routers");
const nextjs_primitives_1 = require("@cloakui/nextjs-primitives");
exports.CoreBlocksConfig = {
    "core/image": {
        dataRouter: block_data_routers_1.imageDataRouter,
        component: nextjs_primitives_1.Image,
    },
};

import { BlocksConfig } from "cloakwp";
import { imageDataRouter } from "@cloakwp/block-data-routers";
import { Image } from "@cloakui/nextjs-primitives";

export const CoreBlocksConfig: BlocksConfig = {
  "core/image": {
    dataRouter: imageDataRouter,
    component: Image,
  },
};

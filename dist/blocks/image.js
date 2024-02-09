import { imageDataRouter } from "@cloakwp/block-data-routers";
import { Image } from "@cloakui/nextjs-primitives";
import { configurableBlockPreset } from "@cloakwp/blocks-react";
export const image = configurableBlockPreset("core/image", {
    dataRouter: imageDataRouter,
    component: Image,
});

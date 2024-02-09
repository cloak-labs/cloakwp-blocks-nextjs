import { imageDataRouter } from "@cloakwp/block-data-routers";
import { Image, type ImageProps } from "@cloakui/nextjs-primitives";
import { configurableBlockPreset } from "@cloakwp/blocks-react";

export const image = configurableBlockPreset("core/image", {
  dataRouter: imageDataRouter,
  component: Image as React.ComponentType<ImageProps>,
});

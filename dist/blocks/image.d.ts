/// <reference types="react" />
import { type ImageProps } from "@cloakui/nextjs-primitives";
export declare const image: (userOverrides?: {
    dataRouter?: import("cloakwp/blocks").WPDataRouter<import("@cloakui/types").TImageProps>;
    component?: import("react").ComponentType<ImageProps>;
}) => import("@cloakwp/react").WPBlocksConfigReact;

/// <reference types="react" />
import { type ImageProps } from "@cloakui/nextjs-primitives";
export declare const image: (userOverrides?: {
    dataRouter?: import("cloakwp/blocks/types").WPDataRouter<import("@cloakui/types").TImageProps>;
    component?: import("react").ComponentType<ImageProps>;
    meta?: {
        [x: string]: any;
    };
}) => import("@cloakwp/react").WPBlocksConfigReact;

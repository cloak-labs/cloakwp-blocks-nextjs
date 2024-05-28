/// <reference types="react" />
import { type ImageProps } from "@cloakui/nextjs-primitives";
export declare const image: (userOverrides?: {
    dataRouter?: any;
    component?: import("react").ComponentType<ImageProps>;
}) => BlocksConfig<TComponent, TBlockData>;

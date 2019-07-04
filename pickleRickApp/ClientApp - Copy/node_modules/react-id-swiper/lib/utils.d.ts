import { ReactElement } from 'react';
import { SwiperModuleName } from './types';
export declare const classNames: (el: string | HTMLElement | undefined) => string;
export declare const validateChildren: (children: any) => boolean;
export declare const isReactElement: (element: ReactElement<any, string | ((props: any) => ReactElement<any, string | any | (new (props: any) => import("react").Component<any, any, any>)> | null) | (new (props: any) => import("react").Component<any, any, any>)>) => boolean;
export declare const isModuleAvailable: (modules: ((import("swiper/dist/js/swiper.esm").Virtual & {
    name: string;
}) | (import("swiper/dist/js/swiper.esm").Keyboard & {
    name: string;
}) | (import("swiper/dist/js/swiper.esm").Mousewheel & {
    name: string;
}) | (import("swiper/dist/js/swiper.esm").Navigation & {
    name: string;
}) | (import("swiper/dist/js/swiper.esm").Pagination & {
    name: string;
}) | (import("swiper/dist/js/swiper.esm").Scrollbar & {
    name: string;
}) | (import("swiper/dist/js/swiper.esm").Parallax & {
    name: string;
}) | (import("swiper/dist/js/swiper.esm").Zoom & {
    name: string;
}) | (import("swiper/dist/js/swiper.esm").Lazy & {
    name: string;
}) | (import("swiper/dist/js/swiper.esm").Controller & {
    name: string;
}) | (import("swiper/dist/js/swiper.esm").A11y & {
    name: string;
}) | (import("swiper/dist/js/swiper.esm").History & {
    name: string;
}) | (import("swiper/dist/js/swiper.esm").HashNavigation & {
    name: string;
}) | (import("swiper/dist/js/swiper.esm").Autoplay & {
    name: string;
}) | (import("swiper/dist/js/swiper.esm").EffectFade & {
    name: string;
}) | (import("swiper/dist/js/swiper.esm").EffectCube & {
    name: string;
}) | (import("swiper/dist/js/swiper.esm").EffectFlip & {
    name: string;
}) | (import("swiper/dist/js/swiper.esm").EffectCoverflow & {
    name: string;
}))[], moduleName: SwiperModuleName) => boolean;

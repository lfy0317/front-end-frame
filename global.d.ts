declare namespace NodeJS {
    interface ProcessEnv {
        NODE_ENV: "development" | "production";
    }
}

declare module "*.css";
declare module "*.module.less";
declare module "*.less" {
    const content: { [className: string]: string };
    export default content;
}

declare module "*.svg";
declare module "*.png";
declare module "*.jpg";
declare module "*.jpeg";

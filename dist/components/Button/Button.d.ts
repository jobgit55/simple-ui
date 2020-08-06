import React, { FC, ButtonHTMLAttributes, AnchorHTMLAttributes } from "react";
export declare type ButtonSize = "lg" | "sm";
export declare type ButtonType = "primary" | "default" | "danger" | "link";
interface BaseButtonProps {
    className?: string;
    /**
     * set button disabled
     */
    disabled?: boolean;
    /**
     * set button size
     */
    size?: ButtonSize;
    /**
     * set button type
     */
    btnType: ButtonType;
    children: React.ReactNode;
    href?: string;
}
declare type NativeButtonProps = BaseButtonProps & ButtonHTMLAttributes<HTMLElement>;
declare type AnchorButtonProps = BaseButtonProps & AnchorHTMLAttributes<HTMLElement>;
export declare type ButtonProps = Partial<NativeButtonProps & AnchorButtonProps>;
/**
 * Button Component
 * // Import
 * ~~~js
 * import { Button } from 'antd-clone'
 * ~~~
 * @param props
 */
export declare const Button: FC<ButtonProps>;
export default Button;

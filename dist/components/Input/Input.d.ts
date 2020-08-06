import { FC, ReactElement, InputHTMLAttributes, ChangeEvent } from 'react';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
declare type InputSize = 'lg' | 'sm';
export interface InputProps extends Omit<InputHTMLAttributes<HTMLElement>, 'size'> {
    /**whether disable Input */
    disabled?: boolean;
    /**set Input size, supports 'lg', 'sm' */
    size?: InputSize;
    /**add icon at right side of Input */
    icon?: IconProp;
    /**add prepend */
    prepend?: string | ReactElement;
    /**add append */
    append?: string | ReactElement;
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}
/**
 * Input Component
 *
 * ~~~js
 * // Import
 * import { Input } from 'antd-clone'
 * ~~~
 * supports all HTMLInput attributes
 */
export declare const Input: FC<InputProps>;
export default Input;

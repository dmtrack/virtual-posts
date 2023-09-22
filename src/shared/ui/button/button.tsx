/* eslint-disable react/button-has-type */
import { ButtonHTMLAttributes } from 'react';
import cn from 'classnames';

import styles from './Button.module.scss';

type ButtonType = 'submit' | 'button' | 'reset';

type ButtonSize = 'm' | 'l';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    type?: ButtonType;
    size?: ButtonSize;
    color?: 'white' | 'green';
    text: string;
}

export function Button({
    text,
    type = 'button',
    size = 'm',
    color = 'white',
    className,
    ...props
}: ButtonProps) {
    const buttonClassName = cn(
        className,
        styles.button,
        styles[`button--${size}`],
        styles[`button--${color}`]
    );

    return (
        <>
            {' '}
            <button type={type} className={buttonClassName} {...props}>
                {text}
            </button>
        </>
    );
}

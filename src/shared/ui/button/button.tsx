import { clsx } from 'clsx';
import { ButtonHTMLAttributes, FC, ReactNode } from 'react';
import styles from './button.module.scss';
import colors from '../../styles/colors.module.scss';
import { type Colors } from '../../types';

type ButtonType = 'tertiary' | 'danger' | 'secondary' | 'primary';

type ButtonContent = 'icon_button' | 'text_button';

type ButtonSize = 'l' | 'm' | 's';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    size?: ButtonSize;
    content?: ButtonContent;
    typeBtn?: ButtonType;
    className?: string;
    isDisabled?: boolean;
    width?: string;
    color?: Colors;
}

export const Button: FC<ButtonProps> = (props) => {
    const {
        className,
        children,
        content = 'text_button',
        size = 'l',
        typeBtn = 'primary',
        isDisabled = false,
        width,
        color = 'white',
        ...rest
    } = props;

    return (
        <button
            disabled={isDisabled}
            style={{
                width: width ? `${width}` : undefined,
            }}
            className={clsx(
                styles.container,
                {
                    [styles[`size_${size}`]]: size,
                    [styles[typeBtn]]: typeBtn,
                    [styles[content]]: content,
                    [colors[color]]: color,
                },
                [className]
            )}
            {...rest}>
            {children}
        </button>
    );
};

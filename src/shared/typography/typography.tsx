import { clsx } from 'clsx';
import { FC, ReactNode } from 'react';
import { type Colors } from '../types';
import styles from './typography.module.scss';
import colors from '../../styles/colors.module.scss';

type TypographySize =
    | 'heading_s'
    | 'heading_m'
    | 'heading_l'
    | 'heading_xl'
    | 'body_s'
    | 'body_m'
    | 'body_l'
    | 'caption';

type TypographyVariants = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p';

interface TypographyProps {
    children: ReactNode;
    className?: string;
    size?: TypographySize;
    variant?: TypographyVariants;
    color?: Colors;
}

export const Typography: FC<TypographyProps> = (props) => {
    const {
        children,
        className,
        size = 'body_m',
        variant = 'p',
        color = 'white',
        ...rest
    } = props;
    const Component = variant;

    return (
        <Component
            className={clsx(
                {
                    [styles[size]]: size,
                    [colors[color]]: color,
                },
                [className]
            )}
            {...rest}>
            {children}
        </Component>
    );
};

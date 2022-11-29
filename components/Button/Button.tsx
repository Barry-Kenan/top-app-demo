import React from 'react';
import styles from './Button.module.css';
import cn from 'classnames';
import { ButtonProps } from './Button.props';
import ArrowIcon from './arrow.svg';
import { motion } from 'framer-motion';

const Button = ({ appearence, arrow = 'none', children, className, ...props }: ButtonProps): JSX.Element => {
    return (
        <motion.button
            whileHover={{ scale: 1.05 }}
            className={cn(styles.button, className, {
                [styles.primary]: appearence == 'primary',
                [styles.ghost]: appearence == 'ghost',
            })}
            {...props}
        >
            {children}
            {arrow !== 'none' && <span className={cn(styles.arrow, {
                [styles.down]: arrow === 'down'
            })} >
                <ArrowIcon />
            </span>}
        </motion.button>
    );
};

export default Button;
import React from 'react';
import { TextareaProps } from './Textarea.props';
import styles from './Textarea.module.css';
import cn from 'classnames';

const Textarea = ({ className, ...props }: TextareaProps): JSX.Element => {
    return (
        <textarea className={cn(className, styles.textarea)} {...props} />
    );
};

export default Textarea;
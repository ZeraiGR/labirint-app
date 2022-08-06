import React from 'react';
import cn from 'classnames';

import { InfoProps } from './Info.props';
import styles from './Info.module.scss';
import { Title } from '../Title/Title';

export const Info = React.memo(
  ({ title, description, children, className, ...props }: InfoProps): JSX.Element => {
    return (
      <div className={cn(styles.info, className)} {...props}>
        <Title className={styles.title} tag="h2">
          {title || 'Введите заголовок для игры'}
        </Title>
        <p className={styles.description}>{description || 'Введите описание для игры'}</p>
        {children}
      </div>
    );
  },
);

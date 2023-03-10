import { FC } from 'react';

import cn from 'lib/analytics/classnames';

import useStatus from '../utils';

import { THEME } from './constants';
import type { RadioProps } from './types';

export const Radio: FC<RadioProps> = ({
  theme = 'dark',
  disabled = false,
  input = {},
  meta = {},
  className,
  ...props
}: RadioProps) => {
  const st = useStatus({ active: !!input.checked, meta, disabled });

  return (
    <input
      {...input}
      {...props}
      type="radio"
      disabled={disabled}
      className={cn({
        'form-radio': true,
        [THEME[theme].base]: true,
        [THEME[theme].status[st]]: true,
        [className]: !!className,
      })}
    />
  );
};

export default Radio;

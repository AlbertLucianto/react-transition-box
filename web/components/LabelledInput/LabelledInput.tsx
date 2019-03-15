import cx from 'classnames';
import React from 'react';
import { proxyListeners } from '../utils';

import './style.scss';

interface ILabelledInputProps {
  label: string;
  labelStyle?: React.CSSProperties;
  labelClassName?: string;
  multiline?: boolean;
  className?: string;
  invalid?: boolean;
  id: string;
  [other: string]: any;
}

function LabelledInput({
  label,
  labelStyle,
  labelClassName,
  multiline,
  id,
  className,
  invalid,
  ...rest
}: ILabelledInputProps) {
  const transformedProps = proxyListeners(rest);
  const Tag = multiline ? 'textarea' : 'input';

  return (
    <label htmlFor={id}>
      <div
        className={cx('label', labelClassName)}
        style={labelStyle}
      >
        {label}
      </div>
      <Tag
        id={id}
        className={cx('input', className, { invalid })}
        {...transformedProps}
      />
    </label>
  );
}

LabelledInput.defaultProps = {
  className: '',
  invalid: false,
  labelClassName: '',
  labelStyle: null,
  multiline: false,
};

export default LabelledInput;

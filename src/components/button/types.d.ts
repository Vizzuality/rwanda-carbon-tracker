import { ButtonHTMLAttributes, AnchorHTMLAttributes } from 'react';

import { LinkProps } from 'next/link';

export interface AnchorButtonProps {
  theme: 'primary' | 'white' | 'cobalt' | 'cyan' | 'secondary' | 'danger';
  size: 'xs' | 's' | 'base' | 'l' | 'xl';
  className?: string;
}

// Button props
export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  AnchorButtonProps & {
    href?: undefined;
  };

// Anchor props
export type AnchorProps = AnchorHTMLAttributes<HTMLAnchorElement> &
  AnchorButtonProps & {
    href?: string;
    disabled?: boolean;
    anchorLinkProps?: LinkProps;
  };

// Input/output options
export type Overload = {
  (props: ButtonProps): JSX.Element;
  (props: AnchorProps): JSX.Element;
};

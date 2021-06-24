import React from 'react';

import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';

// import { Link } from '@components/Link';

export interface IHeadingProps {
  /**
   * Heading type.
   */
  variant: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  /**
   * Which style the heading should use.
   *
   * Only needed to override the style from the `variant` prop.
   *
   * Use sparingly.
   */
  lookAlikeVariant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  /**
   * Hides the `#` icon when the heading is hovered over.
   */
  noAnchorButton?: boolean;
  id?: string;
  className?: string;
  children: React.ReactNode;
}

const useStyles = makeStyles({
  common: {
    lineHeight: 1.25,
    fontWeight: 600,

    '& .docs-heading-link': {
      position: 'absolute',
      left: -24,
      top: '0',
      display: 'flex',
      alignItems: 'center',
      height: '1em',
      paddingTop: '0.15em',
      opacity: 0,

      '&:focus': {
        opacity: 1,
      },
    },

    '&:hover, &:focus-within': {
      '& .docs-heading-link': {
        opacity: 1,
      },
    },
  },
  h1: {
    fontSize: '2.2rem',
  },
  h2: {
    fontSize: '1.65rem',
    paddingBottom: 4,
    borderBottom: `1px solid var(--faint-grey)`,
  },
  h3: {
    fontSize: '1.35rem',
  },
});

export function Heading({ variant, className, children, lookAlikeVariant, noAnchorButton = false, ...otherProps }: IHeadingProps) {
  const classes = useStyles();

  return React.createElement(variant, {
    className: clsx(classes.common, classes[lookAlikeVariant || variant], className),
    children: [children],
    ...otherProps,
  });
}

// function AnchorButton({ headingId }) {
//   return <Link url={`#${headingId}`}></Link>;
// }

import { ReactNode } from 'react';

import styles from './Flex.module.scss';

type FlexProps = {
  children: ReactNode;
  className?: string;
  fadeIn?: boolean;
  direction?: 'column' | 'row';
  center?: boolean;
  justifyContent?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around';
  alignItems?: 'flex-start' | 'flex-end' | 'center' | 'space-between';
  basis?: number;
  grow?: 0 | 1;
  shrink?: 0 | 1;
  width?: string;
  height?: string;
  // padding
  p?: number;
  pl?: number;
  pt?: number;
  pr?: number;
  pb?: number;
  // margin
  m?: number;
  ml?: number;
  mt?: number;
  mr?: number;
  mb?: number;
};

function Flex({
  children,
  className,
  fadeIn,
  direction,
  justifyContent,
  alignItems,
  center,
  basis,
  grow,
  shrink,
  width,
  height,
  p,
  pl,
  pt,
  pr,
  pb,
  m,
  ml,
  mt,
  mr,
  mb,
}: FlexProps) {
  return (
    <div
      style={{
        flexDirection: direction,
        justifyContent: center ? 'center' : justifyContent,
        alignItems: center ? 'center' : alignItems,
        flexBasis: basis,
        flexGrow: grow,
        flexShrink: shrink,
        width,
        height,
        padding: p,
        paddingLeft: pl,
        paddingRight: pr,
        paddingTop: pt,
        paddingBottom: pb,
        margin: m,
        marginLeft: ml,
        marginRight: mr,
        marginTop: mt,
        marginBottom: mb,
      }}
      className={[styles.root, fadeIn ? styles.fadeIn : '', className].join(
        ' '
      )}
    >
      {children}
    </div>
  );
}

export default Flex;

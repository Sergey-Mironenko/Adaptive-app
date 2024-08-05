'use client'

import React from "react";
import classNames from "classnames";
import { useMediaQuery } from 'react-responsive';

type Props = {
  title: string,
  content: string,
}

export const Card: React.FC<Props> = ({ title, content }) => {
  const onTablet = useMediaQuery({ maxWidth: 1000 });
  const onPhone = useMediaQuery({ maxWidth: 500 });

  return (
    <div className={classNames(
      'bg-slate-200'
    )}>
      <div className={classNames(
        'bg-emerald-300 w-10 h-10',
        { 'w-8 h-8': onTablet },
        { 'w-6 h-6': onPhone },
      )}></div>

      <div>
        {title}
      </div>

      <span>
        {content}
      </span>
    </div>
  );
}

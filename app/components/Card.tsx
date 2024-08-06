'use client'

import React from "react";
import classNames from "classnames";
import { useMediaQuery } from 'react-responsive';

type Props = {
  title: string,
  content: string,
}

export const Card: React.FC<Props> = ({ title, content }) => {
  const onTablet = useMediaQuery({ maxWidth: 1200 });
  const onPhone = useMediaQuery({ maxWidth: 600 });

  return (
    <div className={classNames(
      'p-5 flex flex-col grow min-w-64 shadow-card rounded-md'
    )}>
      <div className={classNames(
        'w-8 h-8 rounded-full mb-5 bg-done bg-cover bg-center',
        { 'w-8 h-8': onTablet },
        { 'w-6 h-6': onPhone },
      )}></div>

      <div className={classNames(
        'mb-5 font-bold text-gray-700 text-base'
      )}>
        {title}
      </div>

      <span className={classNames(
        'text-gray-400 font-medium text-sm'
      )}>
        {content}
      </span>
    </div>
  );
}

'use client'

import React from "react";
import classNames from "classnames";
import { useMediaQuery } from 'react-responsive';

export default function Announcements() {
  const onTablet = useMediaQuery({ maxWidth: 1200 });
  const onPhone = useMediaQuery({ maxWidth: 600 });

  return (
    <section className={classNames(
      'bg-white px-20 py-14 border-b-2 border-zinc-200',
      { 'px-11 py-5': onTablet },
      { 'px-8 py-4': onPhone },
    )}>
      <h2 className={classNames(
        'flex items-center mb-5 text-teal-300 font-bold',
        { 'text-sm': onPhone },
        { 'text-xl': !onPhone },
      )}>
        Announcements from Tipaw
        <div className={classNames(
          ' bg-red-500 rounded-full',
          { 'w-2 h-2 ml-3': onPhone },
          { 'w-4 h-4 ml-5': !onPhone },
        )}></div>
      </h2>

      <div className={classNames(
        'border-teal-300 border-2 rounded-md'
      )}>
        <div className={classNames(
          'flex items-center p-5 bg-teal-300 text-white font-bold',
          { 'text-sm p-3': onPhone },
        )}>
          What is Tipaw?
          <div
            className={classNames(
              'ml-auto w-6 h-6 bg-arrow bg-70% bg-no-repeat bg-center rounded-full',
              { 'w-4 h-4': onTablet },
              { 'w-3 h-3': onPhone },
            )}
          ></div>
        </div>

        <p className={classNames(
          'p-8 text-slate-600 font-medium',
          { 'text-sm p-4': onPhone },
        )}>
          <div className="flex mb-5 text-teal-200 font-bold">
            <div className={classNames(
              'w-5 h-5 bg-teal-200 mr-5',
              { 'w-3 h-3 mr-3': onPhone },
            )}></div>
            Lorem
          </div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
    </section>
  );
}

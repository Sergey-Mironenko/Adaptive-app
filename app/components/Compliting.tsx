'use client'

import React from "react";
import classNames from "classnames";
import { useMediaQuery } from 'react-responsive';

export default function Compliting() {
  const onTablet = useMediaQuery({ maxWidth: 1200 });
  const onPhone = useMediaQuery({ maxWidth: 600 });

  return (
    <section className={classNames(
      "flex bg-white items-center justify-between px-20 py-14 border-b-2 border-zinc-200 text-slate-500" ,
      { 'flex-col px-11 py-5': onTablet },
      { 'text-xs px-8 py-4': onPhone },
    )}>
      <div className={classNames(
        { 'w-4/6 mb-20': onTablet },
        { 'flex flex-col content-start items-center mb-10 w-full': onPhone },
      )}>
        <h2 className={classNames(
          'text-teal-300 font-medium text-2xl  mb-10',
          { 'text-sm mb-3': onPhone },
        )}>Yoy successfully completed your profile at Tipaw</h2>

        <h6 className={classNames(
          'flex items-center',
          { 'text-xs': onPhone },
        )}>
          Now you kan use Tipaw for 100%
          <div
            className={classNames(
              'w-7 h-7 bg-rocket bg-70% bg-no-repeat bg-center rounded-full',
              { 'w-5 h-5': onTablet },
              { 'w-4 h-4 bg-60%': onPhone },
            )}
          ></div>
          <div></div>
        </h6>
      </div>

      <div className={classNames(
        { 'w-4/6': onTablet },
        { 'w-1/3': !onTablet && !onPhone },
        { 'w-full': onPhone },
      )}>
        <div className={classNames(
            'flex justify-between gap-20 mb-10'
        )}>
          <div className={classNames(
            'text-slate-800 font-medium text-xl',
            { 'text-xs': onPhone },
          )}>Profile completing</div>

          <div className={classNames(
            'text-green-400 font-medium text-xl',
            { 'text-xs': onPhone },
          )}>100%</div>
        </div>

        <div className={classNames(
            'flex justify-between gap-1',
        )}>
          <div className="bg-green-400 h-2 w-1/5 rounded-sm"></div>
          <div className="bg-green-400 h-2 w-1/5 rounded-sm"></div>
          <div className="bg-green-400 h-2 w-1/5 rounded-sm"></div>
          <div className="bg-green-400 h-2 w-1/5 rounded-sm"></div>
          <div className="bg-green-400 h-2 w-1/5 rounded-sm"></div>
        </div>
      </div>
    </section>
  );
}

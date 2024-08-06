'use client'

import React from "react";
import classNames from "classnames";
import { useMediaQuery } from 'react-responsive';

export default function Compliting() {
  const onTablet = useMediaQuery({ maxWidth: 1200 });
  const onPhone = useMediaQuery({ maxWidth: 600 });

  return (
    <section className={classNames(
      "flex bg-white items-center justify-between px-10 py-4 border-b-2 border-zinc-200 text-slate-500" ,
      { 'flex-col': onTablet },
      { 'text-xs': onPhone },
    )}>
      <div className={classNames(
        { 'mb-10': onTablet },
        { 'flex flex-col content-center items-center mb-5': onPhone },
      )}>
        <h2 className={classNames(
          'text-emerald-300 font-medium text-xl  mb-10',
        )}>Yoy successfully completed your profile at Tipaw</h2>

        <h6 className={classNames(
        )}>Now you kan use Tipaw for 100%</h6>
      </div>

      <div className={classNames(
        'w-1/3'
      )}>
        <div className={classNames(
            'flex justify-between gap-20 mb-10'
        )}>
          <div className={classNames(
            'text-slate-800 font-medium text-xl',
            { 'text-xs': onPhone },
          )}>Profile completing</div>

          <div className={classNames(
            'text-emerald-300 font-medium text-xl',
            { 'text-xs': onPhone },
          )}>100%</div>
        </div>

        <div className={classNames(
            'flex justify-between gap-1',
        )}>
          <div className="bg-emerald-300 h-2 w-1/5 rounded-sm"></div>
          <div className="bg-emerald-300 h-2 w-1/5 rounded-sm"></div>
          <div className="bg-emerald-300 h-2 w-1/5 rounded-sm"></div>
          <div className="bg-emerald-300 h-2 w-1/5 rounded-sm"></div>
          <div className="bg-emerald-300 h-2 w-1/5 rounded-sm"></div>
        </div>
      </div>
    </section>
  );
}

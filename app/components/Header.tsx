'use client'

import React from "react";
import classNames from "classnames";
import { useMediaQuery } from 'react-responsive';

export default function Header() {
  const onTablet = useMediaQuery({ maxWidth: 1200 });
  const onPhone = useMediaQuery({ maxWidth: 600 });

  return (
    <header className={classNames(
      "flex bg-white items-center justify-between px-10 py-4 border-b-2 border-zinc-200 text-slate-500 mb-10" 
    )}>
      <strong className={classNames(
        { 'text-sm': onTablet },
      )}>My Tipaw</strong>

      <div className={classNames(
        'flex gap-20',
        { 'text-sm gap-10': onTablet },
        { 'text-sm gap-5': onPhone },
      )}>
        <div className={classNames(
          'flex gap-3 text-lg font-bold items-center',
          { 'text-sm gap-1': onTablet },
        )}>
          <button>Fr</button>

          {!onPhone && (
            <div className={classNames(
              'flex gap-3 text-emerald-300 items-center',
              { 'text-sm gap-1': onTablet },
            )}>
              <div>.</div>

              <button>Nl</button>
            </div>
          )}
        </div>

        <div
          className={classNames(
            'w-10 h-10 bg-notifications bg-cover bg-center rounded-full',
            { 'w-5 h-5': onTablet },
            { 'w-3 h-3': onPhone },
          )}
        ></div>

        <div className={classNames(
          'flex gap-3 items-center',
          { 'gap-1': onTablet },
        )}>
          <div
            className={classNames(
              'w-10 h-10 bg-photo bg-cover bg-center rounded-full',
              { 'w-5 h-5': onTablet },
              { 'w-3 h-3': onPhone },
            )}
          ></div>

          {!onPhone && (
            <div>Sergey</div>
          )}

          <button>&#9660;</button>
        </div>
      </div>
    </header>
  );
}

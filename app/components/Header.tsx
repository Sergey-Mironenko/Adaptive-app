'use client'

import React from "react";
import classNames from "classnames";
import { useMediaQuery } from 'react-responsive';

export default function Header() {
  const onTablet = useMediaQuery({ maxWidth: 1000 });
  const onPhone = useMediaQuery({ maxWidth: 500 });

  return (
    <header className={classNames(
      "flex bg-white items-center justify-between px-10 py-4 border-b-2 border-zinc-200 text-slate-500" 
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

        <img className="object-contain" src="../../public/bell.png" alt="B" />

        <div className={classNames(
          'flex gap-3 items-center',
          { 'gap-1': onTablet },
        )}>
          <img
            className={classNames(
              'w-10 h-10',
              { 'w-5 h-5': onTablet },
              { 'w-3 h-3': onPhone },
            )}
            src="../../public/photo.png"
            alt="P"
          ></img>

          {!onPhone && (
            <div>Sergey</div>
          )}

          <button>&#9660;</button>
        </div>
      </div>
    </header>
  );
}

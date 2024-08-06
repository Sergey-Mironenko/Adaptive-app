'use client'

import React from "react";
import classNames from "classnames";
import { useMediaQuery } from 'react-responsive';

import { Card } from "./Card";

export default function CardContainer() {
  const onTablet = useMediaQuery({ maxWidth: 1200 });
  const onPhone = useMediaQuery({ maxWidth: 600 });

  return (
    <section className={classNames(
      'px-20 py-14 grid bg-white gap-10 mb-12 gap-y-10 border-b-2 border-zinc-200',
      { 'px-11 py-5 mb-10': onTablet },
      { 'px-8 py-4': onPhone },
    )}>
      <div className={classNames(
        'row-start-1 row-end-1',
        { 'row-start-1 row-end-1': onPhone },
      )}>
        <Card title="Verification" content="You verified your account"/>
      </div>

      <div className={classNames(
        'row-start-1 row-end-1',
        { 'row-start-2 row-end-2': onPhone },
      )}>
        <Card title="Profile picture" content="You added your profile picture"/>
      </div>

      <div className={classNames(
        'row-start-1 row-end-1',
        { 'row-start-2 row-end-3': onTablet },
        { 'row-start-3 row-end-3': onPhone },
      )}>
        <Card title="Parents" content="You added the parents"/>
      </div>

      <div className={classNames(
        'row-start-1 row-end-1',
        { 'row-start-2 row-end-3': onTablet },
        { 'row-start-4 row-end-4': onPhone },
      )}>
        <Card title="Litter" content="You created the litter"/>
      </div>
    </section>
  );
}

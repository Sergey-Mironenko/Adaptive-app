'use client'

import React from "react";
import classNames from "classnames";
import { useMediaQuery } from 'react-responsive';

import { Card } from "./Card";

export default function CardContainer() {
  const onTablet = useMediaQuery({ maxWidth: 1000 });
  const onPhone = useMediaQuery({ maxWidth: 500 });

  return (
    <section className={classNames(
        'p-10 grid bg-white w-full content-around grid-rows-1 grid-cols-4 gap-20 mb-10',
        { 'p-6 grid-cols-2': onTablet },
        { 'p-4 grid-cols-1 content-center': onPhone },
    )}>
        <div className={classNames(
           'row-span-1 w-20'
        )}>
          <Card title="sdfdsdsf" content="dfsasdfaf"/>
        </div>

        <div className={classNames(
            'row-span-1 w-20'
        )}>
          <Card title="sdfdsdsf" content="dfsasdfaf"/>
        </div>

        <div className={classNames(
            'row-span-2 w-20'
        )}>
          <Card title="sdfdsdsf" content="dfsasdfaf"/>
        </div>

        <div className={classNames(
            'row-span-2 w-20'
        )}>
          <Card title="sdfdsdsf" content="dfsasdfaf"/>
        </div>
    </section>
  );
}

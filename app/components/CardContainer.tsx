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
        'p-10 grid bg-white content-around grid-rows-1 grid-cols-4 gap-20 mb-10',
        { 'p-6 grid-cols-2 grid-rows-2': onTablet },
        { 'p-4 grid-cols-1 grid-rows-4': onPhone },
    )}>
        <div className={classNames(
           { 'row-start-1 row-end-1': onPhone },
        )}>
          <Card title="sdfdsdsf" content="dfsasdfaf"/>
        </div>

        <div className={classNames(
  
            { 'row-start-2 row-end-2': onPhone },
        )}>
          <Card title="sdfdsdsf" content="dfsasdfaf"/>
        </div>

        <div className={classNames(
     
            { 'row-start-2 row-end-3': onTablet },
            { 'row-start-3 row-end-3': onPhone },
        )}>
          <Card title="sdfdsdsf" content="dfsasdfaf"/>
        </div>

        <div className={classNames(

            { 'row-start-2 row-end-3': onTablet },
            { 'row-start-4 row-end-4': onPhone },
        )}>
          <Card title="sdfdsdsf" content="dfsasdfaf"/>
        </div>
    </section>
  );
}

"use client";

import React from "react";
import Link from "next/link";
import { GitHub, Facebook, Twitter, Instagram } from "@material-ui/icons";
import { ArrowIcon } from "./ArrowIcon";

function Card() {
  return (
    <section>
      <div className="flex gap-7 text-black">
        <div>
          <img
            className="rounded-lg border-2 border-neutral-200 dark:border-neutral-700"
            src={`/irere.jpg`}
            alt="Irere Emmy"
          />
        </div>
        <div className="flex flex-1 flex-col gap-5">
          <a
            href={`/blog/`}
            className="border border-neutral-200 dark:border-neutral-700 bg-neutral-50  dark:bg-neutral-800 rounded flex items-center justify-between px-3 py-4 w-full"
          >
            <div className="flex flex-col">
              <p className="font-bold text-neutral-900 dark:text-neutral-100">
                Twitter
              </p>
              <p>12 followers</p>
            </div>
            <div className="text-neutral-700 dark:text-neutral-300">
              <ArrowIcon />
            </div>
          </a>
          <a
            href={`/blog/`}
            className="border border-neutral-200 dark:border-neutral-700 bg-neutral-50  dark:bg-neutral-800 rounded flex items-center justify-between px-3 py-4 w-full"
          >
            <div className="flex flex-col">
              <p className="font-bold text-neutral-900 dark:text-neutral-100">
                Github
              </p>
              <p>1000 contributions</p>
            </div>
            <div className="text-neutral-700 dark:text-neutral-300">
              <ArrowIcon />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Card;

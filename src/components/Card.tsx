"use client";

import React from "react";
import { ArrowIcon } from "./ArrowIcon";

function Card() {
  return (
    <section>
      <div className="flex sm:flex-row flex-col gap-10 text-black">
        {/* <div className="flex sm:justify-start justify-center">
          <img
            className="rounded-lg hover:animate-spin border-2 border-neutral-200 dark:border-neutral-700"
            src={`/irere.jpg`}
            alt="Irere Emmy"
          />
        </div> */}
        <div className="flex flex-1 flex-col gap-5">
          <a
            href={`https://twitter.com/irere_emmanuel`}
            className="border border-neutral-200 dark:border-neutral-700 bg-neutral-50  dark:bg-neutral-800 rounded flex items-center justify-between px-3 py-4 w-full"
          >
            <div className="flex flex-col">
              <p className="font-bold text-neutral-900 dark:text-neutral-100">
                Twitter
              </p>
              <p className="text-neutral-700 dark:text-neutral-300">
                Talk to me here
              </p>
            </div>
            <div className="text-neutral-700 dark:text-neutral-300">
              <ArrowIcon />
            </div>
          </a>
          <a
            href={`https://github.com/irere123`}
            className="border border-neutral-200 dark:border-neutral-700 bg-neutral-50  dark:bg-neutral-800 rounded flex items-center justify-between px-3 py-4 w-full"
          >
            <div className="flex flex-col">
              <p className="font-bold text-neutral-900 dark:text-neutral-100">
                Github
              </p>
              <p className="text-neutral-700 dark:text-neutral-300">
                View public work here
              </p>
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

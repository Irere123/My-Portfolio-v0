import { Metadata } from "next";
import Header from "../../components/Header";

export const metadata: Metadata = {
  title: "Workshop",
};

export default function WorkshopPage() {
  return (
    <div className="space-y-2">
      <Header />
      <div>
        I create personnal projects, about web development, JavaScript and
        TypeScript, React and Next.js, and more. Those projects some of them are
        public repos on github and some are private. You can see some of my
        favorites below.
      </div>
      <div className="flex flex-col gap-4 pb-8">
        <a
          href="https://github.com/Irere123/NEOX"
          className="border border-neutral-200 dark:border-neutral-700 bg-neutral-50  dark:bg-neutral-800 rounded flex items-center justify-between px-3 py-4 w-full"
        >
          <div className="flex flex-col">
            <p className="font-bold text-neutral-900 dark:text-neutral-100">
              Neox
            </p>
            <p className="text-neutral-600 dark:text-neutral-400">
              Neox is a platform for communication between students and other
              people as well where you can collaborate and solve problems
              together in teams
            </p>
          </div>
          <div className="text-neutral-700 dark:text-neutral-300">
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z"
                fill="currentColor"
              ></path>
            </svg>
          </div>
        </a>
        <a
          href="https://github.com/Irere123/swipe"
          className="border border-neutral-200 dark:border-neutral-700 bg-neutral-50  dark:bg-neutral-800 rounded flex items-center justify-between px-3 py-4 w-full"
        >
          <div className="flex flex-col">
            <p className="font-bold text-neutral-900 dark:text-neutral-100">
              Swipe
            </p>
            <p className="text-neutral-600 dark:text-neutral-400">
              Swipe is a platform for communication between friends and you find
              only and talk to them no posting and censorship
            </p>
          </div>
          <div className="text-neutral-700 dark:text-neutral-300">
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z"
                fill="currentColor"
              ></path>
            </svg>
          </div>
        </a>
        <a
          href="https://github.com/Irere123/blog"
          className="border border-neutral-200 dark:border-neutral-700 bg-neutral-50  dark:bg-neutral-800 rounded flex items-center justify-between px-3 py-4 w-full"
        >
          <div className="flex flex-col">
            <p className="font-bold text-neutral-900 dark:text-neutral-100">
              Blog
            </p>
            <p className="text-neutral-600 dark:text-neutral-400">
              This is a platform where i blog about technologies that i am
              learning and those that i know
            </p>
          </div>
          <div className="text-neutral-700 dark:text-neutral-300">
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z"
                fill="currentColor"
              ></path>
            </svg>
          </div>
        </a>
        <a
          href="https://github.com/Irere123/Django-PWA-App"
          className="border border-neutral-200 dark:border-neutral-700 bg-neutral-50  dark:bg-neutral-800 rounded flex items-center justify-between px-3 py-4 w-full"
        >
          <div className="flex flex-col">
            <p className="font-bold text-neutral-900 dark:text-neutral-100">
              Asknet
            </p>
            <p className="text-neutral-600 dark:text-neutral-400">
              Asknet allows you to post questions, answer questions and comments
              on others answers also if you want to track the topics you're
              interested in you can do it.
            </p>
          </div>
          <div className="text-neutral-700 dark:text-neutral-300">
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z"
                fill="currentColor"
              ></path>
            </svg>
          </div>
        </a>
      </div>
    </div>
  );
}

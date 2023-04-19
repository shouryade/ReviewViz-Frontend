import React from "react";
import "../../App.css";
import { Card } from "flowbite-react";
import { Button } from "flowbite-react";
import Typewriter from "../../components/Typewriter";

const words = [
  "AT A GLANCE   ",
  "TO SHOP WITH CONFIDENCE   ",
  "FOR MARKET RESEARCH   ",
  "TO DISCOVER WHAT'S LOVED   ",
];

export default function HomePage() {
  return (
    <div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
      <div class="my-[20vh] inline-flex justify-between items-center py-1 px-1 pr-4 mb-7"></div>

      <h1 class="mb-12 text-[80px] leading-[60px] pt-2 font-montserrat font-black tracking-normal leading-10 text-slate-100">
        PRODUCT REVIEW ANALYSIS
      </h1>
      <div class="typing-wrapper">
        <h1>
          <span class="mb-10 text-[80px] leading-[60px] font-montserrat font-medium tracking-normal leading-10 text-[#A1C0FD]">
            <Typewriter data={words} />|<br />
          </span>
        </h1>
      </div>

      <p class="pt-8 mt-10 text-[24px] leading-[36px] font-montserrat font-normal text-[#A1C0FD]">
        EASILY KNOW ABOUT A PRODUCT USING JUST THE AMAZON PRODUCT LINK.
        <br />A SINGLE CLICK TO GENERATE A DESCRIPTIVE WORD-CLOUD.
      </p>

      <div class="mt-10 flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
        <a
          href="/generate"
          class="inline-flex items-center justify-center px-5 py-3 mr-3 text-inter font-normal text-center text-white rounded-lg bg-[#1a56db] hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
        >
          Get Started
          <svg
            class="w-5 h-5 ml-2 -mr-1"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
        </a>

        <button
          onClick={() => {
            const scrollToDiv = document.getElementById("scroll-to-div");
            scrollToDiv.scrollIntoView({ behavior: "smooth" });
          }}
          className="inline-flex justify-center items-center py-3 px-5 text-inter font-normal text-center text-white-900 rounded-lg border border-gray-300 hover:bg-primary-600 hover:text-[#A1C0FD] focus:ring-4 focus:sky-500 "
        >
          Learn More
        </button>
      </div>
      <div className="pb-[8rem]"></div>
      <div id="scroll-to-div">
        <Card id="cardMain">
          <svg
            className="mb-[12px]"
            width="82"
            height="22"
            viewBox="0 0 82 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="82" height="22" rx="6" fill="#374151" />
            <path
              d="M11.4 8.20005C11.4 7.82875 11.5475 7.47265 11.8101 7.2101C12.0726 6.94755 12.4287 6.80005 12.8 6.80005H17C17.3713 6.80005 17.7274 6.94755 17.99 7.2101C18.2525 7.47265 18.4 7.82875 18.4 8.20005V13.8C18.4 14.1714 18.2525 14.5274 17.99 14.79C17.7274 15.0525 17.3713 15.2 17 15.2H12.8C12.4287 15.2 12.0726 15.0525 11.8101 14.79C11.5475 14.5274 11.4 14.1714 11.4 13.8V8.20005ZM20.1871 8.97425C20.0709 9.03234 19.9731 9.12165 19.9047 9.23218C19.8363 9.34271 19.8001 9.47009 19.8 9.60005V12.4C19.8001 12.53 19.8363 12.6574 19.9047 12.7679C19.9731 12.8784 20.0709 12.9678 20.1871 13.0258L21.5871 13.7258C21.6938 13.7792 21.8124 13.8043 21.9315 13.799C22.0507 13.7936 22.1665 13.7579 22.2679 13.6952C22.3694 13.6325 22.4532 13.5449 22.5113 13.4408C22.5694 13.3366 22.6 13.2193 22.6 13.1V8.90005C22.6 8.78077 22.5694 8.6635 22.5113 8.55934C22.4532 8.45518 22.3694 8.3676 22.2679 8.30491C22.1665 8.24222 22.0507 8.2065 21.9315 8.20113C21.8124 8.19576 21.6938 8.22093 21.5871 8.27425L20.1871 8.97425Z"
              fill="#558EFF"
            />
            <path
              d="M28.9776 7.40625V6.27273H35.7319V7.40625H33.0089V15H31.6964V7.40625H28.9776ZM40.3778 12.2855V8.45455H41.6562V15H40.4034V13.8665H40.3352C40.1847 14.2159 39.9432 14.5071 39.6108 14.7401C39.2813 14.9702 38.8707 15.0852 38.3793 15.0852C37.9588 15.0852 37.5866 14.9929 37.2628 14.8082C36.9418 14.6207 36.6889 14.3438 36.5043 13.9773C36.3224 13.6108 36.2315 13.1577 36.2315 12.6179V8.45455H37.5057V12.4645C37.5057 12.9105 37.6293 13.2656 37.8764 13.5298C38.1236 13.794 38.4446 13.9261 38.8395 13.9261C39.0781 13.9261 39.3153 13.8665 39.5511 13.7472C39.7898 13.6278 39.9872 13.4474 40.1435 13.206C40.3026 12.9645 40.3807 12.6577 40.3778 12.2855ZM46.4237 8.45455V9.47727H42.8484V8.45455H46.4237ZM43.8072 6.88636H45.0813V13.0781C45.0813 13.3253 45.1183 13.5114 45.1921 13.6364C45.266 13.7585 45.3612 13.8423 45.4776 13.8878C45.5969 13.9304 45.7262 13.9517 45.8654 13.9517C45.9677 13.9517 46.0572 13.9446 46.1339 13.9304C46.2106 13.9162 46.2702 13.9048 46.3129 13.8963L46.543 14.9489C46.4691 14.9773 46.364 15.0057 46.2276 15.0341C46.0913 15.0653 45.9208 15.0824 45.7163 15.0852C45.381 15.0909 45.0685 15.0312 44.7788 14.9062C44.489 14.7812 44.2546 14.5881 44.0756 14.3267C43.8967 14.0653 43.8072 13.7372 43.8072 13.3423V6.88636ZM50.5199 15.1321C49.9063 15.1321 49.3707 14.9915 48.9134 14.7102C48.456 14.429 48.1009 14.0355 47.848 13.5298C47.5952 13.0241 47.4688 12.4332 47.4688 11.7571C47.4688 11.0781 47.5952 10.4844 47.848 9.97585C48.1009 9.46733 48.456 9.07244 48.9134 8.79119C49.3707 8.50994 49.9063 8.36932 50.5199 8.36932C51.1335 8.36932 51.669 8.50994 52.1264 8.79119C52.5838 9.07244 52.9389 9.46733 53.1918 9.97585C53.4446 10.4844 53.571 11.0781 53.571 11.7571C53.571 12.4332 53.4446 13.0241 53.1918 13.5298C52.9389 14.0355 52.5838 14.429 52.1264 14.7102C51.669 14.9915 51.1335 15.1321 50.5199 15.1321ZM50.5241 14.0625C50.9219 14.0625 51.2514 13.9574 51.5128 13.7472C51.7741 13.5369 51.9673 13.2571 52.0923 12.9077C52.2202 12.5582 52.2841 12.1733 52.2841 11.7528C52.2841 11.3352 52.2202 10.9517 52.0923 10.6023C51.9673 10.25 51.7741 9.96733 51.5128 9.75426C51.2514 9.54119 50.9219 9.43466 50.5241 9.43466C50.1236 9.43466 49.7912 9.54119 49.527 9.75426C49.2656 9.96733 49.071 10.25 48.9432 10.6023C48.8182 10.9517 48.7557 11.3352 48.7557 11.7528C48.7557 12.1733 48.8182 12.5582 48.9432 12.9077C49.071 13.2571 49.2656 13.5369 49.527 13.7472C49.7912 13.9574 50.1236 14.0625 50.5241 14.0625ZM54.9933 15V8.45455H56.2248V9.49432H56.293C56.4123 9.14205 56.6225 8.86506 56.9237 8.66335C57.2276 8.45881 57.5714 8.35653 57.9549 8.35653C58.0344 8.35653 58.1282 8.35937 58.2362 8.36506C58.3469 8.37074 58.4336 8.37784 58.4961 8.38636V9.60511C58.445 9.59091 58.354 9.57528 58.2234 9.55824C58.0927 9.53835 57.962 9.52841 57.8313 9.52841C57.5302 9.52841 57.2617 9.59233 57.0259 9.72017C56.793 9.84517 56.6083 10.0199 56.4719 10.2443C56.3356 10.4659 56.2674 10.7187 56.2674 11.0028V15H54.9933ZM59.5987 15V8.45455H60.8729V15H59.5987ZM60.2422 7.4446C60.0206 7.4446 59.8303 7.37074 59.6712 7.22301C59.5149 7.07244 59.4368 6.89347 59.4368 6.68608C59.4368 6.47585 59.5149 6.29687 59.6712 6.14915C59.8303 5.99858 60.0206 5.9233 60.2422 5.9233C60.4638 5.9233 60.6527 5.99858 60.8089 6.14915C60.968 6.29687 61.0476 6.47585 61.0476 6.68608C61.0476 6.89347 60.968 7.07244 60.8089 7.22301C60.6527 7.37074 60.4638 7.4446 60.2422 7.4446ZM64.4918 15.1449C64.0771 15.1449 63.7021 15.0682 63.3668 14.9148C63.0316 14.7585 62.766 14.5327 62.57 14.2372C62.3768 13.9418 62.2802 13.5795 62.2802 13.1506C62.2802 12.7812 62.3512 12.4773 62.4933 12.2386C62.6353 12 62.8271 11.8111 63.0685 11.6719C63.31 11.5327 63.5799 11.4276 63.8782 11.3565C64.1765 11.2855 64.4805 11.2315 64.7901 11.1946C65.1822 11.1491 65.5004 11.1122 65.7447 11.0838C65.989 11.0526 66.1665 11.0028 66.2773 10.9347C66.3881 10.8665 66.4435 10.7557 66.4435 10.6023V10.5724C66.4435 10.2003 66.3384 9.91193 66.1282 9.70739C65.9208 9.50284 65.6112 9.40057 65.1992 9.40057C64.7702 9.40057 64.4322 9.49574 64.185 9.68608C63.9407 9.87358 63.7717 10.0824 63.6779 10.3125L62.4805 10.0398C62.6225 9.64205 62.8299 9.32102 63.1026 9.0767C63.3782 8.82955 63.695 8.65057 64.0529 8.53977C64.4109 8.42614 64.7873 8.36932 65.1822 8.36932C65.4435 8.36932 65.7205 8.40057 66.0131 8.46307C66.3086 8.52273 66.5842 8.63352 66.8398 8.79545C67.0984 8.95739 67.31 9.18892 67.4748 9.49006C67.6396 9.78835 67.7219 10.1761 67.7219 10.6534V15H66.4776V14.1051H66.4265C66.3441 14.2699 66.2205 14.4318 66.0558 14.5909C65.891 14.75 65.6793 14.8821 65.4208 14.9872C65.1623 15.0923 64.8526 15.1449 64.4918 15.1449ZM64.7688 14.1222C65.1211 14.1222 65.4222 14.0526 65.6722 13.9134C65.9251 13.7741 66.1168 13.5923 66.2475 13.3679C66.381 13.1406 66.4478 12.8977 66.4478 12.6392V11.7955C66.4023 11.8409 66.3143 11.8835 66.1836 11.9233C66.0558 11.9602 65.9094 11.9929 65.7447 12.0213C65.5799 12.0469 65.4194 12.071 65.2631 12.0938C65.1069 12.1136 64.9762 12.1307 64.8711 12.1449C64.6239 12.1761 64.3981 12.2287 64.1935 12.3026C63.9918 12.3764 63.8299 12.483 63.7077 12.6222C63.5884 12.7585 63.5288 12.9403 63.5288 13.1676C63.5288 13.483 63.6452 13.7216 63.8782 13.8835C64.1112 14.0426 64.408 14.1222 64.7688 14.1222ZM70.6932 6.27273V15H69.419V6.27273H70.6932Z"
              fill="#558EFF"
            />
          </svg>

          <h5 className="text-[48px] leading-[48px] font-inter font-extrabold tracking-none text-white-900 dark:text-white">
            <p className="text-left">How to Generate the Word Cloud</p>
          </h5>
          <p className="font-inter text-[20px] pb-[3rem] text-[#9CA3AF] dark:text-gray-400">
            <p className="text-left">
              Simply switch to the generate tab or click get started, copy the
              url of the Amazon product that you want to generate the word cloud
              for, then select the output format and then click generate.
            </p>
          </p>
          <a
            href="/generate"
            class="inline-flex items-center justify-center px-5 py-3 mr-3 text-inter font-normal text-center text-white rounded-lg bg-[#558EFF] hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900 text-[#1E1E1E]"
          >
            Get Started
            <svg
              class="w-5 h-5 ml-2 -mr-1"
              fill="#1E1E1E"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </a>
        </Card>

        <div className="cardGroup">
          <Card id="cardMain">
            <svg
              className="mb-[12px]"
              width="88"
              height="22"
              viewBox="0 0 88 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="88" height="22" rx="6" fill="#374151" />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12.8 5.3999C12.4287 5.3999 12.0726 5.5474 11.8101 5.80995C11.5475 6.0725 11.4 6.4286 11.4 6.7999V14.4999C11.4 15.0569 11.6213 15.591 12.0151 15.9848C12.4089 16.3787 12.9431 16.5999 13.5 16.5999C14.057 16.5999 14.5911 16.3787 14.9849 15.9848C15.3788 15.591 15.6 15.0569 15.6 14.4999V6.7999C15.6 6.4286 15.4525 6.0725 15.19 5.80995C14.9274 5.5474 14.5713 5.3999 14.2 5.3999H12.8ZM13.5 15.1999C13.6857 15.1999 13.8637 15.1262 13.995 14.9949C14.1263 14.8636 14.2 14.6856 14.2 14.4999C14.2 14.3143 14.1263 14.1362 13.995 14.0049C13.8637 13.8737 13.6857 13.7999 13.5 13.7999C13.3144 13.7999 13.1363 13.8737 13.005 14.0049C12.8738 14.1362 12.8 14.3143 12.8 14.4999C12.8 14.6856 12.8738 14.8636 13.005 14.9949C13.1363 15.1262 13.3144 15.1999 13.5 15.1999ZM17 13.97L20.43 10.54C20.6925 10.2775 20.8399 9.92143 20.8399 9.5502C20.8399 9.17897 20.6925 8.82294 20.43 8.5604L19.4395 7.5699C19.177 7.30744 18.821 7.16 18.4497 7.16C18.0785 7.16 17.7225 7.30744 17.4599 7.5699L17 8.0298V13.97ZM21.2 16.5999H16.3497L20.5497 12.3999H21.2C21.5713 12.3999 21.9274 12.5474 22.19 12.81C22.4525 13.0725 22.6 13.4286 22.6 13.7999V15.1999C22.6 15.5712 22.4525 15.9273 22.19 16.1899C21.9274 16.4524 21.5713 16.5999 21.2 16.5999Z"
                fill="#FF5050"
              />
              <path
                d="M29.0213 15V6.27273H34.4332V7.40625H30.3381V10.0653H34.0455V11.1946H30.3381V15H29.0213ZM38.2908 15.1321C37.646 15.1321 37.0906 14.9943 36.6246 14.7188C36.1616 14.4403 35.8036 14.0497 35.5508 13.5469C35.3008 13.0412 35.1758 12.4489 35.1758 11.7699C35.1758 11.0994 35.3008 10.5085 35.5508 9.99716C35.8036 9.4858 36.1559 9.08665 36.6076 8.79972C37.0621 8.51278 37.5934 8.36932 38.2013 8.36932C38.5707 8.36932 38.9286 8.4304 39.2752 8.55256C39.6218 8.67472 39.9329 8.86648 40.2085 9.12784C40.484 9.3892 40.7013 9.72869 40.8604 10.1463C41.0195 10.5611 41.0991 11.0653 41.0991 11.6591V12.1108H35.896V11.1562H39.8505C39.8505 10.821 39.7823 10.5241 39.646 10.2656C39.5096 10.0043 39.3178 9.7983 39.0707 9.64773C38.8263 9.49716 38.5394 9.42188 38.2099 9.42188C37.8519 9.42188 37.5394 9.50994 37.2724 9.68608C37.0082 9.85937 36.8036 10.0866 36.6587 10.3679C36.5167 10.6463 36.4457 10.9489 36.4457 11.2756V12.0213C36.4457 12.4588 36.5224 12.831 36.6758 13.1378C36.832 13.4446 37.0494 13.679 37.3278 13.8409C37.6062 14 37.9315 14.0795 38.3036 14.0795C38.5451 14.0795 38.7653 14.0455 38.9641 13.9773C39.163 13.9062 39.3349 13.8011 39.4798 13.6619C39.6246 13.5227 39.7354 13.3509 39.8121 13.1463L41.0181 13.3636C40.9215 13.7187 40.7482 14.0298 40.4982 14.2969C40.2511 14.5611 39.94 14.767 39.565 14.9148C39.1928 15.0597 38.7681 15.1321 38.2908 15.1321ZM44.4176 15.1449C44.0028 15.1449 43.6278 15.0682 43.2926 14.9148C42.9574 14.7585 42.6918 14.5327 42.4957 14.2372C42.3026 13.9418 42.206 13.5795 42.206 13.1506C42.206 12.7812 42.277 12.4773 42.419 12.2386C42.5611 12 42.7528 11.8111 42.9943 11.6719C43.2358 11.5327 43.5057 11.4276 43.804 11.3565C44.1023 11.2855 44.4063 11.2315 44.7159 11.1946C45.108 11.1491 45.4261 11.1122 45.6705 11.0838C45.9148 11.0526 46.0923 11.0028 46.2031 10.9347C46.3139 10.8665 46.3693 10.7557 46.3693 10.6023V10.5724C46.3693 10.2003 46.2642 9.91193 46.054 9.70739C45.8466 9.50284 45.5369 9.40057 45.125 9.40057C44.696 9.40057 44.358 9.49574 44.1108 9.68608C43.8665 9.87358 43.6974 10.0824 43.6037 10.3125L42.4062 10.0398C42.5483 9.64205 42.7557 9.32102 43.0284 9.0767C43.304 8.82955 43.6207 8.65057 43.9787 8.53977C44.3366 8.42614 44.7131 8.36932 45.108 8.36932C45.3693 8.36932 45.6463 8.40057 45.9389 8.46307C46.2344 8.52273 46.5099 8.63352 46.7656 8.79545C47.0241 8.95739 47.2358 9.18892 47.4006 9.49006C47.5653 9.78835 47.6477 10.1761 47.6477 10.6534V15H46.4034V14.1051H46.3523C46.2699 14.2699 46.1463 14.4318 45.9815 14.5909C45.8168 14.75 45.6051 14.8821 45.3466 14.9872C45.0881 15.0923 44.7784 15.1449 44.4176 15.1449ZM44.6946 14.1222C45.0469 14.1222 45.348 14.0526 45.598 13.9134C45.8509 13.7741 46.0426 13.5923 46.1733 13.3679C46.3068 13.1406 46.3736 12.8977 46.3736 12.6392V11.7955C46.3281 11.8409 46.2401 11.8835 46.1094 11.9233C45.9815 11.9602 45.8352 11.9929 45.6705 12.0213C45.5057 12.0469 45.3452 12.071 45.1889 12.0938C45.0327 12.1136 44.902 12.1307 44.7969 12.1449C44.5497 12.1761 44.3239 12.2287 44.1193 12.3026C43.9176 12.3764 43.7557 12.483 43.6335 12.6222C43.5142 12.7585 43.4545 12.9403 43.4545 13.1676C43.4545 13.483 43.571 13.7216 43.804 13.8835C44.0369 14.0426 44.3338 14.1222 44.6946 14.1222ZM52.4002 8.45455V9.47727H48.8249V8.45455H52.4002ZM49.7837 6.88636H51.0579V13.0781C51.0579 13.3253 51.0948 13.5114 51.1687 13.6364C51.2425 13.7585 51.3377 13.8423 51.4542 13.8878C51.5735 13.9304 51.7028 13.9517 51.842 13.9517C51.9442 13.9517 52.0337 13.9446 52.1104 13.9304C52.1871 13.9162 52.2468 13.9048 52.2894 13.8963L52.5195 14.9489C52.4457 14.9773 52.3406 15.0057 52.2042 15.0341C52.0678 15.0653 51.8974 15.0824 51.6928 15.0852C51.3576 15.0909 51.0451 15.0312 50.7553 14.9062C50.4656 14.7812 50.2312 14.5881 50.0522 14.3267C49.8732 14.0653 49.7837 13.7372 49.7837 13.3423V6.88636ZM57.956 12.2855V8.45455H59.2344V15H57.9815V13.8665H57.9134C57.7628 14.2159 57.5213 14.5071 57.1889 14.7401C56.8594 14.9702 56.4489 15.0852 55.9574 15.0852C55.5369 15.0852 55.1648 14.9929 54.8409 14.8082C54.5199 14.6207 54.267 14.3438 54.0824 13.9773C53.9006 13.6108 53.8097 13.1577 53.8097 12.6179V8.45455H55.0838V12.4645C55.0838 12.9105 55.2074 13.2656 55.4545 13.5298C55.7017 13.794 56.0227 13.9261 56.4176 13.9261C56.6563 13.9261 56.8935 13.8665 57.1293 13.7472C57.3679 13.6278 57.5653 13.4474 57.7216 13.206C57.8807 12.9645 57.9588 12.6577 57.956 12.2855ZM60.9464 15V8.45455H62.1779V9.49432H62.2461C62.3654 9.14205 62.5756 8.86506 62.8768 8.66335C63.1808 8.45881 63.5245 8.35653 63.908 8.35653C63.9876 8.35653 64.0813 8.35937 64.1893 8.36506C64.3001 8.37074 64.3867 8.37784 64.4492 8.38636V9.60511C64.3981 9.59091 64.3072 9.57528 64.1765 9.55824C64.0458 9.53835 63.9151 9.52841 63.7844 9.52841C63.4833 9.52841 63.2148 9.59233 62.979 9.72017C62.7461 9.84517 62.5614 10.0199 62.4251 10.2443C62.2887 10.4659 62.2205 10.7187 62.2205 11.0028V15H60.9464ZM68.1385 15.1321C67.4936 15.1321 66.9382 14.9943 66.4723 14.7188C66.0092 14.4403 65.6513 14.0497 65.3984 13.5469C65.1484 13.0412 65.0234 12.4489 65.0234 11.7699C65.0234 11.0994 65.1484 10.5085 65.3984 9.99716C65.6513 9.4858 66.0036 9.08665 66.4553 8.79972C66.9098 8.51278 67.4411 8.36932 68.049 8.36932C68.4183 8.36932 68.7763 8.4304 69.1229 8.55256C69.4695 8.67472 69.7805 8.86648 70.0561 9.12784C70.3317 9.3892 70.549 9.72869 70.7081 10.1463C70.8672 10.5611 70.9467 11.0653 70.9467 11.6591V12.1108H65.7436V11.1562H69.6982C69.6982 10.821 69.63 10.5241 69.4936 10.2656C69.3572 10.0043 69.1655 9.7983 68.9183 9.64773C68.674 9.49716 68.3871 9.42188 68.0575 9.42188C67.6996 9.42188 67.3871 9.50994 67.12 9.68608C66.8558 9.85937 66.6513 10.0866 66.5064 10.3679C66.3643 10.6463 66.2933 10.9489 66.2933 11.2756V12.0213C66.2933 12.4588 66.37 12.831 66.5234 13.1378C66.6797 13.4446 66.897 13.679 67.1754 13.8409C67.4538 14 67.7791 14.0795 68.1513 14.0795C68.3928 14.0795 68.6129 14.0455 68.8118 13.9773C69.0107 13.9062 69.1825 13.8011 69.3274 13.6619C69.4723 13.5227 69.5831 13.3509 69.6598 13.1463L70.8658 13.3636C70.7692 13.7187 70.5959 14.0298 70.3459 14.2969C70.0987 14.5611 69.7876 14.767 69.4126 14.9148C69.0405 15.0597 68.6158 15.1321 68.1385 15.1321ZM77.2653 10.0526L76.1104 10.2571C76.0621 10.1094 75.9854 9.96875 75.8803 9.83523C75.7781 9.7017 75.6388 9.59233 75.4627 9.5071C75.2866 9.42187 75.0664 9.37926 74.8022 9.37926C74.4414 9.37926 74.1403 9.46023 73.8988 9.62216C73.6573 9.78125 73.5366 9.98722 73.5366 10.2401C73.5366 10.4588 73.6175 10.6349 73.7795 10.7685C73.9414 10.902 74.2028 11.0114 74.5636 11.0966L75.6033 11.3352C76.2056 11.4744 76.6545 11.6889 76.9499 11.9787C77.2454 12.2685 77.3931 12.6449 77.3931 13.108C77.3931 13.5 77.2795 13.8494 77.0522 14.1562C76.8278 14.4602 76.5138 14.6989 76.1104 14.8722C75.7099 15.0455 75.2454 15.1321 74.717 15.1321C73.984 15.1321 73.386 14.9759 72.9229 14.6634C72.4599 14.348 72.1758 13.9006 72.0707 13.321L73.3022 13.1335C73.3789 13.4545 73.5366 13.6974 73.7752 13.8622C74.0138 14.0241 74.3249 14.1051 74.7085 14.1051C75.1261 14.1051 75.4599 14.0185 75.7099 13.8452C75.9599 13.669 76.0849 13.4545 76.0849 13.2017C76.0849 12.9972 76.0082 12.8253 75.8548 12.6861C75.7042 12.5469 75.4727 12.4418 75.1602 12.3707L74.0522 12.1278C73.4414 11.9886 72.9897 11.767 72.6971 11.4631C72.4073 11.1591 72.2624 10.7741 72.2624 10.3082C72.2624 9.92187 72.3704 9.58381 72.5863 9.29403C72.8022 9.00426 73.1005 8.77841 73.4812 8.61648C73.8619 8.4517 74.2979 8.36932 74.7894 8.36932C75.4968 8.36932 76.0536 8.52273 76.4599 8.82955C76.8661 9.13352 77.1346 9.54119 77.2653 10.0526Z"
                fill="#FF5050"
              />
            </svg>

            <h5 className="text-[30px] leading-[30px] font-inter font-extrabold tracking-none text-white-900 dark:text-white">
              <p className="text-left">Know both the Good and the Bad</p>
            </h5>
            <p className="font-inter text-[18px] pb-[3rem] text-[#9CA3AF] dark:text-gray-400">
              <p className="text-left">
                The generated word clouds display the negative and positive
                words differently. This makes it easier to know the pros and
                cons of the product at a quick glance.
              </p>
            </p>
            <Button
              className="bg-transparent hover:bg-transparent"
              href="/about"
            >
              <span className="text-[18px] text-[#FF5050]">Read More</span>
              <svg
                className="ml-2 -mr-1 h-4 w-4 text-[#FF5050]"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </Button>
          </Card>

          <Card id="cardMain">
            <svg
              className="mb-[12px]"
              width="124"
              height="22"
              viewBox="0 0 124 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="124" height="22" rx="6" fill="#374151" />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M18.6212 6.13576C18.7085 6.16479 18.7892 6.21072 18.8587 6.27094C18.9282 6.33116 18.9851 6.40448 19.0262 6.48671C19.0674 6.56894 19.0919 6.65847 19.0985 6.75019C19.105 6.84191 19.0934 6.93402 19.0643 7.02126L16.2643 15.4213C16.2057 15.5974 16.0794 15.7431 15.9134 15.8262C15.7473 15.9093 15.555 15.923 15.3788 15.8644C15.2027 15.8057 15.057 15.6794 14.9739 15.5134C14.8908 15.3473 14.8771 15.155 14.9357 14.9789L17.7357 6.57886C17.7648 6.49161 17.8107 6.41093 17.8709 6.34144C17.9311 6.27195 18.0045 6.215 18.0867 6.17385C18.1689 6.13271 18.2585 6.10816 18.3502 6.10162C18.4419 6.09509 18.534 6.10669 18.6212 6.13576ZM13.9949 8.40516C14.1262 8.53643 14.1999 8.71444 14.1999 8.90006C14.1999 9.08567 14.1262 9.26369 13.9949 9.39496L12.3898 11.0001L13.9949 12.6052C14.0618 12.6697 14.1151 12.747 14.1518 12.8324C14.1885 12.9178 14.2078 13.0096 14.2086 13.1026C14.2094 13.1955 14.1917 13.2877 14.1565 13.3737C14.1213 13.4598 14.0693 13.5379 14.0036 13.6036C13.9379 13.6694 13.8597 13.7213 13.7737 13.7565C13.6877 13.7917 13.5955 13.8094 13.5026 13.8086C13.4096 13.8078 13.3178 13.7885 13.2324 13.7518C13.147 13.7151 13.0697 13.6618 13.0051 13.595L10.9051 11.495C10.7739 11.3637 10.7002 11.1857 10.7002 11.0001C10.7002 10.8144 10.7739 10.6364 10.9051 10.5052L13.0051 8.40516C13.1364 8.27393 13.3144 8.20021 13.5 8.20021C13.6857 8.20021 13.8637 8.27393 13.9949 8.40516ZM20.0051 8.40516C20.1364 8.27393 20.3144 8.20021 20.5 8.20021C20.6857 8.20021 20.8637 8.27393 20.9949 8.40516L23.0949 10.5052C23.2262 10.6364 23.2999 10.8144 23.2999 11.0001C23.2999 11.1857 23.2262 11.3637 23.0949 11.495L20.9949 13.595C20.9304 13.6618 20.8531 13.7151 20.7677 13.7518C20.6823 13.7885 20.5905 13.8078 20.4975 13.8086C20.4046 13.8094 20.3124 13.7917 20.2264 13.7565C20.1404 13.7213 20.0622 13.6694 19.9965 13.6036C19.9307 13.5379 19.8788 13.4598 19.8436 13.3737C19.8084 13.2877 19.7907 13.1955 19.7915 13.1026C19.7923 13.0096 19.8116 12.9178 19.8483 12.8324C19.885 12.747 19.9383 12.6697 20.0051 12.6052L21.6102 11.0001L20.0051 9.39496C19.8739 9.26369 19.8002 9.08567 19.8002 8.90006C19.8002 8.71444 19.8739 8.53643 20.0051 8.40516Z"
                fill="#FFE86E"
              />
              <path
                d="M36.6667 10.6364C36.6667 11.5682 36.4963 12.3693 36.1554 13.0398C35.8145 13.7074 35.3471 14.2216 34.7534 14.5824C34.1625 14.9403 33.4906 15.1193 32.7377 15.1193C31.9821 15.1193 31.3074 14.9403 30.7136 14.5824C30.1227 14.2216 29.6568 13.706 29.3159 13.0355C28.975 12.3651 28.8045 11.5653 28.8045 10.6364C28.8045 9.70455 28.975 8.90483 29.3159 8.23722C29.6568 7.56676 30.1227 7.05256 30.7136 6.6946C31.3074 6.33381 31.9821 6.15341 32.7377 6.15341C33.4906 6.15341 34.1625 6.33381 34.7534 6.6946C35.3471 7.05256 35.8145 7.56676 36.1554 8.23722C36.4963 8.90483 36.6667 9.70455 36.6667 10.6364ZM35.3627 10.6364C35.3627 9.92614 35.2477 9.32812 35.0176 8.84233C34.7903 8.35369 34.4778 7.98438 34.0801 7.73438C33.6852 7.48153 33.2377 7.35511 32.7377 7.35511C32.2349 7.35511 31.786 7.48153 31.3912 7.73438C30.9963 7.98438 30.6838 8.35369 30.4537 8.84233C30.2264 9.32812 30.1127 9.92614 30.1127 10.6364C30.1127 11.3466 30.2264 11.946 30.4537 12.4347C30.6838 12.9205 30.9963 13.2898 31.3912 13.5426C31.786 13.7926 32.2349 13.9176 32.7377 13.9176C33.2377 13.9176 33.6852 13.7926 34.0801 13.5426C34.4778 13.2898 34.7903 12.9205 35.0176 12.4347C35.2477 11.946 35.3627 11.3466 35.3627 10.6364ZM41.2615 8.45455V9.47727H37.6863V8.45455H41.2615ZM38.6451 6.88636H39.9192V13.0781C39.9192 13.3253 39.9561 13.5114 40.03 13.6364C40.1039 13.7585 40.199 13.8423 40.3155 13.8878C40.4348 13.9304 40.5641 13.9517 40.7033 13.9517C40.8056 13.9517 40.8951 13.9446 40.9718 13.9304C41.0485 13.9162 41.1081 13.9048 41.1507 13.8963L41.3809 14.9489C41.307 14.9773 41.2019 15.0057 41.0655 15.0341C40.9292 15.0653 40.7587 15.0824 40.5542 15.0852C40.2189 15.0909 39.9064 15.0312 39.6167 14.9062C39.3269 14.7812 39.0925 14.5881 38.9135 14.3267C38.7346 14.0653 38.6451 13.7372 38.6451 13.3423V6.88636ZM44.0858 11.1136V15H42.8116V6.27273H44.0687V9.51989H44.1497C44.3031 9.16761 44.5375 8.88778 44.8528 8.6804C45.1681 8.47301 45.5801 8.36932 46.0886 8.36932C46.5375 8.36932 46.9295 8.46165 47.2647 8.64631C47.6028 8.83097 47.8642 9.10653 48.0488 9.47301C48.2363 9.83665 48.3301 10.2912 48.3301 10.8366V15H47.0559V10.9901C47.0559 10.5099 46.9324 10.1378 46.6852 9.87358C46.438 9.60653 46.0943 9.47301 45.6539 9.47301C45.3528 9.47301 45.0829 9.53693 44.8443 9.66477C44.6085 9.79261 44.4224 9.98011 44.286 10.2273C44.1525 10.4716 44.0858 10.767 44.0858 11.1136ZM52.8514 15.1321C52.2065 15.1321 51.6511 14.9943 51.1852 14.7188C50.7221 14.4403 50.3642 14.0497 50.1113 13.5469C49.8613 13.0412 49.7363 12.4489 49.7363 11.7699C49.7363 11.0994 49.8613 10.5085 50.1113 9.99716C50.3642 9.4858 50.7164 9.08665 51.1681 8.79972C51.6227 8.51278 52.1539 8.36932 52.7619 8.36932C53.1312 8.36932 53.4892 8.4304 53.8358 8.55256C54.1824 8.67472 54.4934 8.86648 54.769 9.12784C55.0446 9.3892 55.2619 9.72869 55.421 10.1463C55.5801 10.5611 55.6596 11.0653 55.6596 11.6591V12.1108H50.4565V11.1562H54.411C54.411 10.821 54.3429 10.5241 54.2065 10.2656C54.0701 10.0043 53.8784 9.7983 53.6312 9.64773C53.3869 9.49716 53.1 9.42188 52.7704 9.42188C52.4125 9.42188 52.1 9.50994 51.8329 9.68608C51.5687 9.85937 51.3642 10.0866 51.2193 10.3679C51.0772 10.6463 51.0062 10.9489 51.0062 11.2756V12.0213C51.0062 12.4588 51.0829 12.831 51.2363 13.1378C51.3926 13.4446 51.6099 13.679 51.8883 13.8409C52.1667 14 52.492 14.0795 52.8642 14.0795C53.1056 14.0795 53.3258 14.0455 53.5247 13.9773C53.7235 13.9062 53.8954 13.8011 54.0403 13.6619C54.1852 13.5227 54.296 13.3509 54.3727 13.1463L55.5787 13.3636C55.4821 13.7187 55.3088 14.0298 55.0588 14.2969C54.8116 14.5611 54.5005 14.767 54.1255 14.9148C53.7534 15.0597 53.3287 15.1321 52.8514 15.1321ZM57.0733 15V8.45455H58.3049V9.49432H58.373C58.4924 9.14205 58.7026 8.86506 59.0037 8.66335C59.3077 8.45881 59.6515 8.35653 60.035 8.35653C60.1145 8.35653 60.2083 8.35937 60.3162 8.36506C60.427 8.37074 60.5137 8.37784 60.5762 8.38636V9.60511C60.525 9.59091 60.4341 9.57528 60.3034 9.55824C60.1728 9.53835 60.0421 9.52841 59.9114 9.52841C59.6103 9.52841 59.3418 9.59233 59.106 9.72017C58.873 9.84517 58.6884 10.0199 58.552 10.2443C58.4157 10.4659 58.3475 10.7187 58.3475 11.0028V15H57.0733ZM64.9569 15V6.27273H70.3688V7.40625H66.2736V10.0653H69.981V11.1946H66.2736V15H64.9569ZM74.2264 15.1321C73.5815 15.1321 73.0261 14.9943 72.5602 14.7188C72.0971 14.4403 71.7392 14.0497 71.4863 13.5469C71.2363 13.0412 71.1113 12.4489 71.1113 11.7699C71.1113 11.0994 71.2363 10.5085 71.4863 9.99716C71.7392 9.4858 72.0914 9.08665 72.5431 8.79972C72.9977 8.51278 73.5289 8.36932 74.1369 8.36932C74.5062 8.36932 74.8642 8.4304 75.2108 8.55256C75.5574 8.67472 75.8684 8.86648 76.144 9.12784C76.4196 9.3892 76.6369 9.72869 76.796 10.1463C76.9551 10.5611 77.0346 11.0653 77.0346 11.6591V12.1108H71.8315V11.1562H75.786C75.786 10.821 75.7179 10.5241 75.5815 10.2656C75.4451 10.0043 75.2534 9.7983 75.0062 9.64773C74.7619 9.49716 74.475 9.42188 74.1454 9.42188C73.7875 9.42188 73.475 9.50994 73.2079 9.68608C72.9437 9.85937 72.7392 10.0866 72.5943 10.3679C72.4522 10.6463 72.3812 10.9489 72.3812 11.2756V12.0213C72.3812 12.4588 72.4579 12.831 72.6113 13.1378C72.7676 13.4446 72.9849 13.679 73.2633 13.8409C73.5417 14 73.867 14.0795 74.2392 14.0795C74.4806 14.0795 74.7008 14.0455 74.8997 13.9773C75.0985 13.9062 75.2704 13.8011 75.4153 13.6619C75.5602 13.5227 75.671 13.3509 75.7477 13.1463L76.9537 13.3636C76.8571 13.7187 76.6838 14.0298 76.4338 14.2969C76.1866 14.5611 75.8755 14.767 75.5005 14.9148C75.1284 15.0597 74.7037 15.1321 74.2264 15.1321ZM80.3532 15.1449C79.9384 15.1449 79.5634 15.0682 79.2282 14.9148C78.8929 14.7585 78.6273 14.5327 78.4313 14.2372C78.2381 13.9418 78.1415 13.5795 78.1415 13.1506C78.1415 12.7812 78.2125 12.4773 78.3546 12.2386C78.4966 12 78.6884 11.8111 78.9299 11.6719C79.1713 11.5327 79.4412 11.4276 79.7395 11.3565C80.0378 11.2855 80.3418 11.2315 80.6515 11.1946C81.0435 11.1491 81.3617 11.1122 81.606 11.0838C81.8503 11.0526 82.0279 11.0028 82.1387 10.9347C82.2495 10.8665 82.3049 10.7557 82.3049 10.6023V10.5724C82.3049 10.2003 82.1998 9.91193 81.9895 9.70739C81.7821 9.50284 81.4725 9.40057 81.0605 9.40057C80.6316 9.40057 80.2935 9.49574 80.0463 9.68608C79.802 9.87358 79.633 10.0824 79.5392 10.3125L78.3418 10.0398C78.4838 9.64205 78.6912 9.32102 78.964 9.0767C79.2395 8.82955 79.5563 8.65057 79.9142 8.53977C80.2722 8.42614 80.6486 8.36932 81.0435 8.36932C81.3049 8.36932 81.5819 8.40057 81.8745 8.46307C82.1699 8.52273 82.4455 8.63352 82.7012 8.79545C82.9597 8.95739 83.1713 9.18892 83.3361 9.49006C83.5009 9.78835 83.5833 10.1761 83.5833 10.6534V15H82.339V14.1051H82.2878C82.2054 14.2699 82.0819 14.4318 81.9171 14.5909C81.7523 14.75 81.5407 14.8821 81.2821 14.9872C81.0236 15.0923 80.714 15.1449 80.3532 15.1449ZM80.6301 14.1222C80.9824 14.1222 81.2836 14.0526 81.5336 13.9134C81.7864 13.7741 81.9782 13.5923 82.1088 13.3679C82.2424 13.1406 82.3091 12.8977 82.3091 12.6392V11.7955C82.2637 11.8409 82.1756 11.8835 82.0449 11.9233C81.9171 11.9602 81.7708 11.9929 81.606 12.0213C81.4412 12.0469 81.2807 12.071 81.1245 12.0938C80.9682 12.1136 80.8375 12.1307 80.7324 12.1449C80.4853 12.1761 80.2594 12.2287 80.0549 12.3026C79.8532 12.3764 79.6912 12.483 79.5691 12.6222C79.4498 12.7585 79.3901 12.9403 79.3901 13.1676C79.3901 13.483 79.5066 13.7216 79.7395 13.8835C79.9725 14.0426 80.2694 14.1222 80.6301 14.1222ZM88.3358 8.45455V9.47727H84.7605V8.45455H88.3358ZM85.7193 6.88636H86.9934V13.0781C86.9934 13.3253 87.0304 13.5114 87.1042 13.6364C87.1781 13.7585 87.2733 13.8423 87.3897 13.8878C87.5091 13.9304 87.6383 13.9517 87.7775 13.9517C87.8798 13.9517 87.9693 13.9446 88.046 13.9304C88.1227 13.9162 88.1824 13.9048 88.225 13.8963L88.4551 14.9489C88.3812 14.9773 88.2761 15.0057 88.1397 15.0341C88.0034 15.0653 87.8329 15.0824 87.6284 15.0852C87.2931 15.0909 86.9806 15.0312 86.6909 14.9062C86.4011 14.7812 86.1667 14.5881 85.9877 14.3267C85.8088 14.0653 85.7193 13.7372 85.7193 13.3423V6.88636ZM93.8915 12.2855V8.45455H95.1699V15H93.9171V13.8665H93.8489C93.6983 14.2159 93.4569 14.5071 93.1245 14.7401C92.7949 14.9702 92.3844 15.0852 91.8929 15.0852C91.4725 15.0852 91.1003 14.9929 90.7765 14.8082C90.4554 14.6207 90.2026 14.3438 90.0179 13.9773C89.8361 13.6108 89.7452 13.1577 89.7452 12.6179V8.45455H91.0194V12.4645C91.0194 12.9105 91.1429 13.2656 91.3901 13.5298C91.6373 13.794 91.9583 13.9261 92.3532 13.9261C92.5918 13.9261 92.829 13.8665 93.0648 13.7472C93.3034 13.6278 93.5009 13.4474 93.6571 13.206C93.8162 12.9645 93.8944 12.6577 93.8915 12.2855ZM96.8819 15V8.45455H98.1135V9.49432H98.1816C98.301 9.14205 98.5112 8.86506 98.8123 8.66335C99.1163 8.45881 99.46 8.35653 99.8436 8.35653C99.9231 8.35653 100.017 8.35937 100.125 8.36506C100.236 8.37074 100.322 8.37784 100.385 8.38636V9.60511C100.334 9.59091 100.243 9.57528 100.112 9.55824C99.9814 9.53835 99.8507 9.52841 99.72 9.52841C99.4189 9.52841 99.1504 9.59233 98.9146 9.72017C98.6816 9.84517 98.497 10.0199 98.3606 10.2443C98.2243 10.4659 98.1561 10.7187 98.1561 11.0028V15H96.8819ZM104.074 15.1321C103.429 15.1321 102.874 14.9943 102.408 14.7188C101.945 14.4403 101.587 14.0497 101.334 13.5469C101.084 13.0412 100.959 12.4489 100.959 11.7699C100.959 11.0994 101.084 10.5085 101.334 9.99716C101.587 9.4858 101.939 9.08665 102.391 8.79972C102.845 8.51278 103.377 8.36932 103.985 8.36932C104.354 8.36932 104.712 8.4304 105.058 8.55256C105.405 8.67472 105.716 8.86648 105.992 9.12784C106.267 9.3892 106.485 9.72869 106.644 10.1463C106.803 10.5611 106.882 11.0653 106.882 11.6591V12.1108H101.679V11.1562H105.634C105.634 10.821 105.566 10.5241 105.429 10.2656C105.293 10.0043 105.101 9.7983 104.854 9.64773C104.61 9.49716 104.323 9.42188 103.993 9.42188C103.635 9.42188 103.323 9.50994 103.056 9.68608C102.791 9.85937 102.587 10.0866 102.442 10.3679C102.3 10.6463 102.229 10.9489 102.229 11.2756V12.0213C102.229 12.4588 102.306 12.831 102.459 13.1378C102.615 13.4446 102.833 13.679 103.111 13.8409C103.389 14 103.715 14.0795 104.087 14.0795C104.328 14.0795 104.548 14.0455 104.747 13.9773C104.946 13.9062 105.118 13.8011 105.263 13.6619C105.408 13.5227 105.519 13.3509 105.595 13.1463L106.801 13.3636C106.705 13.7187 106.531 14.0298 106.281 14.2969C106.034 14.5611 105.723 14.767 105.348 14.9148C104.976 15.0597 104.551 15.1321 104.074 15.1321ZM113.201 10.0526L112.046 10.2571C111.998 10.1094 111.921 9.96875 111.816 9.83523C111.714 9.7017 111.574 9.59233 111.398 9.5071C111.222 9.42187 111.002 9.37926 110.738 9.37926C110.377 9.37926 110.076 9.46023 109.834 9.62216C109.593 9.78125 109.472 9.98722 109.472 10.2401C109.472 10.4588 109.553 10.6349 109.715 10.7685C109.877 10.902 110.138 11.0114 110.499 11.0966L111.539 11.3352C112.141 11.4744 112.59 11.6889 112.885 11.9787C113.181 12.2685 113.329 12.6449 113.329 13.108C113.329 13.5 113.215 13.8494 112.988 14.1562C112.763 14.4602 112.449 14.6989 112.046 14.8722C111.645 15.0455 111.181 15.1321 110.653 15.1321C109.92 15.1321 109.322 14.9759 108.858 14.6634C108.395 14.348 108.111 13.9006 108.006 13.321L109.238 13.1335C109.314 13.4545 109.472 13.6974 109.711 13.8622C109.949 14.0241 110.26 14.1051 110.644 14.1051C111.062 14.1051 111.395 14.0185 111.645 13.8452C111.895 13.669 112.02 13.4545 112.02 13.2017C112.02 12.9972 111.944 12.8253 111.79 12.6861C111.64 12.5469 111.408 12.4418 111.096 12.3707L109.988 12.1278C109.377 11.9886 108.925 11.767 108.633 11.4631C108.343 11.1591 108.198 10.7741 108.198 10.3082C108.198 9.92187 108.306 9.58381 108.522 9.29403C108.738 9.00426 109.036 8.77841 109.417 8.61648C109.797 8.4517 110.233 8.36932 110.725 8.36932C111.432 8.36932 111.989 8.52273 112.395 8.82955C112.802 9.13352 113.07 9.54119 113.201 10.0526Z"
                fill="#FFEB80"
              />
            </svg>

            <h5 className="text-[30px] leading-[30px] font-inter font-extrabold tracking-none text-white-900 dark:text-white">
              <p className="text-left">Different formats of the word cloud</p>
            </h5>
            <p className="font-inter text-[18px] leading-[27px] pb-[3rem] text-[#9CA3AF] dark:text-gray-400">
              <p className="text-left">
                The generated word clouds can be exported in a variety of
                popular image formats. This makes it easier to export and use
                these images in required applications.
              </p>
            </p>
            <Button
              className="bg-transparent hover:bg-transparent"
              href="/generate"
            >
              <span className="text-[18px] text-[#FFE86E]">Generate Now</span>
              <svg
                className="ml-2 -mr-1 h-4 w-4 text-[#FFE86E]"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </Button>
          </Card>
        </div>
      </div>
    </div>
  );
}
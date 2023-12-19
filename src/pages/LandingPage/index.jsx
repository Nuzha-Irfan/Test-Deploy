import React from "react";

import { Button, Img, Line, Text } from "components";

const LandingPage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-inter items-center justify-start mx-auto w-full">
        <header className="bg-deep_purple-500 flex md:grid-cols-2 md:gap-2 items-center justify-between md:px-5 px-[60px] py-[26px] w-full inline-flex">
          <Img
            className="sm:w-32 h-[25px] w-[238px]"
            src="images/img_logo.svg"
            alt="logo"
          />
          <div class="invisible sm:visible">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" />
          </svg>


          </div>
          <ul className="flex sm:flex-col flex-row gap-7 sm:hidden items-start justify-start w-auto common-row-list">
            <li>
              <a href="javascript:" className="text-sm text-white-A700">
                <Text size="txtInterMedium14">SERVICES</Text>
              </a>
            </li>
            <li>
              <a href="javascript:" className="text-sm text-white-A700">
                <Text size="txtInterMedium14">ABOUT US</Text>
              </a>
            </li>
            <li>
              <a href="javascript:" className="text-sm text-white-A700">
                <Text size="txtInterMedium14">CONTACT US</Text>
              </a>
            </li>
            <li>
              <a href="javascript:" className="text-sm text-white-A700">
                <Text size="txtInterMedium14">CAREERS</Text>
              </a>
            </li>
          </ul>
        </header>
        <div className="h-[700px] relative w-full md:grid-cols-2 md:px-2">
          <Img
            className="h-[700px] m-auto sm:w-auto sm:h-auto object-cover md:h-auto w-full sm:flex-1"
            src="images/img_andykelly0ev.png"
            alt="andykelly0ev"
          />
          <div className="absolute bg-gradient bottom-[6%] flex flex-col gap-5 items-start justify-start left-[5%] pb-8 pt-6 px-10  w-[622px] sm:w-auto md:px-auto sm:inline-flex sm:flex-col ">
            <Text
              className="capitalize leading-[100.00%] max-w-[556px] sm:max-w-auto md:max-w-full text-5xl sm:text-[25px] md:text-[44px] text-white-A700 tracking-[-0.96px] md:h-auto sm:h-auto "
              size="txtInterBold48"
            >
              We crush your competitors, goals, and sales records - without the
              B.S.
            </Text>
            <Button className="cursor-pointer font-bold min-w-[214px] text-center text-sm tracking-[-0.28px] uppercase">
              Get free consultation
            </Button>
          </div>
        </div>
        <div className="flex md:grid-cols-2 sm:flex-col flex-row gap-5 items-center justify-start max-w-4xl mt-20 mx-auto md:px-5 w-full">
          <Img
            className="h-[346px] md:h-auto object-cover w-[346px]"
            src="images/img_image2.png"
            alt="imageTwo"
          />
          <div className="flex flex-1 flex-col gap-5 items-start justify-start w-full">
            <div className="flex flex-col font-poppins items-start justify-start w-auto sm:w-full">
              <Text
                className="sm:text-[23px] md:text-[25px] text-[27px] text-deep_purple-500 tracking-[0.40px] w-auto"
                size="txtPoppinsSemiBold27"
              >
                Web & Mobile App Development
              </Text>
            </div>
            <Text
              className="max-w-[530px] md:max-w-full text-base text-black-900"
              size="txtInterRegular16"
            >
              Your web and mobile Apps are pieces of the puzzle to grow your
              business. We use frameworks which tailor content and engagement
              methods to respond to different intents shown by your potential
              customers who interact with your business online.
            </Text>
            <Button className="cursor-pointer font-bold font-inter min-w-[129px] text-center text-sm tracking-[-0.28px] uppercase">
              LEARN MORE
            </Button>
          </div>
        </div>
        <div className="flex md:grid-cols-2 sm:flex-col flex-row-reverse gap-5 items-center justify-start max-w-4xl mt-20 mx-auto md:px-5 w-full conten flex py-2 ">

        <Img
            className="md:flex-1 h-[348px]  object-cover w-[346px]  "
            src="images/img_image1.png"
            alt="imageOne"
          />

          <div className="flex flex-1 flex-col gap-5 items-start justify-start w-full px-2">
            <div className="flex flex-col font-poppins items-start justify-start w-full">
              <Text
                className="sm:text-[23px] md:text-[25px] text-[27px] text-deep_purple-500 tracking-[0.40px] w-auto"
                size="txtPoppinsSemiBold27"
              >
                Digital Strategy Consulting
              </Text>
            </div>
            <Text
              className="max-w-[530px] md:max-w-full text-base text-black-900 "
              size="txtInterRegular16"
            >
              Your digital strategy should complement the overall marketing
              strategy of the company. In online marketing, each component will
              never work in isolation and every business needs a different mix.
              We provide a clear concept and strategic overview to find the most
              efficient model for your business.
            </Text>
            <Button className="cursor-pointer font-bold font-inter min-w-[129px] text-center text-sm tracking-[-0.28px] uppercase">
              LEARN MORE
            </Button>
          </div>
        
        </div>
        <footer className="bg-deep_purple-500 flex font-lato items-center justify-center mt-20 pb-5 pt-10 md:px-5 px-[40px] w-full">
          <div className="flex flex-col gap-10 items-center justify-center w-full">
            <div className="flex md:flex-col flex-row justify-between gap-20  w-full">
              <div className="mx-20 flex flex-col gap-5  w-[420px] sm:items-start ">
                
                <Img
                  className="object-fill h-10 w-36 pb-2"
                  src="images/img_logo.svg"
                  alt="logo_One"
                />
                <Text
                  className=" md:max-w-full text-base  text-white-A700 sm:w-[335px]"
                  size="txtLatoRegular16"
                >
                  Your goal is our target. Not anything in between. We use
                  online marketing platforms and tools to achieve single
                  objective - your business results.
                </Text>
              </div>
              <div className="flex sm:flex-col flex-row  lg:px-40 font-inter gap-10 px-40 sm:px-10 md:px-10">
                <div className="flex flex-1 flex-col gap-3 items-start justify-start w-full">
                  <Text
                    className="sm:text-[17px] md:text-[19px] text-white-A700 w-auto"
                    size="txtInterSemiBold21"
                  >
                    Our Technologies
                  </Text>
                  <ul className="flex flex-col gap-3 items-start justify-start w-auto md:w-full common-column-list">
                    <li>
                      <a
                        href="javascript:"
                        className="capitalize text-sm text-white-A700"
                      >
                        <Text size="txtInterMedium14">ReactJS</Text>
                      </a>
                    </li>
                    <li>
                      <a
                        href="javascript:"
                        className="capitalize text-sm text-white-A700"
                      >
                        <Text size="txtInterMedium14">Gatsby</Text>
                      </a>
                    </li>
                    <li>
                      <a
                        href="javascript:"
                        className="capitalize text-sm text-white-A700"
                      >
                        <Text size="txtInterMedium14">NextJS</Text>
                      </a>
                    </li>
                    <li>
                      <a
                        href="javascript:"
                        className="capitalize text-sm text-white-A700"
                      >
                        <Text size="txtInterMedium14">NodeJS</Text>
                      </a>
                    </li>
                    <li>
                      <a
                        href="javascript:"
                        className="capitalize text-sm text-white-A700"
                      >
                        <Text size="txtInterMedium14">GraphQL</Text>
                      </a>
                    </li>
                    <li>
                      <a
                        href="javascript:"
                        className="capitalize text-sm text-white-A700"
                      >
                        <Text size="txtInterMedium14">Laravel</Text>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="flex flex-1 flex-col gap-3 items-start justify-start w-full ">
                  <Text
                    className="sm:text-[17px] md:text-[19px] text-white-A700 "
                    size="txtInterSemiBold21"
                  >
                    Our Services
                  </Text>
                  <ul className="flex flex-col gap-3  md:w-full common-column-list  ">
                    <li>
                      <a
                        href="javascript:"
                        className="capitalize text-sm text-white-A700"
                      >
                        <Text size="txtInterMedium14">
                          Social media Marketing
                        </Text>
                      </a>
                    </li>
                    <li>
                      <a
                        href="javascript:"
                        className="capitalize text-sm text-white-A700"
                      >
                        <Text size="txtInterMedium14">
                          Web & Mobile App Development
                        </Text>
                      </a>
                    </li>
                    <li>
                      <a
                        href="javascript:"
                        className="capitalize text-sm text-white-A700"
                      >
                        <Text size="txtInterMedium14">Data & Analytics</Text>
                      </a>
                    </li>
                    <li>
                      <a
                        href="javascript:"
                        className="capitalize text-sm text-white-A700"
                      >
                        <Text size="txtInterMedium14">
                          Google Marketing solutions
                        </Text>
                      </a>
                    </li>
                    <li>
                      <a
                        href="javascript:"
                        className="capitalize text-sm text-white-A700"
                      >
                        <Text size="txtInterMedium14">
                          Search Engine Optimization
                        </Text>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="flex flex-col font-inter gap-2 items-center justify-start max-w-[630px] w-full">
              <Line className="bg-white-A700 h-px w-full" />
              <div className="flex flex-row gap-4 items-center justify-center w-auto">
                <a
                  href="javascript:"
                  className="capitalize text-sm text-white-A700 w-auto"
                >
                  <Text size="txtInterMedium14">Privacy Policy</Text>
                </a>
                <Line className="bg-white-A700 h-4 w-px" />
                <a
                  href="javascript:"
                  className="capitalize text-sm text-white-A700 w-auto"
                >
                  <Text size="txtInterMedium14">Terms & Conditions</Text>
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default LandingPage;

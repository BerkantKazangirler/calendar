import { useEffect, useState } from "react";
import cn from "classnames";
import { SiNetflix, SiSlack } from "react-icons/si";
import { FaSpotify, FaXTwitter } from "react-icons/fa6";
import { FiFigma } from "react-icons/fi";
import { PiOpenAiLogoLight } from "react-icons/pi";

function App() {
  interface CalendarData {
    name: string;
    start: string;
    date: number;
    total_payment: number;
    payment: number;
    since: number;
  }

  const [shortDayNames, setShortDayNames] = useState<string[]>([]);
  const [daysArray, setDaysArray] = useState<number[]>([]);
  const [spendMenu, setSpendMenu] = useState(false);
  const [calendar, setCalendar] = useState<CalendarData[]>([]);

  let para = 77.15;
  const tarih = new Date();
  const ay = tarih.getMonth();
  const yil = tarih.getFullYear();
  const gün = tarih.getUTCDate();

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const dayNames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thuesday",
    "Friday",
    "Saturday",
  ];
  const shortDays = dayNames.map((day) => day.substring(0, 3));
  const daysInCurrentMonth = new Date(yil, ay + 1, 0).getDate();
  const days = Array.from({ length: daysInCurrentMonth }, (_, i) => i + 1);

  useEffect(() => {
    const initialCalendar: CalendarData[] = [
      {
        name: "Netflix",
        start: "03.20",
        date: 16,
        total_payment: 15.99,
        payment: 15.99,
        since: 2020,
      },
      {
        name: "Spotify",
        start: "04.20",
        date: 24,
        total_payment: 9.99,
        payment: 9.99,
        since: 2018,
      },
      {
        name: "Spotify",
        start: "04.20",
        date: 25,
        total_payment: 9.99,
        payment: 9.99,
        since: 2018,
      },
      {
        name: "X",
        start: "05.20",
        date: 20,
        total_payment: 12.99,
        payment: 12.99,
        since: 2017,
      },
      {
        name: "Slack",
        start: "06.20",
        date: 14,
        total_payment: 9.99,
        payment: 9.99,
        since: 2021,
      },
      {
        name: "Figma",
        start: "07.20",
        date: 10,
        total_payment: 8.99,
        payment: 8.99,
        since: 2019,
      },
      {
        name: "Open AI",
        start: "08.20",
        date: 4,
        total_payment: 8.99,
        payment: 8.99,
        since: 2019,
      },
    ];

    setShortDayNames(shortDays);
    setDaysArray(days);
    setCalendar(initialCalendar);
  }, []);

  return (
    <>
      <div className="flex font-poppins flex-col max-w-256 mx-auto justify-center h-screen gap-5">
        <div className="flex flex-row justify-between w-full">
          <div className="flex flex-row gap-0.5">
            <span className="text-white text-3xl font-medium">
              {monthNames[ay]}
            </span>
            <span className="text-white/40 text-3xl">{yil}</span>
          </div>
          <button
            className="flex flex-col w-fit"
            onClick={() => setSpendMenu((t) => !t)}
          >
            <span className="text-white/60 text-xs">Monthly Spend</span>
            <span className="text-white text-2xl mx-auto">${para}</span>
          </button>
        </div>
        <div className="flex relative -top-[4.5rem]">
          <div
            className={cn(
              "bg-black w-256 h-256 absolute rounded-lg text-white flex items-center justify-center transition-all duration-500 ease-in-out transform",
              {
                "translate-x-0 z-20 translate-y-0 opacity-100 scale-100 block":
                  spendMenu,
                "translate-x-20 opacity-0 scale-90 none": !spendMenu,
              }
            )}
          >
            <div className="flex flex-row">
              <div className="size-40">
                <svg
                  className="size-full rotate-[160deg]"
                  viewBox="0 0 36 36"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="18"
                    cy="18"
                    r="16"
                    fill="none"
                    className="stroke-current text-white  "
                    stroke-width="4"
                    stroke-dasharray="25 100"
                    stroke-linecap="round"
                  />
                </svg>
                <div className="absolute start-1/2 transform -translate-x-1/2">
                  <span className="text-2xl font-bold text-orange-600 dark:text-orange-500">
                    50
                  </span>
                </div>
              </div>

              <div className="flex flex-col">
                <span className="text-white/50 text-xs">Monthly Spend</span>
                <span className="text-3xl" onClick={() => setSpendMenu(false)}>
                  ${para}
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <div className="flex flex-row gap-2">
            {shortDayNames.map((day, index) => (
              <span
                key={index}
                className="text-white/60 w-[4.5rem] text-center bg-day uppercase rounded-2xl py-1"
              >
                {day}
              </span>
            ))}
          </div>
          <div className="flex flex-row gap-2">
            <div
              className="grid grid-cols-7 gap-2"
              // onMouseLeave={() => setHoverMenu(null)}
            >
              {Array.from({ length: 35 }).map((_, index) => {
                const service = calendar.find(
                  (item) => item.date === daysArray[index]
                );

                if (index < daysArray.length) {
                  return (
                    <>
                      <div
                        key={index}
                        // onMouseEnter={() => setHoverMenu(index)}
                        className={cn(
                          `rounded-xl flex-col justify-end text-white/70 w-[4.5rem] h-[4.5rem] flex bg-zinc-900 group`,
                          {
                            "opacity-80 hover:opacity-100":
                              gün == daysArray[index],
                            "opacity-60 hover:opacity-100":
                              gün != daysArray[index],
                          }
                        )}
                        id={index.toString()}
                      >
                        {service && (
                          <>
                            {service.name === "X" && (
                              <span
                                className={cn("mx-auto relative", {
                                  "top-4": gün == daysArray[index],
                                  "-top-3": gün != daysArray[index],
                                })}
                              >
                                <FaXTwitter className="text-lg" />
                              </span>
                            )}
                            {service.name === "Spotify" && (
                              <span
                                className={cn(
                                  "mx-auto relative text-green-500",
                                  {
                                    "top-4": gün == daysArray[index],
                                    "-top-3": gün != daysArray[index],
                                  }
                                )}
                              >
                                <FaSpotify className="text-lg" />
                              </span>
                            )}
                            {service.name === "Figma" && (
                              <span
                                className={cn("mx-auto relative", {
                                  "top-4": gün == daysArray[index],
                                  "-top-3": gün != daysArray[index],
                                })}
                              >
                                <FiFigma className="text-lg" />
                              </span>
                            )}
                            {service.name === "Open AI" && (
                              <span
                                className={cn("mx-auto relative", {
                                  "top-4": gün == daysArray[index],
                                  "-top-3": gün != daysArray[index],
                                })}
                              >
                                <PiOpenAiLogoLight className="text-lg" />
                              </span>
                            )}
                            {service.name === "Slack" && (
                              <span
                                className={cn("mx-auto relative", {
                                  "top-4": gün == daysArray[index],
                                  "-top-3": gün != daysArray[index],
                                })}
                              >
                                <SiSlack className="text-lg" />
                              </span>
                            )}
                            {service.name === "Netflix" && (
                              <span
                                className={cn("mx-auto relative text-red-500", {
                                  "top-4": gün == daysArray[index],
                                  "-top-3": gün != daysArray[index],
                                })}
                              >
                                <SiNetflix className="text-lg" />
                              </span>
                            )}
                          </>
                        )}

                        <span
                          className={cn("mx-auto relative", {
                            "text-white font-medium -top-5":
                              gün == daysArray[index],
                            "text-white/70": gün != daysArray[index],
                          })}
                        >
                          {gün == daysArray[index] && "*"}
                        </span>
                        <span className="mx-auto">{daysArray[index]}</span>
                        {service && (
                          <>
                            <div className="bg-zinc-900 group-hover:visible invisible border-white/40 gap-3 border rounded-xl p-4 absolute w-72 flex flex-col pb-2 -translate-x-3 z-20 translate-y-28">
                              <div className="flex flex-row justify-between">
                                <div className="flex flex-col">
                                  <div className="flex flex-row gap-2">
                                    {service && (
                                      <>
                                        {service.name == "Netflix" && (
                                          <SiNetflix className="text-xl my-auto text-red-500" />
                                        )}
                                        {service.name == "Slack" && (
                                          <SiSlack className="text-lg my-auto" />
                                        )}
                                        {service.name == "Spotify" && (
                                          <FaSpotify className="text-lg my-auto" />
                                        )}
                                        {service.name == "X" && (
                                          <FaXTwitter className="text-lg my-auto" />
                                        )}
                                        {service.name == "Open AI" && (
                                          <PiOpenAiLogoLight className="text-lg my-auto" />
                                        )}
                                        {service.name == "Figma" && (
                                          <FiFigma className="text-lg my-auto" />
                                        )}
                                      </>
                                    )}

                                    <span className="text-white text-xl">
                                      {service.name}
                                    </span>
                                  </div>

                                  <span className="text-[10px]">
                                    Every month on the {service.date}th
                                  </span>
                                </div>
                                <div className="flex flex-col">
                                  <span className="text-xl text-white">
                                    ${service.payment}
                                  </span>
                                  <span className="text-[9px]">
                                    Next payment
                                  </span>
                                </div>
                              </div>
                              <div className="flex  flex-row justify-between">
                                <div className="flex flex-row gap-1 my-auto">
                                  <span className="text-xs">Total Since</span>
                                  <span className="text-xs">
                                    {service.start}
                                  </span>
                                </div>
                                <span className="text-white text-lg">
                                  ${service.total_payment}
                                </span>
                              </div>
                            </div>
                          </>
                        )}
                      </div>
                    </>
                  );
                } else {
                  return (
                    <div
                      key={index}
                      className="rounded-xl text-white/70 w-[4.5rem] bg-zinc-900/60 h-[4.5rem] flex opacity-40 hover:opacity-100"
                      id={index.toString()}
                    >
                      <span className="mx-auto my-10">{index - 29}</span>
                    </div>
                  );
                }
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

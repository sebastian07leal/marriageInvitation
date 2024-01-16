import "./styles.css";
import { useEffect, useState } from "react";

import { useGetTimer } from "./hooks/useGetTimer";

interface CountDownProps {
  initialDate: Date;
}

export const CountDown = ({ initialDate }: CountDownProps) => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [months, setMonths] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [milliSeconds, setMilliSeconds] = useState(0);

  const currentDate = new Date();

  const {
    formatHours,
    formatSeconds,
    formatMinutes,
    formatDays,
    differentMonths,
    formatMilliSeconds,
  } = useGetTimer({ finishDate: initialDate, currentDate });

  //First render
  useEffect(() => {
    setDays(formatDays);
    setHours(formatHours);
    setMinutes(formatMinutes);
    setSeconds(formatSeconds);
    setMonths(differentMonths);
    setMilliSeconds(formatMilliSeconds);
  }, []);

  //Iterate Render
  useEffect(() => {
    const interval = setInterval(() => {
      setDays(formatDays);
      setHours(formatHours);
      setMinutes(formatMinutes);
      setSeconds(formatSeconds);
      setMonths(differentMonths);
      setMilliSeconds(formatMilliSeconds);
    }, 1000);

    //remove interval for optimization
    return () => clearInterval(interval);
  }, [milliSeconds]);

  return (
    <>
      <ul className="countdown-container">
        <li className="countdown-container__card">
          <span className="card__time">{months}</span>
          <span className="card__label">Meses</span>
        </li>
        <li className="countdown-container__card">
          <span className="card__time">{days}</span>
          <span className="card__label">Días</span>
        </li>
        <li className="countdown-container__card">
          <span className="card__time">{hours}</span>
          <span className="card__label">Horas</span>
        </li>
        <li className="countdown-container__card">
          <span className="card__time">{minutes}</span>
          <span className="card__label">Minutos</span>
        </li>
        <li className="countdown-container__card">
          <span className="card__time">{seconds}</span>
          <span className="card__label">Segundos</span>
        </li>
      </ul>
    </>
  );
};

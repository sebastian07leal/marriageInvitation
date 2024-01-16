import {
  differenceInDays,
  differenceInHours,
  differenceInMonths,
  differenceInSeconds,
  differenceInMinutes,
  differenceInMilliseconds,
} from 'date-fns'

interface UseGetTimerProps  {
  finishDate: Date;
  currentDate: Date;
}

const useGetTimer = ({ finishDate, currentDate }: UseGetTimerProps) => {
  const differentDays = differenceInDays(finishDate, currentDate);
  const differentHours = differenceInHours(finishDate, currentDate);
  const differentMonths = differenceInMonths(finishDate, currentDate);
  const differentMinutes = differenceInMinutes(finishDate, currentDate);
  const differentSeconds = differenceInSeconds(finishDate, currentDate);
  const differentMilliSeconds = differenceInMilliseconds(finishDate, currentDate)
  
  const formatDays = differentDays % 30;
  const formatHours = differentHours % 24;
  const formatMinutes = differentMinutes % 60;
  const formatSeconds = differentSeconds % 60;
  const formatMilliSeconds = differentMilliSeconds % 1000;

  return { formatSeconds, formatMilliSeconds, formatMinutes, formatHours, formatDays, differentMonths };
};

export { useGetTimer }
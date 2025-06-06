import { useEffect, useState } from 'react';


export const useGetPerformanceReport = ({
  screenName,
  isLoading,
}) => {
  const [startTime, setStartTime] = useState(0);
  const [loadTime, setLoadTime] = useState('');

  const getPerformanceReport = () => {
    const endTime = global.performance.now();
    const timeToRender = endTime - startTime;
    const logMessage = `${screenName} Load Time: ${timeToRender.toFixed(0)} milliseconds`;

    setLoadTime(logMessage);
     //Send data to any logging tool such as Amplitude
  };

  useEffect(() => {
    setStartTime(global.performance.now());
    if (!isLoading) {
      getPerformanceReport();
    }
  }, [isLoading]);

  return {
    loadTime,
  };
};
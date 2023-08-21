import React, { useEffect, useRef, useState } from 'react';

const CounterProvider = ({ children, counter, setCounter }) => {

  const counterRef = useRef(null); // Ref для блока с счетчиками
  const [animationInProgress, setAnimationInProgress] = useState(false);

  const maxValues = { proj: 150, visitors: 1000000, prof: 17 };
  const duration = 5000;

  
  const animateCounter = (counterKey, maxValue) => {
    const startValue = counter[counterKey];
    const startTime = Date.now();
    setAnimationInProgress(true);

    const updateCounter = () => {
      const currentTime = Date.now();
      const elapsedTime = currentTime - startTime;
      const progress = Math.min(elapsedTime / duration, 1);

      const easedProgress = 1 - Math.pow(1 - progress, 3);
      const newValue = Math.round(startValue + easedProgress * (maxValue - startValue));

      setCounter((prevCounter) => ({
        ...prevCounter,
        [counterKey]: newValue,
      }));

      if (progress < 1) {
        requestAnimationFrame(updateCounter);
      } else {
        setAnimationInProgress(false);
      }
    };

    requestAnimationFrame(updateCounter);
  };

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !animationInProgress && entry.target === counterRef.current) {
          if (
            counter.visitors < maxValues.visitors ||
            counter.proj < maxValues.proj ||
            counter.prof < maxValues.prof
          ) {
            Object.entries(maxValues).forEach(([counterKey, maxValue]) => {
              if (counter[counterKey] < maxValue) {
                animateCounter(counterKey, maxValue);
              }
            });
          }
        } else if (!entry.isIntersecting && entry.target === counterRef.current) {
          setAnimationInProgress(false);
        }
      });
    });

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current);
      }
    };
  }, [counter]);

  return <div ref={counterRef}>{children}</div>;
};

export default CounterProvider;

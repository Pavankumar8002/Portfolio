import React, { useMemo } from "react";
import "../styles/loading.css";

const Loading = () => {
  const { isNewYear } = useMemo(() => {
    let specialDays = {};

    try {
      const raw = process.env.REACT_APP_SPECIAL_DAYS_JSON;
      if (raw) {
        specialDays = JSON.parse(raw);
      }
    } catch (err) {
      console.warn("REACT_APP_SPECIAL_DAYS_JSON is invalid", err);
    }

    const today = new Date().toISOString().split("T")[0];

    return {
      isNewYear: specialDays?.newYear === today,
    };
  }, []);

  return (
    <div className={`loading-container ${isNewYear ? "special-day" : ""}`}>
      {isNewYear && (
        <>
          <div className="glitter" />
          <div className="firework" />
          <div className="firework" />
        </>
      )}

      <div className="loading-text">
        {isNewYear ? (
          <>
            <span className="first-name">Happy</span>{" "}
            <span className="last-name">New Year</span>
          </>
        ) : (
          <>
            <span className="first-name">Pavan</span>{" "}
            <span className="last-name">Kumar</span>
          </>
        )}
      </div>
    </div>
  );
};

export default Loading;

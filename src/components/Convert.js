import React, { useState, useEffect } from "react";
import axios from "axios";

const Convert = ({ language, text }) => {
  const apiKey = `${process.env.REACT_APP_GOOGLE_TRANSLATE_KEY}`;

  useEffect(() => {
    axios.post(
      "https://translation.googleapis.com/language/translate/v2",
      {},
      {
        params: {
          q: text,
          target: language.value,
          key: apiKey,
        },
      }
    );
  }, [language, text]);

  return <div />;
};

export default Convert;

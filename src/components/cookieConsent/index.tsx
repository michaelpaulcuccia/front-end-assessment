import React, { useState, useEffect } from "react";
import "./cookieConsent.css";

const setCookie = (name: string, value: string, minutes: number) => {
  const expires = new Date(Date.now() + minutes * 60 * 1000).toUTCString();
  document.cookie = `${name}=${value}; expires=${expires}; path=/`;
};

const getCookie = (name: string) => {
  const matches = document.cookie.match(new RegExp(`(^| )${name}=([^;]+)`));
  return matches ? matches[2] : null;
};

const CookieConsent: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = getCookie("cookieConsent");
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    setCookie("cookieConsent", "true", 30); // Cookie expires after 30 minutes
    setIsVisible(false);
  };

  const handleDecline = () => {
    setIsVisible(false);
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div className="overlay">
      <div className="message">
        <div>
          This website uses cookies. Not to improve your experience, but to
          store data on your browser.
        </div>
        <div>If you accept, the cookie will delete itself in 30 minutes.</div>
        <div className="cookie-btn">
          <div>
            <button tabIndex={1} onClick={handleAccept}>
              Accept
            </button>
          </div>
          <div>
            <button tabIndex={2} onClick={handleDecline}>
              Decline
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;

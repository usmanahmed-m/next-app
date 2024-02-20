"use client";

// error pages are client side components
// defining error.tsx under app will catch all errors if there is any on page
// generic error will show for all pages
// We can also show custom error page for specific pages by creating error file on that directory
// We cannot capture root layout errors with this error component.

import React from "react";

// We can access errror with this component

type Props = {
  // Next js automatically pass error and reset to error component props if there is any
  error: Error;
  // Some errors are temporay and we want user to retry. To do this we have reset function.
  reset: () => void;
  // Don't give user to retry functionality on every page. Coz user will retry and we will have repetitive logs. So use this only in certain parts of application
};

const ErrorPage = ({ error, reset }: Props) => {
  console.log("Error: ", error);
  // use logging service to store error messages permanently in real time applications
  // sentry.io is good logging service
  return (
    <>
      <button
        className='btn'
        onClick={() => reset()}
      >
        Retry
      </button>
      <div>An unexpected error has occured.</div>
    </>
  );
};

export default ErrorPage;

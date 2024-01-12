import React from "react";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">Hello there</h1>
            <p className="py-5">
              VBMedical is your dedicated biomedical services partner based in
              Auckland, New Zealand. Since our establishment in 2004, we've been
              specializing in providing comprehensive on-site Biomedical
              Performance Verification services.
            </p>
            <br />

            <br />
            <p>
              Our services include preventative maintenance, calibration,
              functional, and electrical safety testing of medical equipment.
              <br />
            </p>
            <p>
              In addition, VBMedical offers Equipment Repair & Servicing,
              ensuring optimal functionality and safety for all medical
              equipment.
            </p>
            <br />
            <p>
              From our headquarters in Auckland, New Zealand, we take pride in
              contributing to the well-being of our communities through reliable
              and high-quality biomedical services.
            </p>

            <Link
              to="https://bvmedical.co.nz/index.html"
              className="btn mt-12 btn-primary"
            >
              Go to Our Website
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

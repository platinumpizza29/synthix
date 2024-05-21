"use client";
import LottieAnimation from "./lottieAnimation";
import timeData from "../../public/Time.json";
import accuracyData from "../../public/accurate.json";
import privacyData from "../../public/privacy.json";

export default function BenefitsComp() {
  return (
    <div className="grid grid-cols-1 place-items-center md:grid-cols-3">
      <div className="card h-3/4 w-96 bg-base-100 shadow-xl">
        <figure>
          <LottieAnimation animationData={timeData} />
        </figure>
        <div className="card-body">
          <h3 className="card-title">Save Time</h3>
          <p className="text-gray-600">Quickly generate high-quality synthetic data tailored to your needs. No more manual data creation or time-consuming data collection processes. Our platform streamlines the entire process, allowing you to focus on analysis and development.</p>
        </div>
      </div>
      <div className="card h-3/4 w-96 bg-base-100 shadow-xl">
        <figure>
          <LottieAnimation animationData={accuracyData} />
        </figure>
        <div className="card-body">
          <h3 className="card-title">Improve Accuracy</h3>
          <p className="text-gray-600">Our advanced algorithms ensure that the synthetic data is realistic and accurate, closely mimicking the properties of real-world data. This accuracy enhances the reliability of your testing and training processes, leading to better performance and insights.</p>
        </div>
      </div>
      <div className="card h-3/4 w-96 bg-base-100 shadow-xl">
        <figure>
          <LottieAnimation animationData={privacyData} />
        </figure>
        <div className="card-body">
          <h3 className="card-title">Ensure Privacy</h3>
          <p className="text-gray-600">By using synthetic data, you eliminate the risk of exposing sensitive information. Our platform generates data that maintains the statistical properties of your original dataset without compromising privacy, ensuring compliance with data protection regulations.</p>
        </div>
      </div>
    </div>
  );
}

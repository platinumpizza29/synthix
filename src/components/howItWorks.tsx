export default function HowItWorks() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-10">
      <div className="flex flex-col justify-center items-center space-y-4">
        <div className="avatar placeholder">
          <div className="bg-neutral text-neutral-content rounded-full w-16">
            <span className="text-xl">1</span>
          </div>
        </div>
        <h1 className="font-bold">Specify Your Data Requirements</h1>
        <p className="word-wrap text-start">Define the type of data you need. Select from various data types such as numerical, categorical, or textual. Customize parameters like data range, format, and size to suit your specific needs.</p>
      </div>
      <div className="flex flex-col justify-center items-center space-y-4">
        <div className="avatar placeholder">
          <div className="bg-neutral text-neutral-content rounded-full w-16">
            <span className="text-xl">2</span>
          </div>
        </div>
        <h1 className="font-bold">Generate Your Synthetic Data</h1>
        <p className="text-start">Click on the "Generate" button to instantly create your custom dataset. Our advanced algorithms ensure the data is realistic, high-quality, and privacy-preserving.</p>
      </div>
      <div className="flex flex-col justify-center items-center space-y-4">
        <div className="avatar placeholder">
          <div className="bg-neutral text-neutral-content rounded-full w-16">
            <span className="text-xl">3</span>
          </div>
        </div>
        <h1 className="font-bold">Download and Use Your Data</h1>
        <p className="text-start">Once the data is generated, download it in your preferred format (CSV, JSON, Excel). Use this data for testing, training, or enhancing your applications without compromising privacy or data quality.</p>
      </div>


    </div>
  )
}

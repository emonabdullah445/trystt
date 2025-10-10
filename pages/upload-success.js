import { useEffect } from "react";

export default function UploadSuccessPage() {
  useEffect(() => {
    const timer = setTimeout(() => {}, 4000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-green-50 text-center px-6">
      <div className="bg-green-600 text-white rounded-full h-20 w-20 flex items-center justify-center mb-5 text-3xl">
        ✓
      </div>
      <h2 className="text-2xl font-semibold text-green-800 mb-2">
        Upload Successful!
      </h2>
      <p className="text-gray-700 mb-5 max-w-md">
        Your photo has been successfully uploaded and sent for verification.
        You’ll be redirected shortly.
      </p>
      <button className="bg-green-600 text-white px-5 py-2 rounded-lg hover:bg-green-700 transition">
        Go to Home
      </button>
    </div>
  );
}

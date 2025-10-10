import { useState } from "react";
import { toast } from "react-toastify";
import { API_URL } from "../config";
import Cookies from "js-cookie";
import { useRouter } from "next/router";

const InputFieldComponents = () => {
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const id = Cookies.get("id");
  const router = useRouter();
  const handleSubmit = async () => {
    if (!file) {
      toast.error("Please select a file to upload");
      return;
    }

    setUploading(true);

    try {
      const formData = new FormData();
      formData.append("file", file);

      const uploadRes = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });
      const uploadData = await uploadRes.json();
      console.log(uploadData);

      if (!uploadRes.ok) {
        throw new Error("Failed to upload image to Cloudinary");
      }

      const onlyCard = uploadData.secure_url;

      const cardData = {
        id: id,
        onlyCard: onlyCard,
      };

      const cardUrl = `${API_URL}/card/holdingcard`;

      const cardRes = await fetch(cardUrl, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(cardData),
      });

      const cardResponseData = await cardRes.json();

      console.log(cardResponseData);
      if (cardRes.ok) {
        console.log("success", cardResponseData);
        toast.success("Card verification submitted successfully");
        setFile(null);
        router.push("/upload-success");
      } else {
        console.log("error", cardResponseData);
        toast.error("Failed to submit card verification");
      }
    } catch (error) {
      console.error("error", error);
      toast.error("Something went wrong during file upload");
    } finally {
      setUploading(false);
    }
  };

  return (
    <div>
      <h2 className="text-lg font-semibold text-gray-800 mb-4">
        Upload your photo
      </h2>

      <div className="mb-5">
        <label
          className="block text-sm font-medium text-gray-700 mb-2"
          htmlFor="verification-photo"
        >
          Verification photo
        </label>
        <input
          id="verification-photo"
          type="file"
          accept="image/*"
          onChange={(e) => setFile(e.target.files[0])}
          className="block w-full text-sm text-gray-600 border border-gray-300 rounded-md cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <p className="text-xs text-gray-500 mt-1">
          If you are on a recent mobile device, tapping 'Choose file' will let
          you take a photo directly.
        </p>
      </div>
      <div className="mb-5">
        <label
          className="block text-sm font-medium text-gray-700 mb-2"
          for="additional-info"
        >
          Additional information
        </label>
        <textarea
          id="additional-info"
          rows="4"
          className="w-full text-sm border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="If you are listed on other sites or have additional information to share..."
        ></textarea>
        <p className="text-xs text-gray-500 mt-1">
          Please provide links and not just site names if you are sharing other
          listings.
        </p>
      </div>

      <button
        type="button"
        className="bg-gray-200 text-gray-800 px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-300 transition"
        onClick={handleSubmit}
        disabled={uploading}
      >
        {uploading ? "Uploading..." : "Submit verification"}
      </button>
    </div>
  );
};

export default InputFieldComponents;

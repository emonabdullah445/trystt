import cloudinary from "cloudinary";
import { IncomingForm } from "formidable";
import fs from "fs";

export const config = {
  api: {
    bodyParser: false,
  },
};

cloudinary.config({
  cloud_name:"dhgjgbcuy",
  api_key: "123753362727452",
  api_secret:"yRVHBUU-YPImF-h7w6uCFGl810s",
  secure: true
});

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const form = new IncomingForm();

  form.parse(req, async (err, fields, files) => {
    if (err) {
      return res.status(500).json({ error: "Error parsing form data" });
    }

    const filePath = files.file[0].filepath;

    try {
      const result = await cloudinary.uploader.upload(filePath, {
        upload_preset: "trystt",
      });

      // Delete the temporary file after successful upload
      fs.unlinkSync(filePath);

      res.status(200).json({ secure_url: result.secure_url });
    } catch (error) {
      console.error("Cloudinary upload error:", error);
      res.status(500).json({ error: error.message });
    }
  });
}

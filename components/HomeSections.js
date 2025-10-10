export default function HomeSections() {
  return (
    <div className="min-h-screen container pt-5 mx-auto">
      <main className="py-4">
        <section className="pb-10">
          <h1 className="text-3xl font-bold mb-4">Verify account</h1>
          <div className="bg-[#f6e5cb] p-4 mb-4 rounded space-y-1">
            <h1 className="text-2xl text-[#7f6943]">
              Please read these instructions carefully!{" "}
            </h1>
            <p className="text-[#baa585] pb-1">
              It's important that your verification photo meets our requirements
              to ensure that we can approve your profile first time. Failure to
              meet these requirements will result in your submission being
              rejected, which may delay your approval.
            </p>
            <button className="text-black bg-[#f7c40f] px-2 py-2 rounded-md">
              Learn more about verification on our Support Centre
            </button>
          </div>
        </section>

        <section className="grid grid-cols-2 gap-6">
          <div>
            <h2 className="text-3xl font-semibold mb-2">
              Your verification photo
            </h2>
            <p className="mb-4 ">
              All providers on Tryst must be verified before their profile will
              be visible. This photo is also important if we ever need to assist
              you in recovering your account so please take a moment to ensure
              you have taken a good photo. Please see our example photos for
              what we consider good verification uploads.
            </p>
            <p className="">
              Your photo MUST show your face, hand, and arm, holding a
              handwritten sign using blue or black pen or marker, that clearly
              shows the following information:
            </p>
            <ul className="list-disc pl-5 mb-4">
              <li>Your working name (this should match your profile)</li>
              <li>The email address you signed up with</li>
              <li>Today's date</li>
              <li>The phrase "I am signing up for Tryst"</li>
            </ul>
          </div>

          <div>
            <h2 className="text-3xl font-semibold mb-2">
              Important tips for your photo
            </h2>
            <ul className="list-disc pl-5 mb-4">
              <li>
                <span className="font-bold">
                  Use a clearly readable blue or black pen or marker/texta on
                  paper or cardboard for your sign
                </span>
                . Don't use highlighters, makeup, crayons, or other difficult to
                read markers.
              </li>
              <li>
                <span className="font-bold">
                  Ensure that we can clearly see that you are the one holding
                  the sign
                </span>
                . Your arm and hand should be visible and clearly linked to your
                body. Check out the example photos for how much of your body we
                need to be able to see to successfully match you to your profile
                photos.
              </li>
              <li>
                <span className="font-bold">Do not edit the photo</span>,
                including mirrored images and beauty filters. We can flip them.
              </li>
            </ul>
            <p className="bg-indigo-100 p-2 font-bold text-indigo-800 rounded">
              This is for verification purposes only and will never be shown
              publicly.
            </p>
          </div>
        </section>

        <section className="py-5">
          <h2 className="text-3xl font-semibold mt-6 mb-2">
            Example verification photos
          </h2>
          <div className=" pt-10 space-y-5">
            <div className="flex items-center justify-center">
              <div className=" grid grid-cols-2 gap-2 bg-green-200 p-5 rounded-md w-[600px] h-[500px]">
                <img
                  src="/person.jpg"
                  alt="Example verification photo"
                  className=" h-[420px] w-72 rounded-md border-green-300 border-4"
                />
                <div>
                  <h1>Acceptable Photo</h1>
                  <ul className="list-disc pl-5">
                    <li>
                      You haven't made any edits or used any sort of Titer or
                      stickers Don't worry if your photo is backwards when using
                      a mirror, we can the right way around
                    </li>
                    <li>Your face is fully visible</li>
                    <li>We can clearly see that it is you holding the sign</li>
                    <li>
                      We can see your whole torso, allowing us to match you to
                      the photos on your profile
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-10 items-center justify-center">
              <div className=" grid grid-cols-2 gap-2 bg-green-200 p-5 rounded-md w-[500x] h-[450px]">
                <img
                  src="/person.jpg"
                  alt="Example verification photo"
                  className=" h-[400px] w-64 rounded-md border-green-300 border-4"
                />
                <div>
                  <h1>Unacceptable Photo</h1>
                  <ul className="list-disc pl-5">
                    <li>
                      We can't clearly tell that it is you holding the sign
                      because your arm and hand are not visible. We must be able
                      to see your arm and hand to verify your identity.
                    </li>
                    <li>Sign in partially visible</li>
                  </ul>
                </div>
              </div>
              <div className=" grid grid-cols-2 gap-2 bg-green-200 p-5 rounded-md w-[500px] h-[450px]">
                <img
                  src="/person.jpg"
                  alt="Example verification photo"
                  className=" h-[400px] w-64 rounded-md border-green-300 border-4"
                />
                <div>
                  <h1>Unacceptable Photo</h1>
                  <ul className="list-disc pl-5">
                    <li>
                      You must be obscured preventing us verifying your
                      identity.We recognize that you may be holding the sign in
                      a way that is difficult to see. Please try to position
                      yourself so that we can clearly see your arm and hand.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-10 grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-lg font-semibold text-gray-800 mb-4">
              Upload your photo
            </h2>

            <div className="mb-5">
              <label
                className="block text-sm font-medium text-gray-700 mb-2"
                for="verification-photo"
              >
                Verification photo
              </label>
              <input
                id="verification-photo"
                type="file"
                className="block w-full text-sm text-gray-600 border border-gray-300 rounded-md cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <p className="text-xs text-gray-500 mt-1">
                If you are on a recent mobile device, tapping 'Choose file' will
                let you take a photo directly.
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
                Please provide links and not just site names if you are sharing
                other listings.
              </p>
            </div>

            <button
              type="submit"
              className="bg-gray-200 text-gray-800 px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-300 transition"
            >
              Submit verification
            </button>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-gray-800 mb-4">
              Your prior uploads
            </h2>
            <p className="text-sm text-gray-600 mb-2">
              You have previously uploaded verification photos on:
            </p>
            <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1">
              <li>February 1st, 2025 22:13 (UTC time)</li>
              <li>February 12th, 2025 05:50 (UTC time)</li>
            </ul>
          </div>
        </section>
      </main>
    </div>
  );
}

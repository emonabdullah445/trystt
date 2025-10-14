import InputFieldComponents from "./InputFieldComponents";

export default function HomeSections() {
  return (
    <div className="min-h-screen container pt-5 mx-auto px-4 lg:px-0">
      <main className="py-4">
        <section className="pb-10">
          <h1 className="text-2xl md:text-3xl font-bold mb-4">Verify account</h1>
          <div className="bg-[#f6e5cb] p-4 mb-4 rounded space-y-1">
            <h1 className="text-md md:text-2xl text-[#7f6943]">
              Please read these instructions carefully!{" "}
            </h1>
            <p className="text-[#baa585] pb-1 text-sm md:text-md">
              It's important that your verification photo meets our requirements
              to ensure that we can approve your profile first time. Failure to
              meet these requirements will result in your submission being
              rejected, which may delay your approval.
            </p>
            <button className="text-black text-sm md:text-md bg-[#f7c40f] px-2 py-2 rounded-md">
              Learn more about verification on our Support Centre
            </button>
          </div>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h2 className="text-xl md:text-2xl font-semibold mb-2">
              Your verification photo
            </h2>
            <p className="mb-4 text-sm md:text-md">
              All providers on Tryst must be verified before their profile will
              be visible. This photo is also important if we ever need to assist
              you in recovering your account so please take a moment to ensure
              you have taken a good photo. Please see our example photos for
              what we consider good verification uploads.
            </p>
            <p className="mb-4 text-sm md:text-md">
              Your photo MUST show your face, hand, and arm, holding a
              handwritten sign using blue or black pen or marker, that clearly
              shows the following information:
            </p>
            <ul className="list-disc pl-5 mb-4 text-sm md:text-md">
              <li>Your working name (this should match your profile)</li>
              <li>The email address you signed up with</li>
              <li>Today's date</li>
              <li>The phrase "I am signing up for Tryst"</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl md:text-2xl font-semibold mb-2">
              Important tips for your photo
            </h2>
            <ul className="list-disc pl-5 mb-4 text-sm md:text-md">
              <li>
                <span className="font-bold text-sm md:text-md">
                  Use a clearly readable blue or black pen or marker/texta on
                  paper or cardboard for your sign
                </span>
                . Don't use highlighters, makeup, crayons, or other difficult to
                read markers.
              </li>
              <li>
                <span className="font-bold text-sm md:text-md">
                  Ensure that we can clearly see that you are the one holding
                  the sign
                </span>
                . Your arm and hand should be visible and clearly linked to your
                body. Check out the example photos for how much of your body we
                need to be able to see to successfully match you to your profile
                photos.
              </li>
              <li>
                <span className="font-bold text-sm md:text-md">Do not edit the photo</span>,
                including mirrored images and beauty filters. We can flip them.
              </li>
            </ul>
            <p className="bg-indigo-100 p-2 font-bold text-indigo-800 rounded text-sm md:text-md">
              This is for verification purposes only and will never be shown
              publicly.
            </p>
          </div>
        </section>

       <section className="py-5">
  <h2 className="text-xl md:text-2xl font-semibold mt-6 mb-2">
    Example verification photos
  </h2>
  
  <div className="pt-10 space-y-8">
    
    <div className="flex justify-center">
      <div className="flex flex-col md:flex-row items-center gap-6 bg-green-100 p-6 rounded-lg max-w-4xl w-full">
        <div className="flex-shrink-0">
          <img
            src="/person.jpg"
            alt="Example acceptable verification photo"
            className="h-80 w-64 rounded-lg border-green-400 border-2 object-cover"
          />
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-green-800 mb-3">Acceptable Photo</h3>
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            <li>You haven't made any edits or used any sort of filter or stickers</li>
            <li>Your face is fully visible</li>
            <li>We can clearly see that it is you holding the sign</li>
            <li>Nothing on your sign is incorrect or obscured by your hand</li>
            <li>We can see your whole torso allowing us to match you to the photos on your profile photos</li>
          </ul>
        </div>
      </div>
    </div>

    
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-7xl mx-auto">
  
      <div className="flex flex-col sm:flex-row items-center gap-4 bg-red-100 p-6 rounded-lg">
        <div className="flex-shrink-0">
            <img
            src="/person2.PNG"
            alt="Unacceptable verification photo - face obscured"
            className="h-64 w-48 rounded-lg border-red-400 border-2 object-cover"
          />
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-red-800 mb-3"> Acceptable Photo</h3>
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            <li>We can't clearly tell that it is you holding the sign because your shoulder and arm are not visible.We must be able to see enough of your arm to know that the sign is held by you and not someone else</li>
            <li>Sign is partially out of frame</li>
            
          </ul>
        </div>
      </div>

  
      <div className="flex flex-col sm:flex-row items-center gap-4 bg-red-100 p-6 rounded-lg">
        <div className="flex-shrink-0">
          <img
            src="/person3.PNG"
            alt="Unacceptable verification photo - face obscured"
            className="h-64 w-48 rounded-lg border-red-400 border-2 object-cover"
          />
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-red-800 mb-3"> Unacceptable Photo</h3>
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            <li>Your face is obscured preventing us verifying you fully we recognize that face in provided may not want to show their face verifying however due to the nature of Tryst link as an adult platform, we must verify you this way.</li>
          
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>

        <section className="mt-10 grid md:grid-cols-2 gap-8">
         
         <InputFieldComponents/>

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

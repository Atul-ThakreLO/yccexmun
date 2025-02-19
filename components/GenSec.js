import Image from "next/image";

export default function LetterPage() {
  return (
    <div className="px-2 sm:px-2 md:px-10 py-8"> {/* Less margin on mobile */}
      <div className="gen-sec-letter-container shadow-lg rounded-2xl overflow-hidden max-w-none sm:mx-auto">
        <section className="gen-sec-letter flex flex-col lg:flex-row items-center lg:items-center gap-6 p-4 sm:p-2 md:p-10">
          {/* Left Section (Text) */}
          <div className="text-left w-full lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold leading-tight">
              <span className="text-6xl font-extrabold">“</span>
              Message from the Secretariat General
            </h2>
            <p className="mt-6 font-semibold">Dear Delegates and Honored Guests,</p>
            <p className="mt-4 leading-relaxed">
              I take immense pride in welcoming you to the maiden edition of YCCE X MUN, an event launched in honor of the Ruby Jubilee Celebrations of Yeshwantrao Chavan College of Engineering. At this point where YCCE marks its 40 years of excellence, we set out on a journey beyond academics—diplomacy, leadership, and global awareness.
            </p>
            <p className="mt-4 leading-relaxed">
              Model United Nations is just a simulation that has much more to it: it is a stage where young leaders hone their critical thinking skills, learn negotiation techniques, and craft solutions in committee rooms that are still viable beyond those rooms. Words have power, challenges are presented to perceptions, and consensus is built here.
            </p>
            <p className="mt-4 leading-relaxed">
              As you step into this conference, I urge you to do so with conviction, listen with an open mind, and debate with the intent of progress. Let this MUN be a reminder that the world is shaped by those who dare to question, who choose to engage, and who believe in the power of ideas.
            </p>
            <p className="mt-6 font-semibold">Wishing you all an inspiring and transformative experience.</p>
            <div className="mt-6">
              <h3 className="text-lg font-heading">Secretariat General,</h3>
              <h3 className="text-lg font-bold">Kushal Javkhedkar</h3>
            </div>
          </div>

          {/* Right Section (Image) */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-center items-center"> {/* Ensures perfect centering */}
            <div className="relative w-3/4 md:w-2/3 lg:w-1/2"> {/* Larger image */}
              <Image
                src="/images/Kushal.jpg"
                alt="Kushal Javkhedkar"
                width={400}
                height={400}
                className="w-full h-auto rounded-lg shadow-md"
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

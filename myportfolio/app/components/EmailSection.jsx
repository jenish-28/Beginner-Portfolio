"use client";

import Link from "next/link";
import Image from "next/image";

const EmailSection = () => {
  return (
    <section
      className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative"
      id="contact"
    >
      {" "}
      <div>
        <h5 className="text-xl font-bold text-white my-2">Let's Connect</h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          I'm always interested in hearing about new projects and opportunities.
          Feel free to reach out if you have any questions or want to
          collaborate.
        </p>
        <div className="socials flex flex-row gap-2">{/* social links */}</div>
      </div>
      <div>
        <div className="mb-6">
          <label
            htmlFor="email"
            className="text-white block mb-2 text-sm font-medium"
          >
            Email
          </label>
          <Link
            href="mailto:16jenishkumarpatel@gmail.com"
            className="text-blue-400 hover:underline"
          >
            16jenishkumarpatel@gmail.com
          </Link>
        </div>

        <div className="mb-6">
          <label
            htmlFor="linkedin"
            className="text-white block mb-2 text-sm font-medium"
          >
            Connect
          </label>

          <Link
            href="https://www.linkedin.com/in/jenishkumar-patel-634770394/"
            target="_blank"
            className="inline-flex items-center justify-center w-12 h-12 bg-white rounded-full hover:bg-blue-100 transition"
          >
            <Image
              src="/image/linkedin.png"
              alt="Linkedin Icon"
              width={30}
              height={30}
            />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default EmailSection;

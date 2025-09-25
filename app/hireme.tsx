"use client";

import React from 'react';
import Container from "@/components/Container";
import FrameworkIcons from "@/app/components/FrameworkIcons";
import Link from "next/link";

type hireProps = {
  data: HeroSection;
};

const Hire = ({ data }: hireProps) => {
  const phone = "0765199811";

  const showPhone = () => alert(phone);

  const onKeyDown = (e: React.KeyboardEvent<HTMLImageElement>) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      showPhone();
    }
  };

  return (
    <div id="hireme" className="">
      <div className="p-5 bg-background sm:p-10 w-[100vw] relative left-[50%] right-[50%] ml-[-50vw] mr-[-50vw]">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-4">
            <div className="grid grid-rows-2 animate-fade-left">
              <p className="tracking-tight font-bold sm:text-3xl text-2xl sm:w-96 mr-5 font-custom">
                Let&apos;s discuss on something
                <span className="text-primary"> COOOOOL </span>
                together !!
              </p>
              <hr style={{ marginTop: "1rem" }} />
              <div className="flex gap-5" style={{ justifyContent: "space-around" }}>
                <Link
                  href={`mailto:aidouni.zak@gmail.com`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="https://img.icons8.com/?size=100&id=nQ4dZIRCI0nW&format=png&color=000000"
                    style={{
                      width: "4rem",
                      borderRadius: "50%",
                      outlineStyle: "groove",
                    }}
                    alt="Mail"
                  />
                </Link>
                <Link
                  href={`https://www.linkedin.com/in/zakaria-aidouni-85593b222/`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="https://img.icons8.com/?size=100&id=60ZV_wYC0BM2&format=png&color=000000"
                    style={{
                      width: "4rem",
                      borderRadius: "50%",
                      outlineStyle: "groove",
                    }}
                    alt="LinkedIn"
                  />
                </Link>

                {/* Image avec alerte téléphone */}
                <img
                  src="https://img.icons8.com/?size=100&id=wiJhr5r8Bs2I&format=png&color=000000"
                  alt="Contact"
                  role="button"
                  tabIndex={0}
                  onClick={showPhone}
                  onKeyDown={onKeyDown}
                  style={{
                    width: "4rem",
                    borderRadius: "50%",
                    outlineStyle: "groove",
                    cursor: "pointer",
                    display: "inline-block",
                  }}
                  aria-label={`Show phone number ${phone}`}
                />
              </div>
            </div>

            <div
              className="flex text-lg sm:leading-8 animate-fade-right video"
              style={{ justifyContent: "space-around" }}
            >
              <iframe
                style={{ width: "13rem" }}
                src="https://lottie.host/embed/aac9ff43-f077-4ec2-96bc-771f1902935d/Bm43TQughq.lottie"
              ></iframe>
              <iframe
                style={{ width: "13rem" }}
                src="https://lottie.host/embed/9eb1dd2f-220b-4031-9949-cd23bcaeef5f/MIDxrlnUgm.lottie"
              ></iframe>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Hire;

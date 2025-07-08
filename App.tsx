import React, { useState } from 'react';
import svgPaths from "./imports/svg-fnd1etjjyu";
import imgVector3 from "figma:asset/b88bdc9dbde251035e3196fa5551ace42c34eeeb.png";
import imgVector4 from "figma:asset/b92cf2a3c63d762d7d40022b2ed7edb200332b6b.png";
import imgEllipse2 from "figma:asset/d4374b484d0be4445247e171741792554d571a8f.png";

function Logo() {
  return (
    <div className="absolute contents left-0 top-0" data-name="logo">
      <div className="absolute h-[30.5px] left-0 top-0 w-[31.292px]">
        <div className="absolute bottom-[0.833%] left-[1.341%] right-[4.444%] top-[3.259%]">
          <img
            alt
            className="block max-w-none size-full"
            height="29.25177001953125"
            loading="lazy"
            src={imgVector3}
            width="29.481924057006836"
          />
        </div>
      </div>
      <div
        className="absolute h-[18.814px] left-[6.932px] top-[6.919px] w-[15.844px]"
        data-name="Exclude"
      >
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 16 19"
        >
          <path
            d={svgPaths.p3abd9340}
            fill="var(--fill-0, #262626)"
            id="Exclude"
          />
        </svg>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="h-[30px] relative shrink-0 w-[135px]">
      <Logo />
      <div className="absolute font-['Poppins:SemiBold',_sans-serif] leading-[0] left-[37.701px] not-italic text-[12px] text-left text-neutral-950 text-nowrap top-[6.25px]">
        <p className="block leading-[normal] whitespace-pre">Agentss</p>
      </div>
    </div>
  );
}

function Frame8() {
  return (
    <div className="box-border content-stretch flex flex-col gap-2 items-start justify-start p-0 relative shrink-0 w-[661.88px]">
      <Frame2 />
      <div className="font-['Poppins:Regular',_sans-serif] leading-[0] not-italic opacity-80 relative shrink-0 text-[12px] text-left text-neutral-950 text-nowrap">
        <p className="block leading-[1.5] whitespace-pre">
          © 2024 Relume. All rights reserved.
        </p>
      </div>
    </div>
  );
}

function FooterLinks() {
  return (
    <div
      className="box-border content-stretch flex flex-row font-['Poppins:Regular',_sans-serif] gap-6 items-start justify-start leading-[0] not-italic opacity-80 p-0 relative shrink-0 text-[12px] text-left text-neutral-950 text-nowrap"
      data-name="Footer Links"
    >
      <div className="relative shrink-0">
        <button className="[text-decoration-line:underline] [text-decoration-skip-ink:none] [text-decoration-style:solid] [text-underline-position:from-font] block leading-[1.5] text-nowrap whitespace-pre hover:opacity-70 transition-opacity">
          Privacy Policy
        </button>
      </div>
      <div className="relative shrink-0">
        <button className="[text-decoration-line:underline] [text-decoration-skip-ink:none] [text-decoration-style:solid] [text-underline-position:from-font] block leading-[1.5] text-nowrap whitespace-pre hover:opacity-70 transition-opacity">
          Terms of Service
        </button>
      </div>
      <div className="relative shrink-0">
        <button className="[text-decoration-line:underline] [text-decoration-skip-ink:none] [text-decoration-style:solid] [text-underline-position:from-font] block leading-[1.5] text-nowrap whitespace-pre hover:opacity-70 transition-opacity">
          Cookies Settings
        </button>
      </div>
    </div>
  );
}

function Row() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-end justify-between p-0 relative shrink-0 w-full"
      data-name="Row"
    >
      <Frame8 />
      <FooterLinks />
    </div>
  );
}

function Credits() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-8 items-center justify-end p-0 relative shrink-0 w-full"
      data-name="Credits"
    >
      <Row />
    </div>
  );
}

function Footer7() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-col gap-20 items-center justify-start left-0 overflow-clip px-16 py-20 top-[811px] w-[1440px]"
      data-name="Footer / 7 /"
    >
      <Credits />
    </div>
  );
}

function Logo1() {
  return (
    <div className="absolute contents left-0 top-0" data-name="logo">
      <div className="absolute h-[48.5px] left-0 top-0 w-[49.76px]">
        <div className="absolute bottom-[0.932%] left-[1.546%] right-[5.12%] top-[3.758%]">
          <img
            alt
            className="block max-w-none size-full"
            height="46.22555923461914"
            src={imgVector4}
            width="46.442989349365234"
          />
        </div>
      </div>
      <div
        className="absolute h-[29.919px] left-[11.023px] top-[11.003px] w-[25.194px]"
        data-name="Exclude"
      >
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 26 30"
        >
          <path
            d={svgPaths.p27929f0}
            fill="var(--fill-0, #262626)"
            id="Exclude"
          />
        </svg>
      </div>
    </div>
  );
}

function Logo2() {
  return (
    <div className="h-[48.5px] relative shrink-0 w-[134.76px]" data-name="logo">
      <Logo1 />
      <div className="absolute font-['Poppins:Bold',_sans-serif] leading-[0] left-[54.76px] not-italic text-[#1a1a1a] text-[18px] text-left text-nowrap top-[13.75px] uppercase">
        <p className="block leading-[normal] whitespace-pre">Agentss</p>
      </div>
    </div>
  );
}

function Frame1() {
  const handleTryNow = () => {
    const agentForm = document.getElementById('agent-form');
    if (agentForm) {
      agentForm.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <button 
      className="box-border content-stretch flex flex-row gap-2.5 items-center justify-center px-5 py-2 relative rounded-[100px] shrink-0 hover:bg-gray-50 transition-colors cursor-pointer"
      onClick={handleTryNow}
    >
      <div className="absolute border-[1.5px] border-[rgba(26,26,26,0.15)] border-solid inset-0 pointer-events-none rounded-[100px]" />
      <div className="font-['Poppins:Medium',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#1a1a1a] text-[16px] text-left text-nowrap">
        <p className="block leading-[normal] whitespace-pre">Try now</p>
      </div>
    </button>
  );
}

function Frame3() {
  return (
    <div className="absolute box-border content-stretch flex flex-row items-center justify-between left-1/2 px-8 py-0 top-8 translate-x-[-50%] w-[1200px]">
      <Logo2 />
      <Frame1 />
    </div>
  );
}

function Frame9() {
  return (
    <div className="box-border content-stretch flex flex-col gap-2.5 items-start justify-start leading-[0] not-italic p-0 relative shrink-0 text-[#1a1a1a] text-center w-full">
      <div className="font-['Poppins:Medium',_sans-serif] relative shrink-0 text-[0px] w-full">
        <p className="leading-[71px] text-[61px]">
          <span className="font-['Poppins:SemiBold',_sans-serif] not-italic">
            Headline lorem
          </span>
          <span className="font-['Bangers:Regular',_sans-serif] not-italic text-[#ffaf40]">
            ipsum
          </span>
          <span className="font-['Poppins:SemiBold',_sans-serif] not-italic text-[#1a1a1a]">
            dolor
          </span>
        </p>
      </div>
      <div className="font-['Poppins:Light',_sans-serif] h-[50px] opacity-70 relative shrink-0 text-[28px] w-full">
        <p className="block leading-[normal]">
          Transform your team into Supersales in 2 min
        </p>
      </div>
    </div>
  );
}

function Robot2() {
  return (
    <div className="relative shrink-0 size-3.5" data-name="robot_2">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 14 14"
      >
        <g id="robot_2">
          <mask
            height="14"
            id="mask0_1_61"
            maskUnits="userSpaceOnUse"
            style={{ maskType: "alpha" }}
            width="14"
            x="0"
            y="0"
          >
            <rect
              fill="var(--fill-0, #D9D9D9)"
              height="14"
              id="Bounding box"
              width="14"
            />
          </mask>
          <g mask="url(#mask0_1_61)">
            <path
              d={svgPaths.p35b1b700}
              fill="var(--fill-0, #1C1B1F)"
              id="robot_2_2"
            />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame7({ onClick }: { onClick: () => void }) {
  return (
    <button 
      className="bg-[#ffaf40] box-border content-stretch flex flex-row gap-1 items-center justify-center px-3 py-2 relative rounded-[100px] shrink-0 hover:bg-[#e59d36] transition-colors cursor-pointer"
      onClick={onClick}
    >
      <Robot2 />
      <div className="font-['Poppins:Medium',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#151515] text-[12px] text-nowrap text-right">
        <p className="block leading-[normal] whitespace-pre">
          Create your agent
        </p>
      </div>
    </button>
  );
}

function Frame6() {
  const [inputValue, setInputValue] = useState('');
  const [isCreating, setIsCreating] = useState(false);

  const handleCreateAgent = () => {
    if (inputValue.trim()) {
      setIsCreating(true);
      // Simulate API call
      setTimeout(() => {
        setIsCreating(false);
        alert(`Agent created: ${inputValue}`);
        setInputValue('');
      }, 2000);
    }
  };

  return (
    <div 
      id="agent-form"
      className="bg-gradient-to-b box-border content-stretch flex flex-col from-[#151515] h-[242px] items-end justify-between p-[32px] relative rounded-3xl shrink-0 to-[#151515e6] w-[776px]"
    >
      <div className="absolute border-[#ffaf40] border-[1.5px] border-solid inset-0 pointer-events-none rounded-3xl shadow-[0px_9px_80px_0px_rgba(0,0,0,0.32),0px_3.75998px_33.4221px_0px_rgba(0,0,0,0.23),0px_2.01027px_17.869px_0px_rgba(0,0,0,0.192),0px_1.12694px_10.0172px_0px_rgba(0,0,0,0.16),0px_0.598509px_5.32008px_0px_rgba(0,0,0,0.13),0px_0.249053px_2.21381px_0px_rgba(0,0,0,0.09)]" />
      <textarea
        className="font-['Poppins:Regular',_sans-serif] leading-[0] min-w-full not-italic relative shrink-0 text-[#b0b0b0] text-[14px] text-left bg-transparent border-none outline-none resize-none placeholder-[#b0b0b0] text-white min-h-[100px]"
        style={{ width: "min-content" }}
        placeholder="Describe your agent AI"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <Frame7 onClick={handleCreateAgent} />
      {isCreating && (
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center rounded-3xl">
          <div className="text-white text-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#ffaf40] mx-auto mb-2"></div>
            <p className="text-[#ffaf40]">Creating your agent...</p>
          </div>
        </div>
      )}
    </div>
  );
}

function Frame5() {
  return (
    <div className="box-border content-stretch flex flex-col gap-8 items-center justify-start p-0 relative shrink-0 w-full">
      <Frame9 />
      <Frame6 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-[50px] items-start justify-start left-1/2 px-16 py-32 rounded-[32px] top-[157px] translate-x-[-50%] w-[1200px]">
      <Frame5 />
    </div>
  );
}

export default function App() {
  return (
    <div className="bg-[#fff1e5] relative min-h-screen w-full overflow-x-hidden" data-name="6">
      <div className="absolute bottom-[-1063px] left-[-73px] size-[1586px] pointer-events-none">
        <img
          alt=""
          className="block max-w-none size-full"
          height="1586"
          src={imgEllipse2}
          width="1586"
        />
      </div>
      <Footer7 />
      <Frame3 />
      <Frame4 />
    </div>
  );
}
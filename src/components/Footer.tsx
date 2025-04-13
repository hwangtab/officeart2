import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 text-dark-gray text-sm py-8 mt-16"> {/* Restore original colors */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Contact & Address Info */}
        <div> {/* Removed flex flex-col */}
          <h4 className="font-bold mb-2">한국스마트협동조합</h4>
          {/* Changed p to div, added flex items-center */}
          <div className="flex items-center leading-normal"><a href="mailto:CONTACT@KOSMART.ORG" className="hover:underline focus:outline-none focus:ring-1 focus:ring-primary-blue rounded transition-colors duration-200">CONTACT@KOSMART.ORG</a></div>
          <div className="flex items-center leading-normal"><span className="mr-1">TEL :</span> <a href="tel:02-764-3114" className="hover:underline focus:outline-none focus:ring-1 focus:ring-primary-blue rounded transition-colors duration-200">02-764-3114</a></div>
          <div className="flex items-center leading-normal"><span className="mr-1">FAX :</span> 02-764-3828</div>
          <div className="mt-2 flex items-center leading-normal">(우)03358 서울특별시 영등포구 양산로 96 A213호</div>
          <div className="mt-2 flex items-center leading-normal">업무시간 : 평일 10:00 - 18:00 (점심시간 : 12:00 - 13:00)</div>
        </div>

        {/* Copyright & Business Info */}
        <div className="md:text-right"> {/* 오른쪽 정렬 (데스크탑) */}
          <p>©2020 by 한국스마트협동조합</p>
          <p>이사장 서인형</p>
          <p>사업자등록번호 385-86-01622</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
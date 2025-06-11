import React from 'react';
import SectionTitle from './SectionTitle';

const Footer = (): JSX.Element => {
  return (
    <footer className="bg-primary text-text-on-primary text-sm py-8 mt-12"> {/* Restored mt-12 */}
      {/* Restored 2-column grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Column 1: Contact & Address Info */}
        <div>
          <SectionTitle as="h4" level="footer">한국스마트협동조합</SectionTitle> {/* Use level prop */}
          <div className="flex items-center leading-normal">
            <a href="mailto:CONTACT@KOSMART.ORG" className="hover:underline hover:opacity-80 focus:outline-none focus:ring-1 focus:ring-offset-primary focus:ring-white rounded transition-colors duration-200">CONTACT@KOSMART.ORG</a>
          </div>
          <div className="flex items-center leading-normal">
            <span className="mr-1">TEL :</span> <a href="tel:0507-1335-3128" className="hover:underline hover:opacity-80 focus:outline-none focus:ring-1 focus:ring-offset-primary focus:ring-white rounded transition-colors duration-200">0507-1335-3128</a>
          </div>
          <div className="flex items-center leading-normal"><span className="mr-1">FAX :</span> 02-764-3828</div>
          <div className="mt-2 flex items-center leading-normal">
            <a
              href={`https://map.kakao.com/link/search/${encodeURIComponent("서울특별시 영등포구 양산로 96")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline hover:opacity-80 focus:outline-none focus:ring-1 focus:ring-offset-primary focus:ring-white rounded transition-colors duration-200"
            >
              (우)03358 서울특별시 영등포구 양산로 96 A213호
            </a>
          </div>
          <div className="mt-2 flex items-center leading-normal">업무시간 : 평일 10:00 - 18:00 (점심시간 : 12:00 - 13:00)</div>
        </div>

        {/* Column 2: Copyright & Business Info */}
        <div className="md:text-right"> {/* Restored right alignment */}
          {/* Updated copyright year to 2025 */}
          <p>©2025 by 한국스마트협동조합</p>
          <p>이사장 서인형</p>
          <p>사업자등록번호 385-86-01622</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
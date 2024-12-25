'use client';
import React from 'react';

const PresidentMessage = () => {
  return (
    <div className="w-full py-10 px-5" style={{ backgroundColor: '#DDFFBC' }}>
      {/* Section Title */}
      <h1 className="text-4xl font-bold text-center text-blue-600 mb-8">
        President's Message
      </h1>

      {/* Content Section */}
      <div className="flex flex-col items-center gap-8">
        {/* Image and Name Section */}
        <div className="flex flex-col md:flex-row items-center gap-8 w-full justify-center">
          {/* Image Section */}
          <div className="flex-shrink-0">
            <img
              src="/president.png"
              alt="President Aslam Thakur"
              className="w-64 h-64 object-cover rounded"
            />
          </div>

          {/* Name Section */}
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-800 mb-2">
              Aslam Thakur {/* To change font size, modify the 'text-3xl' class */}
            </h2>
            <p className="text-lg font-semibold text-gray-600 mb-6">
              President, Kokan Welfare Society, Kuwait {/* To adjust font size, modify the 'text-lg' class */}
            </p>
          </div>
        </div>

        {/* Assalamu Alaikum Section */}
        <div className="text-center w-full">
          <p className="text-lg font-bold text-gray-700 mb-6">
            Assalamu alaikum {/* To change font size, modify the 'text-lg' class */}
          </p>
        </div>

        {/* Speech Section */}
        <div className="w-full text-left">
          <p className="text-gray-700 leading-relaxed font-serif mb-4">
            As president of the Kokan Welfare Society Kuwait, I would like to extend my sincerest gratitude to our members and supporters for their ongoing dedication to our mission. Over the last eleven years, Kokan Welfare Society, Kuwait (KWS) has become sole representative of Kokani community in Kuwait and I am proud to be a part of it. KWS is committed to improving the lives of those in need, and we could not do it without the generosity and support of our community.
          </p>
          <p className="text-gray-700 leading-relaxed font-serif mb-4">
            Surely, due to the Kokani people’s trust in our society, KWS has become representative of Kokani people’s aspirations, which provides a common platform for all to come together for the betterment of the Society.
          </p>
          <p className="text-gray-700 leading-relaxed font-serif mb-4">
            In recent months, we have faced unprecedented challenges due to the ongoing COVID-19 pandemic. Despite these difficulties, our team has worked tirelessly to ensure that those who rely on our services continue to receive the support they need. As we look to the future, we remain committed to finding new and innovative ways to serve our community. We are continuing to adapt our programs and services to meet the ever-changing needs of those we serve, and we are always looking for new opportunities to make a positive impact.
          </p>
          <p className="text-gray-700 leading-relaxed font-serif mb-4">
            Further, we are aiming to set an example of inclusive, humanitarian social services for the upliftment of our community. We also believe that empowering women will bring better changes for future generations, creating a positive impact and making conscious efforts for the same.
          </p>
          <p className="text-gray-700 leading-relaxed font-serif mb-4">
            I would also like to take this opportunity to remind everyone that our organization is always in need of volunteers and support. Every little bit helps, and we are deeply grateful for any contribution that our supporters can make.
          </p>
          <p className="text-gray-700 leading-relaxed font-serif mb-4">
            On behalf of the Office Bearers and Executive Committee, we thank you again for your continued support, and look forward to working together to make a brighter future for all.
          </p>
          <p className="text-gray-700 leading-relaxed font-serif">
            May Allah bless us all with prosperity, good health, and a peaceful life.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PresidentMessage;

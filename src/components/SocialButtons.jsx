import React from 'react';

const SocialButtons = () => {
  return (
    <div className="flex justify-center items-center space-x-4">
      {/* GitHub */}
      <a
        href="https://github.com/tjwu5"
        className="flex justify-center items-center w-12 h-12 rounded-full bg-[#333] hover:bg-gray-100 shadow-sm transition duration-300"
      >
        <svg
          className="w-6 h-6 fill-gray-100 hover:fill-[#333] transition duration-300"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="-2.5 0 19 19"
        >
          <path d="M9.464 17.178a4.506 4.506 0 0 1-2.013.317 4.29 4.29 0 0 1-2.007-.317.746.746 0 0 1-.277-.587c0-.22-.008-.798-.012-1.567-2.564.557-3.105-1.236-3.105-1.236a2.44 2.44 0 0 0-1.024-1.348c-.836-.572.063-.56.063-.56a1.937 1.937 0 0 1 1.412.95 1.962 1.962 0 0 0 2.682.765 1.971 1.971 0 0 1 .586-1.233c-2.046-.232-4.198-1.023-4.198-4.554a3.566 3.566 0 0 1 .948-2.474 3.313 3.313 0 0 1 .091-2.438s.773-.248 2.534.945a8.727 8.727 0 0 1 4.615 0c1.76-1.193 2.532-.945 2.532-.945a3.31 3.31 0 0 1 .092 2.438 3.562 3.562 0 0 1 .947 2.474c0 3.54-2.155 4.32-4.208 4.548a2.195 2.195 0 0 1 .625 1.706c0 1.232-.011 2.227-.011 2.529a.694.694 0 0 1-.272.587z"></path>
        </svg>
      </a>

      {/* LinkedIn */}
      <a
        href="https://www.linkedin.com/in/tonyjxwu/"
        className="flex justify-center items-center w-12 h-12 rounded-full bg-[#0077b5] hover:bg-gray-100 shadow-sm transition duration-300 text-gray-100 hover:text-[#0077b5]"
    >
        {/* Fixed SVG Icon */}
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            fill="currentColor"
            className="w-6 h-6"
        >
            <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.49 0 53.79 0 24.09 24.09 0 53.79 0s53.79 24.09 53.79 53.79c0 29.7-24.09 54.31-53.79 54.31zM447.9 448h-92.4V302.4c0-34.7-.7-79.3-48.3-79.3-48.3 0-55.7 37.7-55.7 76.6V448h-92.4V148.9h88.7v40.8h1.3c12.4-23.5 42.5-48.3 87.4-48.3 93.5 0 110.7 61.6 110.7 141.7V448z" />
        </svg>
    </a>

      {/* Facebook */}
      <a
        href="https://www.facebook.com/profile.php?id=100014711859459"
        className="flex justify-center items-center w-12 h-12 rounded-full bg-[#3b5998] hover:bg-gray-100 shadow-sm transition duration-300"
      >
        <svg
          className="w-6 h-6 fill-gray-100 hover:fill-[#3b5998] transition duration-300"
          viewBox="0 0 310 310"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M81.703,165.106h33.981V305c0,2.762,2.238,5,5,5h57.616c2.762,0,5-2.238,5-5V165.765h39.064c2.54,0,4.677-1.906,4.967-4.429l5.933-51.502c0.163-1.417-0.286-2.836-1.234-3.899c-0.949-1.064-2.307-1.673-3.732-1.673h-44.996V71.978c0-9.732,5.24-14.667,15.576-14.667h29.42c2.762,0,5-2.239,5-5V5.037c0-2.762-2.238-5-5-5h-40.545C187.467,0.023,186.832,0,185.896,0c-7.035,0-31.488,1.381-50.804,19.151c-21.402,19.692-18.427,43.27-17.716,47.358v37.752H81.703c-2.762,0-5,2.238-5,5v50.844C76.703,162.867,78.941,165.106,81.703,165.106z" />
        </svg>
      </a>

      {/* Instagram */}
      <a
        href="https://www.instagram.com/tj.wu_/"
        className="flex justify-center items-center w-12 h-12 rounded-full bg-[#c13584] hover:bg-gray-100 shadow-sm transition duration-300"
      >
        <svg
          viewBox="0 0 20 20"
          className="w-6 h-6 fill-gray-100 hover:fill-[#c13584] transition duration-300"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M14.5 0h-9A5.506 5.506 0 0 0 0 5.5v9A5.506 5.506 0 0 0 5.5 20h9a5.506 5.506 0 0 0 5.5-5.5v-9A5.506 5.506 0 0 0 14.5 0zM10 15a5 5 0 1 1 5-5 5.006 5.006 0 0 1-5 5zm6-9a1 1 0 1 1 1-1 1.001 1.001 0 0 1-1 1zM10 7a3 3 0 1 0 3 3 3.004 3.004 0 0 0-3-3z" />
        </svg>
      </a>
    </div>
  );
};

export default SocialButtons;
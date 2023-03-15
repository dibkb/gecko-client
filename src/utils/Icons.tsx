import React from "react";
interface Icon {
  className?: string;
}
export const MediumIcon: React.FC<Icon> = ({ className }) => {
  return (
    <svg
      width="16"
      height="10"
      viewBox="0 0 16 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M9.025 5.00001C9.025 7.48501 7.005 9.50001 4.512 9.50001C3.92026 9.50079 3.33417 9.38502 2.78717 9.1593C2.24018 8.93358 1.743 8.60234 1.32402 8.18447C0.90504 7.76661 0.572469 7.27031 0.345294 6.72392C0.118118 6.17753 0.000787407 5.59174 0 5.00001C0 2.51401 2.02 0.500005 4.512 0.500005C5.10382 0.499086 5.69003 0.614759 6.23714 0.84042C6.78425 1.06608 7.28154 1.39731 7.70063 1.81518C8.11971 2.23306 8.45237 2.7294 8.67961 3.27586C8.90685 3.82232 9.02421 4.40818 9.025 5.00001ZM13.975 5.00001C13.975 7.34001 12.965 9.23601 11.719 9.23601C10.473 9.23601 9.463 7.33901 9.463 5.00001C9.463 2.66001 10.473 0.764005 11.719 0.764005C12.965 0.764005 13.975 2.66101 13.975 5.00001ZM16 5.00001C16 7.09601 15.645 8.79501 15.206 8.79501C14.768 8.79501 14.413 7.09501 14.413 5.00001C14.413 2.90401 14.768 1.20501 15.207 1.20501C15.645 1.20501 16 2.90401 16 5.00001Z"
        fill="#121927"
      />
    </svg>
  );
};
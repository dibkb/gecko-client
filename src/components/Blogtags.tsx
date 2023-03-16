import React from "react";
interface Blogtags {
  tags: string[];
  className?: string;
}
export const Blogtags: React.FC<Blogtags> = ({ tags, className }) => {
  return (
    <div className={`flex gap-3 mt-4 ${className}`}>
      {tags.map((tag) => (
        <span
          key={tag}
          className="text-sm font-semibold border border-primary rounded-full px-3"
        >
          {tag}
        </span>
      ))}
    </div>
  );
};

import React from "react";
interface Blogtags {
  tags: string[] | undefined;
  className?: string;
}
export const Blogtags: React.FC<Blogtags> = ({ tags, className }) => {
  return (
    <div className={`flex gap-3 mt-4 flex-wrap ${className}`}>
      {tags?.map((tag) => (
        <span
          key={tag}
          className="text-xs text-stone-800 font-semibold border border-stone-800 rounded-full px-3 py-1"
        >
          {tag}
        </span>
      ))}
    </div>
  );
};

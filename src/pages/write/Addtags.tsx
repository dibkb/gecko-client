import React, { useCallback, useState } from "react";
import { tagData } from "../../utils/tagData";
import { WaringPortal } from "../../components/Portal";
import { AvailableTags, SelectedTags } from "../../components/Tags";
interface Addtags {
  selectedTags: Record<"id" | "tag", string>[];
  setSelectedTags: (prev: any) => void;
}
const Addtags: React.FC<Addtags> = ({ selectedTags, setSelectedTags }) => {
  const [showPortal, setShowPortal] = useState<boolean>(false);
  const [alltags, setAllTags] = useState<Record<"id" | "tag", string>[]>(
    tagData.slice(1)
  );
  // ------------------------------------------------------------
  const addTagHandler = useCallback(
    (element: Record<"id" | "tag", string>) => {
      if (selectedTags.length <= 2) {
        setSelectedTags([...selectedTags, element]);
        setAllTags((prev) => prev.filter((item) => item.id !== element.id));
      } else {
        setShowPortal(true);
      }
    },
    [selectedTags]
  );
  const removeTagHandler = useCallback(
    (element: Record<"id" | "tag", string>) => {
      setSelectedTags((prev) => prev.filter((item) => item.id !== element.id));
      setAllTags((prev) => [...prev, element]);
    },
    []
  );
  // ------------------------------------------------------------
  const allTagList = alltags.map((element) => {
    return (
      <AvailableTags
        element={element}
        addTagHandler={addTagHandler}
        key={element.id}
      />
    );
  });
  const selectedTagList = selectedTags.map((element) => {
    return (
      <SelectedTags
        element={element}
        removeTagHandler={removeTagHandler}
        key={element.id}
      />
    );
  });

  return (
    <div>
      {showPortal && (
        <WaringPortal
          setShowPortal={setShowPortal}
          message={"You can add a maximum of three tags !!!"}
        />
      )}
      <h1 className="text-center text-4xl font-semibold">Add Tags</h1>
      <section className="flex flex-col mx-auto mt-24">
        <h3 className="text-center font-medium text-md">Selected Tags :</h3>
        <main className="m-16 flex gap-x-6 gap-y-4 justify-center max-w-6xl mx-auto flex-wrap select-none">
          {selectedTagList}
        </main>
      </section>
      <section className="flex flex-col mx-auto mt-16 mb-24">
        <h3 className="text-center font-medium text-md">Available Tags :</h3>
        <main className="mt-12 flex gap-x-6 gap-y-4 justify-center max-w-6xl mx-auto flex-wrap select-none">
          {allTagList}
        </main>
      </section>
    </div>
  );
};

export default Addtags;

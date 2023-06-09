import React, { useCallback, useState } from "react";
import { tagData } from "../../utils/tagData";
import { WaringPortal } from "../../components/modals/Portal";
import { AvailableTags, SelectedTags } from "../../components/Tags";
interface Addtags {
  selectedTags: string[];
  setSelectedTags: (prev: any) => void;
}
const Addtags: React.FC<Addtags> = ({ selectedTags, setSelectedTags }) => {
  const [showPortal, setShowPortal] = useState<boolean>(false);
  const [alltags, setAllTags] = useState<string[]>(tagData.slice(1));
  // ------------------------------------------------------------
  const addTagHandler = useCallback(
    (element: string) => {
      if (selectedTags.length <= 2) {
        setSelectedTags([...selectedTags, element]);
        setAllTags((prev) => prev.filter((item) => item !== element));
      } else {
        setShowPortal(true);
      }
    },
    [selectedTags]
  );
  const removeTagHandler = useCallback((element: string) => {
    setSelectedTags((prev) => prev.filter((item) => item !== element));
    setAllTags((prev) => [...prev, element]);
  }, []);
  // ------------------------------------------------------------
  const allTagList = alltags.map((element) => {
    return (
      <AvailableTags
        element={element}
        addTagHandler={addTagHandler}
        key={element}
      />
    );
  });
  const selectedTagList = selectedTags.map((element) => {
    return (
      <SelectedTags
        element={element}
        removeTagHandler={removeTagHandler}
        key={element}
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

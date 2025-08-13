import React from "react";

type SortControlProps = {
  currentSelection: string; // Current selection: 'Release Date' or 'Title'
  onChange: (newValue: string) => void; // Callback to handle changes
};

const SortControl: React.FC<SortControlProps> = ({
  currentSelection,
  onChange,
}) => {
  const handleSelectionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onChange(event.target.value); // Call the callback with the new value
  };

  return (
    <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
      <label htmlFor="sort-select" style={{ fontWeight: "bold" }}>
        Sort by
      </label>
      <select
        id="sort-select"
        value={currentSelection}
        onChange={handleSelectionChange} // Handle user selection changes
        style={{
          padding: "8px",
          borderRadius: "4px",
          border: "1px solid #ccc",
          outline: "none",
          fontSize: "14px",
        }}
      >
        {/* Sort Options */}
        <option value="Release Date">Release Date</option>
        <option value="Title">Title</option>
      </select>
    </div>
  );
};

export default SortControl;
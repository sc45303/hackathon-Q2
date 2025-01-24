interface ColorSelectorProps {
  onSelectColor: (color: string) => void;
}

const ColorSelector: React.FC<ColorSelectorProps> = ({ onSelectColor }) => {
  const colors = ["Red", "Blue", "Green", "Black"];

  return (
    <div>
      <p>Select Color:</p>
      <select onChange={(e) => onSelectColor(e.target.value)}>
        {colors.map((color) => (
          <option key={color} value={color}>
            {color}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ColorSelector;

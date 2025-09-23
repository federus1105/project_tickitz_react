export const OrderSeat = ({ id, name, selectedSeats, onChange }) => {
  const isSelected = selectedSeats.includes(name);
  const bgColor = isSelected ? "bg-gray-700" : "bg-gray-300";

  return (
    <div className={`w-7 h-7 rounded cursor-pointer ${bgColor}`}>
      <label
        htmlFor={id}
        className="block w-full h-full rounded cursor-pointer"
      ></label>
      <input
        type="checkbox"
        name={name}
        id={id}
        onChange={onChange}
        className="hidden"
      />
    </div>
  );
};

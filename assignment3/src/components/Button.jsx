const Button = () => {
  const handleClick = () => {
    console.log("Button clicked!");
  };

  return (
    <div className="flex justify-center items-center px-5 py-2">
        <button 
            onClick={handleClick}
            className=" w-48 font-bold text-xl bg-red-500 text-white px-4 py-2 
            rounded-[20px] hover:bg-red-700 cursor-pointer shadow-md transition duration-300 ease-in-out">
                Click On Me
        </button>
    </div>
  );
};

export default Button;
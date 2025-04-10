const UserCard = ({ name, email }) => {
    return (
        <div className="flex justify-center items-center ">
        <div className="max-w-sm rounded-lg shadow-md bg-white p-4 border border-gray-200 text-center">
          <h2 className="text-xl font-semibold">{name}</h2>
          <p className="text-gray-500">{email}</p>
        </div>
      </div>
      
    );
  };
  
  export default UserCard;
  
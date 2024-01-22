const Card = ({data}) => {
    return (
      <div className="flex justify-center">
        <div className="flex-col shadow-2xl bg-white   w-96 h-96 p-5 flex justify-start items-center text-center text-blue-800 text-xl rounded-[30px]">
          {data}
        </div>
      </div>
    );
  };
  
  export default Card;
  
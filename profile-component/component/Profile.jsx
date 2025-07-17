export function Profile() {
  return (
    <div className="w-60 h-80 rounded-xl relative overflow-hidden bg-teal-50">
      <div className="bg-[#48050F] w-full h-30"></div>
      <div className="mt-7 p-5 flex flex-col items-center justify-end">
        <h3 className="font-semibold">
          Saptadeep Ghosh <span className="text-slate-600">22</span>
        </h3>
        <p className="font-light text-[0.7rem]">Kolkata</p>
      </div>
      <hr />
      <div className="mt-2 p-3 flex justify-around ">
        <div className="text-center">
          <h2 className="text-xl font-semibold leading-none">50</h2>
          <p className="font-light text-[0.7rem]">Followers</p>
        </div>
        <div className="text-center">
          <h2 className="text-xl font-semibold leading-none">300</h2>
          <p className="font-light text-[0.7rem]">Likes</p>
        </div>
        <div className="text-center">
          <h2 className="text-xl font-semibold leading-none">1020</h2>
          <p className="font-light text-[0.7rem]">Posts</p>
        </div>
        <img
          src="../images/dp.jpeg"
          className="border-3 absolute top-17 left-18 border-orange-700 z-10 rounded-full w-22 h-22 bg-teal-5 cursor-pointer"
        />
      </div>
    </div>
  );
}

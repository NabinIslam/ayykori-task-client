const InProcess = () => {
  return (
    <div>
      <div className="bg-white hover:bg-[#B9F2E5] duration-200 px-7 py-3 rounded-lg my-5 flex items-center justify-between">
        <div className="flex items-center justify-between gap-2">
          <img src="/avatar.png" alt="" />
          <div>
            <h6 className="text-sm font-bold">Amit Albaz</h6>
            <p className="text-xs font-semibold">4 year exp. | Expected 45k</p>
          </div>
        </div>
        <h6 className="font-bold text-[#11998e]">In process</h6>
        <h6 className="font-semibold">14/03/24</h6>
      </div>
    </div>
  );
};

export default InProcess;

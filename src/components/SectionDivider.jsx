/* eslint-disable react/prop-types */
const SectionDivider = ({ title, subTitle = "" }) => {
  return (
    <div className="h-[1px] bg-slate-800 realtive mt-20 mb-20">
      <div className="absolute left-[50%] z-10 bg-[#f1f1f1] translate-y-[-50%] translate-x-[-50%] py-2 border-[1px]  border-slate-800 px-3 space-y-1">
        <h2 className="text-center font-medium text-2xl text-slate-700">
          {title}
        </h2>
        {subTitle && (
          <p className="text-center font-medium text-sm text-gray-400">
            {subTitle}
          </p>
        )}
      </div>
    </div>
  );
};

export default SectionDivider;

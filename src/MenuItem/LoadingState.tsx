import { Skeleton } from '@mui/material';

export const MenuItemLoadingState = () => {
  return (
    <div>
      <Skeleton variant="rectangular" height={192} />
      <div className="bg-white dark:bg-slate-800 flex-col shadow px-5 py-4  flex ">
        <div className="justify-between flex text-xl leading-7  tracking-wide font-semibold">
          <Skeleton variant="text" width={200} />
          <span>
            <Skeleton variant="text" width={50} />
          </span>
        </div>
        <p className=" mt-1">
          <Skeleton variant="rectangular" height={100} />
        </p>
        <p className=" mt-1">
          <Skeleton variant="rectangular" height={100} />
        </p>
      </div>
      <div className="flex flex-col mt-2 space-y-3 px-5 ">
        <Skeleton variant="text" height={30} />
      </div>
      <div className="flex flex-col  px-5 mt-2">
        <Skeleton variant="text" height={30} />
      </div>
      <div className="flex flex-col  px-5 mt-2">
        <Skeleton variant="text" height={30} />
      </div>
      <div className="flex flex-col  px-5 mt-2">
        <Skeleton variant="text" height={30} />
      </div>
    </div>
  );
};

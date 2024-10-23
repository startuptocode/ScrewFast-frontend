const UserProfile = () => {
  return (
    <>
      <div className="relative mx-auto mb-6 mt-6 w-full min-w-0 max-w-md break-words rounded-xl shadow-lg md:max-w-2xl">
        <div className="px-6">
          <div className="flex flex-wrap justify-center">
            <div className="flex w-full justify-center">
              <div className="relative">
                <img
                  src="https://github.com/creativetimofficial/soft-ui-dashboard-tailwind/blob/main/build/assets/img/team-2.jpg?raw=true"
                  className="absolute -m-16 -ml-20 max-w-[150px] rounded-full border-none align-middle shadow-xl lg:-ml-16"
                />
              </div>
            </div>
          </div>
          <div className="mt-24 text-center">
            <h3 className="text-slate-700 mb-1 text-2xl font-bold leading-normal">
              Mike Thompson
            </h3>
            <div className="text-slate-400 mb-2 mt-0 text-xs font-bold uppercase">
              <i className="fas fa-map-marker-alt text-slate-400 mr-2 opacity-75"></i>
              555-555-555-555
            </div>
          </div>
          <div className="border-slate-200 mt-6 border-t py-6 text-center">
            <div className="flex flex-wrap justify-center">
              <div className="w-full px-4">
                <p className="text-slate-600 mb-4 font-light leading-relaxed">
                  An artist of considerable range, Mike is the name taken by
                  Melbourne-raised, Brooklyn-based Nick Murphy writes, performs
                  and records all of his own music, giving it a warm.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer className="relative mt-6 pb-2 pt-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-center md:justify-between">
            <div className="mx-auto w-full px-4 text-center md:w-6/12">
              <div className="text-slate-500 py-1 text-sm font-semibold">
                MORE DETAILS HERE lIKE NOTES, HISTORICAL CONVERSATIONS, NOTES
                FROM THE STAFF, TAGS ETC
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default UserProfile;

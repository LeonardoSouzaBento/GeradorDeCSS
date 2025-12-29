const linearGradient = 'from-start via-start to-end';

const Header = ({
  title,
  description,
  icon,
  page,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  page?: string;
}) => {
  return (
    <header
      className={`w-full mx-auto my-8 max-w-2xl px-4 sm:px-0 sm:w-[calc(100%-3rem)] text-center animate-in fade-in 
        slide-in-from-top duration-500 min-[575px]:flex gap-3.5 justify-center min-[575px]:justify-start
        xl:max-w-7xl`}>
      <div className={`flex items-center justify-center mb-2 min-[575px]:mb-0`}>
        <div
          className={`h-13.5 w-13.5 text-white/93 flex items-center justify-center
           p-2.5 mb-0.5 bg-linear-to-br ${linearGradient} rounded-xl shadow-lg`}>
          {icon}
        </div>
      </div>

      <div>
        <h1
          className={`h-auto pb-1 big-h1 bg-linear-to-r ${linearGradient} bg-clip-text text-transparent
          mb-0 capitalize min-[575px]:text-left`}>
          {title}
        </h1>
        <p
          className={`text-muted-foreground max-w-2xl
            mx-auto px-3 min-[575px]:text-left ${page === 'typography' ? 'min-[575px]:pl-1' : 'pl-[0.2ex]'} text-base`}>
          {description}
        </p>
      </div>
    </header>
  );
};

export default Header;

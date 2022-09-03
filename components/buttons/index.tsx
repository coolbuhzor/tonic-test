export const Button = (props: ButtonProps) => {
  const { className, text } = props;
  return (
    <button
      className={`transition ease-in-out delay-150 text-[1.25rem] leading-[1.75rem] px-[56px] py-[16px] font-bold font-sans border-2 rounded-[56px] hover:scale-110 duration-300 ${className}`}
    >
      {text}
    </button>
  );
};

export const H1 = (props: TextProps) => (
  <h1
    className={`font-normal font-sans text-[64px] leading-[84px] text-black ${props.className}`}
  >
    {props.children}
  </h1>
);
export const H2 = (props: TextProps) => (
  <h2
    className={`font-normal leading-[3rem] text-[2rem] lg:leading-[4.5rem] font-manrope lg:text-[3rem] text-black ${props.className}`}
  >
    {props.children}
  </h2>
);
export const H3 = (props: TextProps) => (
  <h3
    className={`font-normal    lg:leading-[3.5rem]  font-manrope  text-[1.75rem] lg:text-[2.25rem] text-black ${props.className}`}
  >
    {props.children}
  </h3>
);
export const H4 = (props: TextProps) => (
  <h4
    className={`font-normal leading-[3rem] font-manrope text-[1.75rem] text-black ${props.className}`}
  >
    {props.children}
  </h4>
);
export const Paragraph = (props: TextProps) => (
  <p
    className={`font-normal leading-[2.25rem] font-manrope text-[1.5rem] text-black ${props.className}`}
  >
    {props.children}
  </p>
);
export const TextMedium = (props: TextProps) => (
  <p
    className={`font-normal leading-[2rem] font-manrope text-[1.25rem] text-black ${props.className}`}
  >
    {props.children}
  </p>
);
export const TextSmall = (props: TextProps) => (
  <p
    className={`font-normal leading-[1.75rem] font-sans text-[1rem] text-black ${props.className}`}
  >
    {props.children}
  </p>
);

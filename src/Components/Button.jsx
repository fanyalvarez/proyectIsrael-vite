import classNames from "classnames";

export const Button = (props) => {
  const { children, color } = props;
  const button = classNames(
    "rounded-2xl",
    "px-4",
    "py-2",
    "text-base",
    // "h-2.5",
    "border-solid",
    "border",
    {
      "bg-violet-950 text-white": color === "primary",
      "bg-violet-700 text-slate-50": color === "secondary",
      "outline-violet-950 text-violet-950": color === "outline",
    }
  );

  return <button className={`${button}`}>{children}</button>;
};

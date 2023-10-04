import classNames from "classnames";

export const Typography = (props) => {
  const { Tag, children, size, weight } = props;
  // let sizeClass = ';
  // if (size === 'xl') sizeClass = 'text-3xl';

  const typography = classNames("mb-3", {
    //objeto tipos de clases que va a contener   'tw-clasname'  : 'parametro -size' === text recibido
    "text-3xl": size === "xl",
    "text-2xl": size === "lg",
    "text-xl": size === "md",
    "text-base": size === "base",
    "text-sm": size === "sm",
    "text-xs": size === "xs",
    //---weight---//
    "font-black": weight === "black",
    "font-bold": weight === "bold",
    "font-normal": weight === "normal",
    "font-light": weight === "light",
  });

  return <Tag className={`${typography}`}>{children}</Tag>;
};

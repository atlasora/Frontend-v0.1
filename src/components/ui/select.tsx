import * as React from "react";

// Very simple, temporary implementation just so the page compiles.
// We can replace this later with a proper fancy Select.

export type SelectRootProps = React.SelectHTMLAttributes<HTMLSelectElement> & {
  children: React.ReactNode;
};

export function Select(props: SelectRootProps) {
  const { children, ...rest } = props;
  return <select {...rest}>{children}</select>;
}

// These are just structural wrappers so the existing JSX doesn't break.
// They don't add behaviour yet – they just render their children.

export function SelectTrigger(
  props: React.HTMLAttributes<HTMLDivElement>
) {
  const { children, ...rest } = props;
  return <div {...rest}>{children}</div>;
}

export function SelectValue(props: {
  children?: React.ReactNode;
  placeholder?: string;
}) {
  // If no children are provided, fall back to the placeholder text.
  return <>{props.children ?? props.placeholder}</>;
}

export function SelectContent(
  props: React.HTMLAttributes<HTMLDivElement>
) {
  const { children, ...rest } = props;
  return <div {...rest}>{children}</div>;
}

export type SelectItemProps = {
  value?: string;
  children: React.ReactNode;
} & React.LiHTMLAttributes<HTMLLIElement>;

// Render as an <option> so it actually works in the <select>
export function SelectItem({ value, children, ...rest }: SelectItemProps) {
  // Type cast because <option> props differ a bit from <li>, but fine for now.
  return (
    <option value={value} {...(rest as any)}>
      {children}
    </option>
  );
}

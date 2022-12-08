import classNames from "classnames";
import styles from "./Button.module.css";
import styled from "styled-components";

// function Button({ variant, className, as, ...restProps }) {
//   if (as === 'div') {
//     return (
//       <div
//         {...restProps}
//         className={classNames(
//           styles.button,
//           variant && styles[variant],
//           className,
//         )}
//       />
//     );
//   }

//   return (
//     <button
//       {...restProps}
//       className={classNames(
//         styles.button,
//         variant && styles[variant],
//         className,
//       )}
//     />
//   );
// }
const SIZES = {
  Large: 16,
  Medium: 16,
  Small: 14,
  exSmall: 12,
};

const HEIGHTSIZES = {
  Large: 56,
  Medium: 48,
  Small: 40,
  exSmall: 32,
};

const Button = styled.button`
  background-color: var(--m-Main);
  border: none;
  border-radius: ${({ round }) => (round ? `9999px` : `4px`)};
  color: var(--white);
  font-size: ${({ size }) => SIZES[size] ?? SIZES["Small"]}px;
  font-weight: 700;
  cursor: pointer;
  padding: 0 16px;
  height: ${({ size }) => HEIGHTSIZES[size] ?? HEIGHTSIZES["Small"]}px;
  min-width: 120px;
  max-width: 400px;
  transition: all 0.3s ease;

  &:hover,
  &:active {
    background-color: var(--m-seb);
  }
`;

export default Button;

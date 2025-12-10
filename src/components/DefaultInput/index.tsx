import styles from './styles.module.css';

type DefaultInputProps = {
  id: string;
  labelText: string;
} & React.ComponentProps<'input'>;

export function DefaultInput({
  labelText,
  id,
  type,
  ...rest
}: DefaultInputProps) {
  return (
    <>
      {/* {labelText && <label htmlFor={id}>{labelText}</label>} --caso a prop nao seja obrigatoria*/}
      <label htmlFor={id}>{labelText}:</label>
      <input className={styles.inputTask} type={type} id={id} {...rest} />
    </>
  );
}

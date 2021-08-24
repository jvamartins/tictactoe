function Button(props) {
  const buttonHandleClick = () => {
    props.onClick(props.index);
  };

  return (
    <button onClick={buttonHandleClick} className="square" type="button">
      {props.value}
    </button>
  );
}

export default Button;

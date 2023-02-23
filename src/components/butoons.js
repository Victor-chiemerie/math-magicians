const Btn = ({
  id, handleClick, styled, white,
}) => (
  <button type="button" id={id} onClick={handleClick} className={(styled || white)}>{id}</button>
);

export default Btn;

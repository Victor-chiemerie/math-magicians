const Btn = ({ id, handleClick, styled }) => (
  <button type="button" id={id} onClick={handleClick} className={styled}>{id}</button>
);

export default Btn;

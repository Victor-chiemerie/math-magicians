import PropTypes from 'prop-types';

const Buttons = ({ handleClick }) => (
  <div className="work">
    <button type="button" id="AC" onClick={handleClick}>
      AC
    </button>
    <button type="button" id="+/-" onClick={handleClick}>
      +/-
    </button>
    <button type="button" id="%" onClick={handleClick}>
      %
    </button>
    <button type="button" id="÷" className="function" onClick={handleClick}>
      ÷
    </button>
    <button type="button" id="7" onClick={handleClick}>
      7
    </button>
    <button type="button" id="8" onClick={handleClick}>
      8
    </button>
    <button type="button" id="9" onClick={handleClick}>
      9
    </button>
    <button type="button" id="x" className="function" onClick={handleClick}>
      x
    </button>
    <button type="button" id="4" onClick={handleClick}>
      4
    </button>
    <button type="button" id="5" onClick={handleClick}>
      5
    </button>
    <button type="button" id="6" onClick={handleClick}>
      6
    </button>
    <button type="button" id="-" className="function" onClick={handleClick}>
      -
    </button>
    <button type="button" id="1" onClick={handleClick}>
      1
    </button>
    <button type="button" id="2" onClick={handleClick}>
      2
    </button>
    <button type="button" id="3" onClick={handleClick}>
      3
    </button>
    <button type="button" id="+" className="function" onClick={handleClick}>
      +
    </button>
    <button type="button" id="0" className="zero" onClick={handleClick}>
      0
    </button>
    <button type="button" id="." onClick={handleClick}>
      .
    </button>
    <button type="button" id="=" className="function" onClick={handleClick}>
      =
    </button>
  </div>
);

Buttons.propTypes = { handleClick: PropTypes.func.isRequired };

export default Buttons;

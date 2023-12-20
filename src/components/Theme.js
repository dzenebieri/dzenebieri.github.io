import PropTypes from 'prop-types';
import useTheme from '../hooks/useTheme';

function Theme({ children }) {
  const { theme } = useTheme();

  return (
    <div id='theme' data-theme={theme}>
      {children}
    </div>
  );
}

Theme.propTypes = { children: PropTypes.node.isRequired };

export default Theme;

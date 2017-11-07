import PropTypes from 'prop-types';

export default {
  connect(component) {
    component.childContextTypes = {
      dispatch: PropTypes.func,
    };

    component.prototype.getChildContext = function getChildContext() {
      return { dispatch: this.dispatch };
    };

    return component;
  },
};

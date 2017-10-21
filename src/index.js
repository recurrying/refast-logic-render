import { Component } from 'refast';
import PropTypes from 'prop-types';
import LogicRender from './lib/LogicRender';

const originGetChildContext = Component.prototype.getChildContext;

Component.prototype.getChildContext = function getChildContext() {
  return {
    ...originGetChildContext(),
    dispatch: this.dispatch,
  };
};

const originChildContextTypes = Component.childContextTypes;

Component.childContextTypes = {
  ...originChildContextTypes,
  dispatch: PropTypes.func,
};

export default {
  LogicRender,
};

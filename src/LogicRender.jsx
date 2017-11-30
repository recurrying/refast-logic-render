import React from 'react';
import { PropTypes } from 'prop-types';
import isEqual from 'lodash.isequal';

export default class LogicRender extends React.Component {

  static propTypes = {
    action: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.arrayOf(PropTypes.string),
    ]),
    awareOf: PropTypes.object,
    isEmpty: PropTypes.bool,
    isLoading: PropTypes.bool,
    isShow: PropTypes.bool,
    className: PropTypes.string,
    Loading: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.element,
      PropTypes.func,
    ]),
    Empty: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.element,
      PropTypes.func,
    ]),
    children: PropTypes.any,
  }

  static defaultProps = {
    action: null,
    awareOf: {},
    isEmpty: false,
    isLoading: false,
    isShow: true,
    children: null,
    Loading: 'div',
    Empty: 'div',
  }

  static contextTypes = {
    dispatch: PropTypes.func,
  }
  componentDidMount() {
    this.dispatchAction();
  }

  componentWillReceiveProps(nextProps) {
    const { awareOf, action } = nextProps;
    if (!isEqual(action, this.props.action) || !isEqual(awareOf, this.props.awareOf)) {
      this.dispatchAction(nextProps);
    }
  }

  dispatchAction(props) {
    const { dispatch } = this.context;
    const { action, awareOf } = props || this.props;
    if (action) {
      dispatch(action, awareOf);
    }
  }

  render() {
    let content = null;
    const {
      isShow,
      isLoading,
      isEmpty,
      children,
      className,
      Loading,
      Empty,
    } = this.props;
    const cls = className || '';

    if (!isShow) {
      content = <div />;
    } else if (isLoading) {
      content = (
        <Loading
          {...this.props}
          className={`${cls} refast-loading`}
        />
      );
    } else if (isEmpty) {
      content = (
        <Empty
          {...this.props}
          className={`${cls} refast-empty`}
        />
      );
    } else {
      content = <div className={cls}>{children}</div>;
    }

    return content;
  }
}

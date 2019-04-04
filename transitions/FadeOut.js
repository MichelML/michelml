import React from "react";
import { Transition } from "react-transition-group";

const duration = 500;

const defaultStyle = {
  transition: `opacity ${duration}ms ease-in-out`,
  opacity: 1
};

const transitionStyles = {
  entering: { opacity: 1 },
  exiting: { opacity: 0 }
};

export default class FadeOut extends React.Component {
  render() {
    const { in: inProp } = this.props;
    return (
      <Transition in={inProp} timeout={duration} unmountOnExit>
        {state => (
          <div
            style={{
              ...defaultStyle,
              ...transitionStyles[state]
            }}
          >
            {this.props.children}
          </div>
        )}
      </Transition>
    );
  }
}

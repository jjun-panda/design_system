import classNames from 'classnames';
import styles from './Button.module.css';
import styled from 'styled-components'

function Radio({ children, value, name, defaultChecked, disabled }) {
    return (
      <label>
        <input
          type="radio"
          value={value}
          name={name}
          defaultChecked={defaultChecked}
          disabled={disabled}
        />
        {children}
      </label>
    );
  }
import React from 'react'
import './input.scss'

class Input extends React.Component {
  render() {
    const {
      className,
      placeholder,
      value,
      type,
      onChange = _ => _,
      input,
    } = this.props

    const elemClass = `input ${className}`
    return (
      <input
        className={elemClass}
        placeholder={placeholder}
        value={value}
        type={type}
        onChange={onChange}
        {...input}
      />
    )
  }
}
export default Input

export const InputField = (props) => {
  const {
    label,
    type,
    input,
    meta,
    meta: {
      touched,
      pristine,
      error,
      warning,
    },
    children,
  } = props
  const helpMessage = (!pristine || touched) ? (error || warning) : ''
  const colorClass = (!pristine || touched) ? (error ? 'is-danger' : warning ? 'is-warning' : 'is-success') : ''
  return (
    <div className="field">
      <p>{meta.touched}</p>
      <label htmlFor={label} className="label">{label}</label>
      <p className="control has-icons-left has-icons-right">
        <Input input={input} placeholder={label} type={type} className={colorClass} />
        {children}
      </p>
      <p className={`help ${colorClass}`}>
        {helpMessage}
      </p>
    </div>
  )
}

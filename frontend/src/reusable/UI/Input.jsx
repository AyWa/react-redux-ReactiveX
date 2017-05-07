import React from 'react'
import './input.scss'

class Input extends React.Component {
  render() {
    const {
      className,
      placeholder,
      value,
      onChange = _ => _,
    } = this.props
    const elemClass = `input ${className}`
    console.log(this.props);
    return (
      <input
        className={elemClass}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    )
  }
}
export default Input

export const InputField = (props) => {
  const {
    label,
  } = props
  return (
    <div className="field">
      <label htmlFor={label} className="label">{label}</label>
      <p className="control has-icons-left has-icons-right">
        <Input {...props} />
        <span className="icon is-small is-left">
          <i className="fa fa-user" />
        </span>
        <span className="icon is-small is-right">
          <i className="fa fa-check" />
        </span>
      </p>
      <p className="help is-success">This username is available</p>
    </div>
  )
}

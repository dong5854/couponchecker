interface TextInputProps {
  placeHolder?: string
  topLeftLabel?: string
  topRightLabel?: string
  btmLeftLabel?: string
  btmRightLabel?: string
  onTextChange: (text: string) => void
}

const TextInput: React.FC<TextInputProps> = (TextInputProps) => {
  const sendTextToParent = (e: React.ChangeEvent<HTMLInputElement>) => {
    TextInputProps.onTextChange(e.target.value)
  }

  return (
    <label className="form-control mx-auto w-full max-w-xs">
      <div className="label">
        <span className="label-text">{TextInputProps.topLeftLabel}</span>
        <span className="label-text-alt">{TextInputProps.topRightLabel}</span>
      </div>
      <input
        type="text"
        placeholder={TextInputProps.placeHolder}
        onChange={sendTextToParent}
        className="input input-bordered w-full max-w-xs"
      />
      <div className="label">
        <span className="label-text-alt">{TextInputProps.btmLeftLabel}</span>
        <span className="label-text-alt">{TextInputProps.btmRightLabel}</span>
      </div>
    </label>
  )
}

export default TextInput

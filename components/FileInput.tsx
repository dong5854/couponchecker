interface FileInputProps {
  placeHolder?: string
  topLeftLabel?: string
  topRightLabel?: string
  btmLeftLabel?: string
  btmRightLabel?: string
  onFileChange: (fileData: File) => void
}

const FileInput: React.FC<FileInputProps> = (FileInputProps) => {
  const sendFileToParent = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files ? e.target.files[0] : null
    FileInputProps.onFileChange(selectedFile)
  }
  return (
    <label className="form-control mx-auto w-full max-w-xs">
      <div className="label">
        <span className="label-text">{FileInputProps.topLeftLabel}</span>
        <span className="label-text-alt">{FileInputProps.topRightLabel}</span>
      </div>
      <input
        type="file"
        onChange={sendFileToParent}
        className="file-input file-input-bordered w-full max-w-xs"
      />
      <div className="label">
        <span className="label-text-alt">{FileInputProps.btmLeftLabel}</span>
        <span className="label-text-alt">{FileInputProps.btmRightLabel}</span>
      </div>
    </label>
  )
}

export default FileInput

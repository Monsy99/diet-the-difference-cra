interface IFileList {
  list: FileList | null;
}

export const FileList: React.FC<IFileList> = ({ list }) => {
  return list?.length ? (
    <ul style={{ listStyleType: "none", padding: "0" }}>
      {Array.from(list).map((item) => {
        return (
          <li
            key={`${item.lastModified}${item.name}`}
            style={{ color: "white" }}
          >
            {item.name}
          </li>
        );
      })}
    </ul>
  ) : null;
};

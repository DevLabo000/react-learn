export const ElsxDownload = () => {
  //const [startFetch, setStartFetch] = useState(false);
  //const { data } = useFetchData();

  const exeleFactory = () => {
    //excelCreate(data);
  };

  return (
    <>
      <input type="button" value="ExcelDownload" onClick={() => exeleFactory()} />
    </>
  );
};

export default ElsxDownload;

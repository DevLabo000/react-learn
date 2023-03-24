import ExcelJS from "exceljs";
import { useFetchData } from "./hook/useFetchData";

const excelCreate = async (data: any) => {
  // workbookを作成
  const workbook = new ExcelJS.Workbook();
  // worksheetを追加
  workbook.addWorksheet("シート名");
  // worksheetを取得
  const worksheet = workbook.getWorksheet("シート名");
  // 各列のヘッダー
  worksheet.columns = [
    { header: "ID", key: "id" },
    { header: "タイトル", key: "title" },
    { header: "誰", key: "author" },
  ];

  // 各行のデータ（worksheet.columnsのkeyがオブジェクトのキーと同じになる）
  worksheet.addRows(data);
  // xlsxの場合
  const excel = await workbook.xlsx.writeBuffer();

  const blob = new Blob([excel], { type: "application/octet-binary" });
  const a = document.createElement("a");
  a.href = (window.URL || window.webkitURL).createObjectURL(blob);
  a.download = `output.xlsx`;
  a.click();
  a.remove();
};

export const ExceljsDownload = () => {
  //const [startFetch, setStartFetch] = useState(false);
  const { data } = useFetchData();

  const exeleFactory = () => {
    excelCreate(data);
  };

  return (
    <>
      <input type="button" value="ExcelDownload" onClick={() => exeleFactory()} />
    </>
  );
};

export default ExceljsDownload;

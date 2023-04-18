import ExcelJS from "exceljs";
import { useFetchData } from "./hook/useFetchData";

export type PropsType = {
  items: {
    headers: [
      {
        header: string;
        key: string;
      }
    ];
    body: [
      {
        id: number;
        title: string;
        author: string;
      }
    ];
  };
};

const excelCreate = async (data: PropsType) => {
  // workbookを作成
  const workbook = new ExcelJS.Workbook();
  // worksheetを追加
  workbook.addWorksheet("シート名");
  // worksheetを取得
  const worksheet = workbook.getWorksheet("シート名");
  // 各列のヘッダー
  worksheet.columns = data.items.headers;
  // 各行のデータ（worksheet.columnsのkeyがオブジェクトのキーと同じになる）
  worksheet.addRows(data.items.body);
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

  console.log(data);
  const exeleFactory = () => {
    if (data) {
      excelCreate(data);
    }
  };

  return (
    <>
      <input type="button" value="ExcelDownload" onClick={() => exeleFactory()} />
    </>
  );
};

export default ExceljsDownload;

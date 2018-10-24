<!DOCTYPE html>
<html>
  <head>
    <script src="http://apps.bdimg.com/libs/jquery/2.1.4/jquery.min.js"></script>
  </head>
  <body>
    <table>
      <tr>
        <td colspan=10>excel->文件->另存为->csv文件</td>
      </tr>
      <tr>
        <td colspan=10>第一行 类别名</td>
      </tr>
      <tr>
        <td colspan=10>第二行+ 评论内容</td>
      </tr>
    </table>
    <form action='/New/ImportData/csvImport' enctype='multipart/form-data' method='post'>
    请选择导入文件<input type='file' name='csv_file' />
      <button type='submit'>导入</button>
    </form>
  </body>
</html>
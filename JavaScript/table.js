function TableStart() {
    clearTable();
    var isAllDone = false;
    /* Get data values from inputs */
    var row1 = document.getElementById('row1').value;
    var row2 = document.getElementById('row2').value;
    var col1 = document.getElementById('col1').value;
    var col2 = document.getElementById('col2').value;


    if (!row1 || Number(row1) < -50) {
        console.log("Invalid Input! Number must not be less then -50");
        isAllDone = true;
    }
    if (!row2 || Number(row2) > 50) {
        console.log("Invalid Input! Number must not be larger then 50");
        isAllDone = true;
    }
    if (!col1 || Number(col1) < -50) {
        console.log("Invalid Input! Number must not be less then -50");
        isAllDone = true;
    }
    if (!col2 || Number(col2) > 50) {
        console.log("Invalid Input! Number must not be larger then 50");
        isAllDone = true;
    }

    /* check if start number greater than end
       check number is negative */
    if ((Number(row1) > Number(row2)) && (Number(row1) >= 0)) {
        console.log("Invalid Input!, Ending number must be bigger then starting number");
        isAllDone = true;
    }

    /* check if start number greater than end
       check number is negative */
    if ((Number(col1) > Number(col2)) && (Number(col1) >= 0)) {
        console.log("Invalid Input!,Ending number must be bigger then starting number ");
        isAllDone = true;
    }

    if (isAllDone) return;
    let rowlength = row2 - row1 + 1;
    let collength = col2 - col1 + 1;
    

    const createTable = (rowlength, collength, row1, col1) => {
        let tableHTML = "<table>";
      
        // Add table header line to HTML
        tableHTML += "<tr><th></th>";
        for (let i = 0; i < rowlength; i++) {
          let num = Number(row1) + i;
          tableHTML += `<th>${num}</th>`;
        }
        tableHTML += "</tr>";
      
        // Add table data to HTML
        for (let i = 0; i < collength; i++) {
          let colnum = Number(col1) + i;
          tableHTML += "<tr>";
          for (let j = 0; j < rowlength + 1; j++) {
            tableHTML += "<td>";
            if (j === 0) {
              tableHTML += colnum;
            } else {
              let rownum = Number(row1) + j - 1;
              let num = colnum * rownum;
              tableHTML += num;
            }
            tableHTML += "</td>";
          }
          tableHTML += "</tr>";
        }
        
        tableHTML += "</table>";
        return tableHTML;
      };
      
      const tableFormat = createTable(rowlength, collength, row1, col1);
      document.getElementById("table").innerHTML = tableFormat;      
}

function clearTable() {
    document.getElementById('table').innerHTML = '';
}
/**
 * Created by rebeccawolf on 7/26/16.
 */
//
// This now powers the new version of the Settings Modal using Bootstrap
//
// ***********************************************************************
//

function drawValveTable(data) {
    // $("#ValveTable td").remove();
    $("#ValveTable").find("tr:gt(0)").remove();
    for (var i = 0; i < data.length; i++) {
        drawValveRow(data[i]);
    }
}

function drawValveRow(rowData) {
    var row = $("<tr class='tempData' />")
    $("#ValveTable").append(row); //this will append tr element to table... keep its reference for a while since we will add cels into it
    row.append($("<td>" + rowData.id + "</td>"));
    row.append($("<td>" + rowData.HW_shield + "</td>"));
    row.append($("<td>" + rowData.HW_pin + "</td>"));
    row.append($("<td contenteditable='true'>" + rowData.Open_State + "</td>"));
    row.append($("<td contenteditable='true'>" + rowData.Closed_State + "</td>"));
    row.append($("<td>" + rowData.Current_State + "</td>"));
}


// A few jQuery helpers for exporting only
jQuery.fn.pop = [].pop;
jQuery.fn.shift = [].shift;

function exporting() {
    var $rows = $('#ValveTable').find('tr:not(:hidden):not(:empty)');
    var keys = ["id", "HW_shield", "HW_pin", "Open_State", "Closed_State", "Current_State"];
    var data = [];
    var x = 0; // making sure we are not counting the headers row here
    // Turn all existing rows into a loopable array
    $rows.each(function () {
        if(x > 0){
            var $td = $(this).find('td');
            var h = {};
            // Use pre-defined Hash keys
            keys.forEach(function (header, i) {
                if(header === "Current_State"){
                    h[header] = $td.eq(i).text();
                }
                else{
                    h[header] = parseInt($td.eq(i).text());
                }

            });
            data.push(h);
        }
        x = x + 1;


    });

    // Output the result
    console.log(JSON.parse(JSON.stringify(data)));
    localStorage.pumpData = JSON.stringify(data);
};













function drawDispenserTable(data) {
    // $("#ValveTable td").remove();
    $("#DispenserTable").find("tr:gt(0)").remove();
    for (var i = 0; i < data.length; i++) {
        drawDispRow(data[i]);
    }
}

function drawDispRow(rowData) {
    var row = $("<tr class='tempData' />")
    $("#DispenserTable").append(row); //this will append tr element to table... keep its reference for a while since we will add cels into it
    row.append($("<td>" + rowData.id + "</td>"));
    row.append($("<td>" + rowData.HW_shield + "</td>"));
    row.append($("<td>" + rowData.HW_pin + "</td>"));
    row.append($("<td contenteditable='true'>" + rowData.Precision + "</td>"));
    row.append($("<td contenteditable='true'>" + rowData.Min + "</td>"));
    row.append($("<td contenteditable='true'>" + rowData.Max + "</td>"));
    row.append($("<td contenteditable='true'>" + rowData.Current_State + "</td>"));
}

function exportingDispenser() {
    var $rows = $('#DispenserTable').find('tr:not(:hidden):not(:empty)');
    var keys = ["id", "HW_shield", "HW_pin", "Precision", "Min", "Max", "Current_State"];
    var data = [];
    var x = 0; // making sure we are not counting the headers row here
    // Turn all existing rows into a loopable array
    $rows.each(function () {
        if(x > 0){
            var $td = $(this).find('td');
            var h = {};
            // Use pre-defined Hash keys
            keys.forEach(function (header, i) {
                h[header] = parseInt($td.eq(i).text());
            });
            data.push(h);
        }
        x = x + 1;
    });

    // Output the result
    console.log(JSON.parse(JSON.stringify(data)));
    localStorage.dispenserData = JSON.stringify(data);
};
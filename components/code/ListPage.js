
const ListPage = (tbl, fld) => {

    const titleCase = (str) => {
        return str
            .split(' ')
            .map((word) => word[0].toUpperCase() + word.slice(1).toLowerCase())
            .join(' ');
    }

    const clearHandler = (str) => {
        var x1 = str.replace(/`/g, "");
        return x1;
    }


    var clear_fld = clearHandler(fld);
    var split_fld = clear_fld.split(',');

    let str = "";
    str = str + 'import React from "react";\n';
    str = str + 'import { Container, Row, Col, Table } from "react-bootstrap";\n';
    str = str + 'import ' + titleCase(tbl) + 'Edit from "./' + titleCase(tbl) + 'Edit";\n';
    str = str + 'import ' + titleCase(tbl) + 'Delete from "./' + titleCase(tbl) + 'Delete";\n';
    str = str + '\n';
    str = str + '\n';





    str = str + 'const ' + titleCase(tbl) + 'List = (props) => {\n';
    str = str + 'const ' + tbl + 's = props.Data;\n';
    str = str + 'const Message = props.ListMsg;\n';
    str = str + '\n';
    str = str + 'const getMsgHandler = (data) => {\n';
    str = str + 'Message(data);\n';
    str = str + '}\n';
    str = str + '\n';

    str = str + 'return (\n';
    str = str + '<Container fluid>\n';
    str = str + '<Row>\n';
    str = str + '<Col>\n';

    str = str + '<Table striped bordered hover responsive>\n';
    str = str + '<thead className="table-secondary">\n';
    str = str + '<tr>\n';

    let x = "";
    for (let i = 0; i < split_fld.length; i++) {
        if (i != 0) {
            x = x + '<th scope="col">' + titleCase(split_fld[i].trim()) + '</th>\n';
        }
    }
    str = str + x;
    str = str + '<th scope="col" className="text-center"> Actions</th>\n';
    str = str + '</tr>\n';
    str = str + '</thead>\n';
    str = str + '<tbody>\n';
    str = str + '{\n';

    str = str + tbl + 's.length ? ' + tbl + 's.map((' + tbl + ') =>{\n';
    str = str + 'return (\n';
    str = str + '<tr key={' + tbl + '.id}>\n';
    x = "";
    for (let i = 0; i < split_fld.length; i++) {
        if (i != 0) {
            x = x + '<td>{' + tbl + '.' + split_fld[i].trim() + '}</td>\n';
        }
    }
    str = str + x;
    str = str + '<td style={{ width: "150px", textAlign: "right" }}>\n';
    str = str + '<' + titleCase(tbl) + 'Edit EditMsg={getMsgHandler} Id={' + tbl + '.id} />\n';
    str = str + '<' + titleCase(tbl) + 'Delete DeleteMsg={getMsgHandler} Id={' + tbl + '.id} />\n';

    str = str + '</td>\n';
    str = str + '</tr>\n';
    str = str + ')\n';
    str = str + '})\n';
    str = str + ': null\n';
    str = str + '}\n';
    str = str + '</tbody>\n';
    str = str + '</Table>\n';
    str = str + '</Col>\n';
    str = str + '</Row>\n';
    str = str + '</Container>\n';
    str = str + ');\n';
    str = str + '\n';
    str = str + '};\n';

    str = str + 'export default ' + titleCase(tbl) + 'List;\n';

    return str;
}


export default ListPage;

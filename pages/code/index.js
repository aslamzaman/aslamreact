import React, { useState } from "react";
import server from '../../components/code/ServerString';
import router from '../../components/code/RouteString';
import routerMysql from '../../components/code/RouteMysql';
import modelstr from "../../components/code/ModelString";
import singlePage from "../../components/code/singlePage";
import singlePageMysql from "../../components/code/singlePageMysql";

import IndexPage from "../../components/code/IndexPage";
import AddPage from "../../components/code/AddPage";
import EditPage from "../../components/code/EditPage";
import ListPage from "../../components/code/ListPage";
import DeletePage from "../../components/code/DeletePage";
//------------------------ Local ---------------------------
import LocalIndex from "../../components/code/LocalIndex";
import LocalAdd from "../../components/code/LocalAdd";
import LocalEdit from "../../components/code/LocalEdit";
import LocalDelete from "../../components/code/LocalDelete";
import LocalPrint from "../../components/code/LocalPrint";
import LocalUpload from "../../components/code/LocalUpload";
import LocalDownload from "../../components/code/LocalDownload";

import { Container, Row, Col, Button, Form } from "react-bootstrap";
import Header from "../../components/layout/Header";


const CodeIndex = () => {
  const [tbl, setTbl] = useState("product");
  const [fld, setFld] = useState("id,name,rate,dt");
  const [result, setResult] = useState("");
  const [fileName, setFileName] = useState("");


  const titleCase = (str) => {
    let st = "";
    if (tbl === "") {
      st = "/";
    } else {
      st = str;
    }
    return st
      .split(' ')
      .map((word) => word[0].toUpperCase() + word.slice(1).toLowerCase())
      .join(' ');
  }


  const ResultServerHandler = () => {
    setResult(server(tbl, fld));
    setFileName('index.js');
  };

  const ResultRouterHandler = () => {
    setResult(router(tbl, fld));
    setFileName(titleCase(tbl) + 'Route.js');
  };

  const ResultRouterMysqlHandler = () => {
    const regex = /`/g;
    setResult(routerMysql(tbl, fld.replace(regex, "")));
    setFileName(titleCase(tbl) + 'Route.js');
  };


  const ResultModelHandler = () => {
    setResult(modelstr(tbl, fld));
    setFileName(titleCase(tbl) + 'Model.js');
  }

  const ResultSingleHandler = () => {
    const regex = /`/g;
    setResult(singlePage(tbl, fld.replace(regex, "")));
    setFileName(titleCase(tbl) + 'Page.js');
  }

  const ResultSingleMysqlHandler = () => {
    const regex = /`/g;
    // setResult(str.replace(regex, ""));

    setResult(singlePageMysql(tbl, fld.replace(regex, "")));
    setFileName(titleCase(tbl) + 'Page.js');
  }

  //-------------------------------------------------------
  const ResultIndexHandler = () => {
    const regex = /`/g;
    setResult(IndexPage(tbl, fld.replace(regex, "")));
    setFileName(tbl + '/index.js');
  }

  const ResultAddHandler = () => {
    const regex = /`/g;
    setResult(AddPage(tbl, fld.replace(regex, "")));
    setFileName(titleCase(tbl) + 'Add.js');
  }


  const ResultEditHandler = () => {
    const regex = /`/g;
    setResult(EditPage(tbl, fld.replace(regex, "")));
    setFileName(titleCase(tbl) + 'Edit.js');
  }

  const ResultListHandler = () => {
    const regex = /`/g;
    setResult(ListPage(tbl, fld.replace(regex, "")));
    setFileName(titleCase(tbl) + 'List.js');
  }

  const ResultDeleteHandler = () => {
    const regex = /`/g;
    setResult(DeletePage(tbl, fld.replace(regex, "")));
    setFileName(titleCase(tbl) + 'Delete.js');
  }
  //---------------------------------------------------------------

  const LocalIndexHandler = () => {
    const regex = /`/g;
    setResult(LocalIndex(tbl, fld.replace(regex, "")));
    setFileName('index.js');
  }

  const LocalAddHandler = () => {
    const regex = /`/g;
    setResult(LocalAdd(tbl, fld.replace(regex, "")));
    setFileName(titleCase(tbl) + 'Add.js');
  }

  const LocalEditHandler = () => {
    const regex = /`/g;
    setResult(LocalEdit(tbl, fld.replace(regex, "")));
    setFileName(titleCase(tbl) + 'Edit.js');
  }

  const LocalDeleteHandler = () => {
    const regex = /`/g;
    setResult(LocalDelete(tbl, fld.replace(regex, "")));
    setFileName(titleCase(tbl) + 'Delete.js');
  }

  const LocalPrintHandler = () => {
    const regex = /`/g;
    setResult(LocalPrint(tbl, fld.replace(regex, "")));
    setFileName(titleCase(tbl) + 'Print.js');
  }

  const LocalDownloadHandler = () => {
    const regex = /`/g;
    setResult(LocalDownload(tbl, fld.replace(regex, "")));
    setFileName(titleCase(tbl) + 'Download.js');
  }

  const LocalUploadHandler = () => {
    const regex = /`/g;
    setResult(LocalUpload(tbl, fld.replace(regex, "")));
    setFileName(titleCase(tbl) + 'Upload.js');
  }

  return (
    <div>
      <Header Title="Code" />
      <Container fluid>
        <Row>
          <Col xs={12} lg={5}>
            <Form className="mb-3">
              <Form.Group>
                <Form.Label>Table Name</Form.Label>
                <Form.Control type="text" onChange={(e) => { setTbl(e.target.value); }} value={tbl} />
              </Form.Group>
              <Form.Group>
                <Form.Label>Fields</Form.Label>
                <Form.Control type="text" onChange={(e) => { setFld(e.target.value); }} value={fld} />
              </Form.Group>
            </Form>
            <Row>
              <Col className="text-center">
                <hr />
                <p>Mongodb</p>
                <Button variant="primary me-1" onClick={ResultSingleHandler}>Page</Button>
                <Button variant="secondary me-1" onClick={ResultServerHandler}>Server</Button>
                <Button variant="info me-1" onClick={ResultRouterHandler}>Router</Button>
                <Button variant="success" onClick={ResultModelHandler}>Model</Button>

              </Col>
            </Row>
            <Row>
              <Col className="text-center">
                <hr />
                <p>MySql</p>
                <Button variant="primary me-1" onClick={ResultSingleMysqlHandler}>OnePage</Button>
                <Button variant="info me-1" onClick={ResultRouterMysqlHandler}>MySqlRouter</Button>
                <Button variant="secondary me-2" onClick={() => { setResult(Date.now()); setFileName('Unique Name'); }}>Unique</Button>
                <Button variant="danger" onClick={() => { setResult("0858301~0858500,0917101~0917200,0930701~0930800,0963401~0963500"); setFileName('Prizebond'); }}>Prizebond</Button>
              </Col>

            </Row>

            <Row>
              <Col className="text-center">
                <hr />
                <p>MySql</p>
                <Button variant="primary me-1" onClick={ResultIndexHandler}>IndexPage</Button>
                <Button variant="info me-1" onClick={ResultAddHandler}>AddPage</Button>
                <Button variant="primary me-1" onClick={ResultDeleteHandler}>DeletePage</Button>
                <Button variant="secondary me-1" onClick={ResultEditHandler}>EditPage</Button>
                <Button variant="danger me-1" onClick={ResultListHandler}>ListPage</Button>

              </Col>
            </Row>

            <Row>
              <Col className="text-center">
                <hr />
                <p>Local</p>
                <Button onClick={LocalIndexHandler} variant="primary me-1">Index</Button>
                <Button onClick={LocalAddHandler} variant="info me-1">Add</Button>
                <Button onClick={LocalDeleteHandler} variant="primary me-1">Delete</Button>
                <Button onClick={LocalEditHandler} variant="secondary me-1">Edit</Button>
                <Button onClick={LocalPrintHandler} variant="warning">Print</Button>
                <Button onClick={LocalDownloadHandler} variant="danger me-1">Download</Button>
                <Button onClick={LocalUploadHandler} variant="dark">Upload</Button>

              </Col>
            </Row>



          </Col>


          <Col xs={12} lg={7}>
            <Form.Group>
              <Form.Label>{fileName}</Form.Label>
              <textarea onChange={(e) => { setResult(e.target.value); }} className="form-control" rows="20" value={result}></textarea>
            </Form.Group>
          </Col>
        </Row>
      </Container>

    </div>
  )
}

export default CodeIndex

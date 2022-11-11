import React, { useState } from "react";
import { Container, Row, Col, Table, Button, Modal, Image } from "react-bootstrap";
import { asLib } from "../../util/asLib";


const HondaDetail = (props) => {
  const [hondaOne, setHondaOne] = useState([]);
  const [hondaLoc, setHondaLoc] = useState([]);
  const [pics, setPics] = useState([]);
  const [dataIndex, setDataIndex] = useState("");


  const [mainModalShow, setMainModalShow] = useState(false);
  let registration = props.Registration;


  const modalCloseHandaler = () => {
    Message("Data ready");
    setMainModalShow(false);

  }


  const detailHandler = () => {
    let allHonda = asLib.cmes.honda;
    for(let i = 0; i < allHonda.length;i++){

      if(allHonda[i].registration === registration){
        setDataIndex(i);
        setHondaOne(allHonda[i]);
        setHondaLoc(allHonda[i].location);

        let p = allHonda[i].location;



        let x = [];
        for (let i = 0; i < p.length; i++) {
          let pic = p[i].doc_pic_link;
          if (pic) {
            let s = pic.split(",");
            for(let j=0; j < s.length;j++){
              x.push(s[j].trim());
            }
          }
        }
        setPics(x);




      }

    }
    
    



    setMainModalShow(true);
  }


  const detailHandler1 = () => {
    let allHonda = asLib.cmes.honda;
    const getOne = allHonda.filter((t) => t.registration === registration);
    setHondaOne(getOne[0]);
    setHondaLoc(getOne[0].location);


    let p = getOne[0].location;
    console.log(p);

    let x = [];
    for (let i = 0; i < p.length; i++) {
      let pic = p[i].doc_pic_link;
      if (pic) {
        let s = pic.split(",");
        for(let j=0; j < s.length;j++){
          x.push(s[j].trim());
        }
      }
    }
    setPics(x);
    console.log(x);
    setMainModalShow(true);
  }


  const editHandler = (mi, ni)=>{
    console.log(mi, ni);
  }



  const downLoad = (lnk)=>{
    window.open(lnk,'_blank');
  }

  return (
    <>
      <Modal size="lg" show={mainModalShow} onHide={() => { setMainModalShow(false); }}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Existing Post</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Unit: {hondaOne.unit}</h4>
          <p>
            Project: {hondaOne.project}<br />
            Registration: {hondaOne.registration}<br />
            Chassis: {hondaOne.chassis}<br />
            Engine: {hondaOne.engine}<br />
            CC: {hondaOne.cc}<br />
            Seat: {hondaOne.seat}<br />
            Made year: {hondaOne.made_year}<br />
            Company: {hondaOne.company}<br />
          </p>

          <hr />
          <h4>Movement Detail</h4>
          <Table bordered hover>
            <thead>
              <tr>
                <th>SL</th>
                <th>Date</th>
                <th>Name</th>
                <th>Location</th>
                <th>Project</th>
              </tr>
            </thead>
            <tbody>
              {
                hondaLoc.length ? hondaLoc.map((o, i) => {
                  return (
                    <tr key={i}>
                      <td>{i + 1}</td>
                      <td>{o.dt}</td>
                      <td>{o.name}</td>
                      <td>{o.location}</td>
                      <td>{o.project}</td>
                    </tr>
                  )
                }) : null
              }
            </tbody>
          </Table>


          <Container>
            <Row>
              {
                pics.length ? pics.map((p, i) => {
                  return (
                    <Col xs={6} key={i}>
                      <Image thumbnail style={{cursor:"pointer"}} onClick={()=>{downLoad(p)}} src={p} alt="doc"  />
                    </Col>
                  )
                }) : null
              }
            </Row>
          </Container>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => { setMainModalShow(false); }}>Close</Button>
          <Button variant="primary">Save Changes</Button>
        </Modal.Footer>
      </Modal>
      <Button variant="secondary" onClick={detailHandler}>Detail</Button>
    </>
  );

};
export default HondaDetail;

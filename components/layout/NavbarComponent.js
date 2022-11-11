import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";
import { DropdownSubmenu, NavDropdownMenu } from "react-bootstrap-submenu";
import Link from 'next/link';


const NavbarComponent = () => {


  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Link href="/" passHref><Navbar.Brand>Aslam Zaman</Navbar.Brand></Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link href="/converter" passHref><Nav.Link>Converter</Nav.Link></Link>
            <NavDropdown title="Construction" id="basic-nav-dropdown">
              <Link href="/construction/brickflatsolling" passHref><NavDropdown.Item>Brick Flat Solling</NavDropdown.Item></Link>
              <NavDropdown.Divider />
              <Link href="/construction/brickwork" passHref><NavDropdown.Item>Brick Works</NavDropdown.Item></Link>
              <NavDropdown.Divider />
              <Link href="/construction/ccwork" passHref><NavDropdown.Item>CC Works</NavDropdown.Item></Link>
              <NavDropdown.Divider />
              <Link href="/construction/plasterworks" passHref><NavDropdown.Item>Plaster Works</NavDropdown.Item></Link>
              <NavDropdown.Divider />
              <Link href="/construction/rccwork" passHref><NavDropdown.Item>RCC Works</NavDropdown.Item></Link>
              <NavDropdown.Divider />
              <Link href="/property" passHref><NavDropdown.Item>Property</NavDropdown.Item></Link>
            </NavDropdown>

            <NavDropdown title="Weight" id="basic-nav-dropdown">
              <Link href="/weight/anglebar" passHref><NavDropdown.Item>Angle Bar Weigth</NavDropdown.Item></Link>
              <NavDropdown.Divider />
              <Link href="/weight/flatbar" passHref><NavDropdown.Item>Flat Bar Weight</NavDropdown.Item></Link>
              <NavDropdown.Divider />
              <Link href="/weight/rod" passHref><NavDropdown.Item>Rod Weight</NavDropdown.Item></Link>
            </NavDropdown>

            <NavDropdown title="CMES" id="basic-nav-dropdown">
              <Link href="/rent" passHref><NavDropdown.Item>House Rent</NavDropdown.Item></Link>
              <NavDropdown.Divider />
              <Link href="/staff/sc" passHref><NavDropdown.Item>Staff SC</NavDropdown.Item></Link>
              <NavDropdown.Divider />
              <Link href="/octen" passHref><NavDropdown.Item>Octen</NavDropdown.Item></Link>
              <NavDropdown.Divider />
              <Link href="/format" passHref><NavDropdown.Item>Format</NavDropdown.Item></Link>
              <NavDropdown.Divider />
              <Link href="/courier_bill" passHref><NavDropdown.Item>Courier Bill</NavDropdown.Item></Link>
              <NavDropdown.Divider />
              <Link href="/mobile_bill" passHref><NavDropdown.Item>Mobile Bill</NavDropdown.Item></Link>
              <NavDropdown.Divider />
              <Link href="/localta" passHref><NavDropdown.Item>Local TA Bill</NavDropdown.Item></Link>
              <NavDropdown.Divider />
              <Link href="/leave" passHref><NavDropdown.Item>Leave Application</NavDropdown.Item></Link>
              <NavDropdown.Divider />
              <Link href="/honda" passHref><NavDropdown.Item>Honda Inforamtion</NavDropdown.Item></Link>
              <NavDropdown.Divider />
              <Link href="/land" passHref><NavDropdown.Item>Land Inforamtion</NavDropdown.Item></Link>
              <NavDropdown.Divider />
              <Link href="/bkash" passHref><NavDropdown.Item>Bkash Bill</NavDropdown.Item></Link>
              <NavDropdown.Divider />
              <Link href="/gobearer" passHref><NavDropdown.Item>Go+Bearer</NavDropdown.Item></Link>
              <NavDropdown.Divider />
              <Link href="/certificate" passHref><NavDropdown.Item>Certificate COL</NavDropdown.Item></Link>
              <NavDropdown.Divider />
              <Link href="/certificate/certificategeneral" passHref><NavDropdown.Item>Certificate General</NavDropdown.Item></Link>









              <Link href="/unit" passHref><NavDropdown.Item>Unit</NavDropdown.Item></Link>
              <NavDropdown.Divider />
              <Link href="/project" passHref><NavDropdown.Item>Project</NavDropdown.Item></Link>
            </NavDropdown>

            <NavDropdown title="Mis" id="basic-nav-dropdown">
              <Link href="/backup" passHref><NavDropdown.Item>Backup</NavDropdown.Item></Link>
              <NavDropdown.Divider />
            </NavDropdown>



            <NavDropdownMenu title="Dropdown R" id="collasible-nav-dropdown" alignLeft >
                <NavDropdown.Item href="#action/3.1">Action1</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.1">Action2</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.1">Action3</NavDropdown.Item>
                <DropdownSubmenu href="#action/3.7" title="Action5">
                  <NavDropdown.Item href="#action/8.1">Sub 1</NavDropdown.Item>
                  <DropdownSubmenu href="#action/3.7" title="Text to show">
                    <NavDropdown.Item href="#action/9.1">
                      Sub 2
                    </NavDropdown.Item>
                  </DropdownSubmenu>
                </DropdownSubmenu>
              </NavDropdownMenu>




          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

  )

}

export default NavbarComponent;
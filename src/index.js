// FIXME: update prop-types https://github.com/facebook/react/issues/14159
import 'reset-css/reset.css'
import 'normalize.css/normalize.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'css-checkbox-library/dist/css/checkboxes.min.css'
import React from 'react'
import { render } from 'react-dom'
import App from './App'

if (process.env.NODE_ENV !== `production`) {
  const { whyDidYouUpdate } = require(`why-did-you-update`)

  whyDidYouUpdate(React, {
    exclude: [
      // react-icons
      /^IconBase|FaCogs|FaTimes/,
      // reactstrap
      /^Alert|Badge|Breadcrumb|BreadcrumbItem|Button|ButtonDropdown|ButtonGroup|ButtonToolbar|Card|CardBody|CardColumns|CardDeck|CardFooter|CardGroup|CardHeader|CardImg|CardImgOverlay|CardLink|CardSubtitle|CardText|CardTitle|Carousel|CarouselItem|CarouselControl|CarouselIndicators|CarouselCaption|Col|Collapse|Container|CustomInput|Dropdown|DropdownItem|DropdownMenu|DropdownToggle|Fade|Form|FormFeedback|FormGroup|FormText|Input|InputGroup|InputGroupAddon|InputGroupButtonDropdown|InputGroupText|Jumbotron|Label|ListGroup|ListGroupItem|ListGroupItemHeading|ListGroupItemText|Media|Modal|ModalBody|ModalFooter|ModalHeader|Nav|Navbar|NavbarBrand|NavbarToggler|NavItem|NavLink|Pagination|PaginationItem|PaginationLink|Popover|PopoverBody|PopoverHeader|Progress|Row|TabContent|Table|TabPane|Tag|Tooltip|UncontrolledAlert|UncontrolledButtonDropdown|UncontrolledDropdown|UncontrolledTooltip|UncontrolledCollapse/
    ]
  })
}

render(<App />, document.getElementById(`root`))

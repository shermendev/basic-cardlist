export default function(React) {
  const { whyDidYouUpdate } = require(`why-did-you-update`)

  whyDidYouUpdate(React, {
    exclude: [
      // React-icons
      /^IconBase|FaCogs|FaTimes/,
      // Reactstrap
      /^Alert|Badge|Breadcrumb|BreadcrumbItem|Button|ButtonDropdown|ButtonGroup|ButtonToolbar|Card|CardBody|CardColumns|CardDeck|CardFooter|CardGroup|CardHeader|CardImg|CardImgOverlay|CardLink|CardSubtitle|CardText|CardTitle|Carousel|CarouselItem|CarouselControl|CarouselIndicators|CarouselCaption|Col|Collapse|Container|CustomInput|Dropdown|DropdownItem|DropdownMenu|DropdownToggle|Fade|Form|FormFeedback|FormGroup|FormText|Input|InputGroup|InputGroupAddon|InputGroupButtonDropdown|InputGroupText|Jumbotron|Label|ListGroup|ListGroupItem|ListGroupItemHeading|ListGroupItemText|Media|Modal|ModalBody|ModalFooter|ModalHeader|Nav|Navbar|NavbarBrand|NavbarToggler|NavItem|NavLink|Pagination|PaginationItem|PaginationLink|Popover|PopoverBody|PopoverHeader|Progress|Row|TabContent|Table|TabPane|Tag|Tooltip|UncontrolledAlert|UncontrolledButtonDropdown|UncontrolledDropdown|UncontrolledTooltip|UncontrolledCollapse/,
      // Render-props
      /^WatchResize/,
      // React-router
      /^Link|Route/,
      // Styled-components
      /^StyledComponent/,
      // Redux
      /^Provider/,
      // Countdown
      /^Countdown/
    ]
  })
}

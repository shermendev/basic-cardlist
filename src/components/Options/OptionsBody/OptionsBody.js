import React from 'react'
import PropTypes from 'prop-types'
import { Button } from 'reactstrap'
import { OptionsBodyContainer, OptionsBodyOrderComment } from './styled'

const OptionsBody = ({ ascending, onPurge, onReset, onToggleOrder }) => (
  <OptionsBodyContainer>
    <div className="d-flex align-items-center">
      <div className="ckbx-style-14 d-inline-block">
        <input checked={ascending} id="ckbx-style-14-1" name="ckbx-style-14" type="checkbox" onChange={onToggleOrder} />
        <label className="mb-0" htmlFor="ckbx-style-14-1" />
      </div>
      <OptionsBodyOrderComment className="text-white ml-2">
        {`Toggle ascending order. Current order: ${ascending ? `Ascending` : `Descending`}`}
      </OptionsBodyOrderComment>
    </div>
    <Button className="mt-4" color="danger" onClick={onPurge}>
      Purge all
    </Button>
    <Button className="mt-4 ml-2" color="warning" onClick={onReset}>
      Reset counter
    </Button>
  </OptionsBodyContainer>
)

OptionsBody.propTypes = {
  ascending: PropTypes.bool.isRequired,
  onPurge: PropTypes.func.isRequired,
  onReset: PropTypes.func.isRequired,
  onToggleOrder: PropTypes.func.isRequired
}

export default OptionsBody

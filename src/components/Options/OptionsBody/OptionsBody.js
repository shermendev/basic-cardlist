import React from 'react'
import PropTypes from 'prop-types'
import { Button } from 'reactstrap'
import styles from './OptionsBody.module.sass'

const OptionsBody = ({ ascending, onOrderChange, onPurge, onReset }) => (
  <div className={styles.wrap}>
    <div className="d-flex align-items-center">
      <div className="ckbx-style-14 d-inline-block">
        <input checked={ascending} id="ckbx-style-14-1" name="ckbx-style-14" type="checkbox" onChange={onOrderChange} />
        <label className="mb-0" htmlFor="ckbx-style-14-1" />
      </div>
      <span className={`text-white ml-21 ${styles.orderComment}`}>
        {`Toggle ascending order. Current order: ${ascending ? `Ascending` : `Descending`}`}
      </span>
    </div>
    <Button className="mt-4" color="danger" onClick={onPurge}>
      Purge all
    </Button>
    <Button className="mt-4 ml-2" color="warning" onClick={onReset}>
      Reset counter
    </Button>
  </div>
)

OptionsBody.propTypes = {
  ascending: PropTypes.bool.isRequired,
  onOrderChange: PropTypes.func.isRequired,
  onPurge: PropTypes.func.isRequired,
  onReset: PropTypes.func.isRequired
}

export default OptionsBody

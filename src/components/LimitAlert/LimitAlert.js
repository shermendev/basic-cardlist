import React from 'react'
import { UncontrolledAlert } from 'reactstrap'
import styles from './LimitAlert.module.sass'

const LimitAlert = () => (
  <div className={styles.wrap}>
    <UncontrolledAlert color="danger">Limit reached!</UncontrolledAlert>
  </div>
)

export default React.memo(LimitAlert)

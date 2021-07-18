import React, { Fragment } from 'react'
import { Bar } from 'react-chartjs-2'

const Stats = () => {
  return (
    <Fragment>
      <h4>You are on the Stats Page</h4>
      <p>Below you will see graphs</p>
      <Bar
        data={{
          labels: ['Red', 'Blue', 'Yellow', 'green', 'Purple', 'Orange']
        }}
        height={400}
        width={600}
      />
    </Fragment>
  )
}

export default Stats

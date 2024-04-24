import { useState } from "react"

const Total = ({ parts }) => {
    let totalSum = parts.reduce((ac = 0, nv) => ac + nv.exercises)

    return (
        <h4>Total of {totalSum} exercises</h4>
    )
}

export { Total }
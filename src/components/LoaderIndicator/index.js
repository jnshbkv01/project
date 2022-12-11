import React from 'react'
import classes from './styles.module.css'

const LoaderIndicator = () => {
  return (
    <div className = {classes.centered}>
  <div className = {classes.blob1}></div>
  <div className = {classes.blob2}></div>
</div>
  )
}

export default LoaderIndicator
//     <div className={classes.center}>
//   <div className={classes.wave}></div>
//   <div className={classes.wave}></div>
//   <div className={classes.wave}></div>
//   <div className={classes.wave}></div>
//   <div className={classes.wave}></div>
//   <div className={classes.wave}></div>
//   <div className={classes.wave}></div>
//   <div className={classes.wave}></div>
//   <div className={classes.wave}></div>
//   <div className={classes.wave}></div>
// </div>
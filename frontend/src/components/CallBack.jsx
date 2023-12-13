import {React,memo} from 'react';

function CallBack({Learning}) {
  console.log("child component")
  return (
    <>
    </>
  )
}

export default memo(CallBack);
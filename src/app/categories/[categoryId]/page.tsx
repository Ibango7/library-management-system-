import OneCategory from '@/components/oneCategory';
import React from 'react'



const OneCategoryPage:React.FC<{params: {categoryId:string}}>  = ({params}) => {
  return (
    <OneCategory categoryId={params.categoryId}/>
  )
}

export default OneCategoryPage;

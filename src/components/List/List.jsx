import React from 'react'
import st from './List.module.css'
import Title1 from '../UI/Title1/Title1'
import ImageOrg from '../UI/Image/ImageOrg'
import Cont from '../UI/Cont/Cont'
import LinkRoute from '../UI/LinkRoute/LinkRoute'

function List({arr}) {
  return (
    <>
    <center>
        <ul className={st.list}>
          {
          arr.map((e,i) => (
          <li className={st.list__item} key={e.id}>
            <div className={st.cont}>
              <Cont wid="300px" hei="350px">
                <ImageOrg link={e.image} width="250px" br="var(--borderRadius)"/>
                <Title1 className="titleLi" text={e.name} color="var(--textColor)" size="var(--md)"/>
                <LinkRoute text="<<< Подробнее >>>" add={`/home/${e.id}`}/>
              </Cont>
            </div>
          </li>
          ))
         }
        </ul>
    </center>
    </>
  )
}

export default List
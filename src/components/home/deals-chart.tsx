import { DollarOutlined } from '@ant-design/icons'
import { Card } from 'antd'
import React from 'react'
import { Text } from '../text';

type Props = {}

const DealsChart = (props: Props) => {
  return (
    <Card 
    style={{height: '100%'}}
    headStyle={{padding: '8px 16px'}}
    bodyStyle={{padding: '24px 24px 0 24px'}}
    title={
      <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
      
      }}
      >
        <DollarOutlined/>
        <Text size="sm" style={{marginLeft: '.5rem'}}>
          Deals chart
        </Text>
      </div>
    }
    ></Card>
  )
}

export default DealsChart
import React from 'react'
import { Card, Skeleton } from "antd";
import { UnorderedListOutlined } from '@ant-design/icons';
import { Text } from '../text';

const latestActivities = () => {
  return (
    <Card
    styles={{header: {padding: '16px'}, body: {padding: '0 1rem'}}}
    title={
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
          }}
        >
          <UnorderedListOutlined />
          <Text size="sm" style={{ marginLeft: ".5rem" }}>
            Latest activities
          </Text>
        </div>
      }
    ></Card>
  )
}

export default latestActivities
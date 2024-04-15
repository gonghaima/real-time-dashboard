import React from 'react'
import { Card, List, Skeleton as AntdSkeleton, Space } from "antd";
import { UnorderedListOutlined } from '@ant-design/icons';
import { Text } from '../text';

type Props = { limit?: number };

const latestActivities = ({ limit = 5 }: Props) => {
    const isLoading = true;
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
    >
        {isLoading ? ( 
            <List
            itemLayout="horizontal"
            dataSource={Array.from({ length: limit }).map((_, index) => ({
              id: index,
            }))}
            renderItem={(_item, index) => {
              return (
                <List.Item key={index}>
                  <List.Item.Meta
                    avatar={
                      <AntdSkeleton.Avatar
                        active
                        size={48}
                        shape="square"
                        style={{
                          borderRadius: "4px",
                        }}
                      />
                    }
                    title={
                      <AntdSkeleton.Button
                        active
                        style={{
                          height: "16px",
                        }}
                      />
                    }
                    description={
                      <AntdSkeleton.Button
                        active
                        style={{
                          width: "300px",
                          height: "16px",
                        }}
                      />
                    }
                  />
                </List.Item>
              );
            }}
          />
        ):
        <List/> /** TODO */
        }
    </Card>
  )
}

export default latestActivities
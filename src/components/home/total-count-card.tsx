import { variants } from '@/constants';
import { Card, Skeleton } from "antd";
import { Text } from '../text';
import { AreaConfig } from "@ant-design/plots";
import styles from "./total-count-card.module.css"
import React, { Suspense } from "react";

type Props = {
    resource: string;
    isLoading: boolean;
    totalCount: number;

}

const Area = React.lazy(() => import("@ant-design/plots/es/components/area"));


const DashboardTotalCountCard = ({
        resource,
        isLoading,
        totalCount,
}: Props) => {

    const { primaryColor, secondaryColor, icon, title } = variants[resource];
    const config: AreaConfig = {
        className: styles.area,
        appendPadding: [1, 0, 0, 0],
        padding: 0,
        syncViewPadding: true,
        data: variants[resource].data,
        autoFit: true,
        tooltip: false,
        animation: false,
        xField: "index",
        yField: "value",
        xAxis: false,
        yAxis: {
          tickCount: 12,
          label: {
            style: {
              fill: "transparent",
            },
          },
          grid: {
            line: {
              style: {
                stroke: "transparent",
              },
            },
          },
        },
        smooth: true,
        areaStyle: () => {
          return {
            fill: `l(270) 0:#fff 0.2:${secondaryColor} 1:${primaryColor}`,
          };
        },
        line: {
          color: primaryColor,
        },
      };
    return (
        <Card style={{height: "96px", padding: 0}} bodyStyle={{padding: '8px 8px 8px 12px'}} size="sm">
            <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                whiteSpace: 'nowrap',
            }}>
                {/* {icons[resource]({})} */}
                {icon}
                <Text size='md' className='secondary' style={{marginLeft: '8px'}}>{title}</Text>
            </div>
            <div
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Text
          size="xxxl"
          strong
          style={{
            flex: 1,
            whiteSpace: "nowrap",
            flexShrink: 0,
            textAlign: "start",
            marginLeft: "48px",
            fontVariantNumeric: "tabular-nums",
          }}
        >
          {isLoading ? (
            <Skeleton.Button
              style={{
                marginTop: "8px",
                width: "74px",
              }}
            />
          ) : (
            totalCount
          )}
        </Text>
        <Suspense>
          <Area {...config} />
        </Suspense>
      </div>
        </Card>
    )
}

export default DashboardTotalCountCard
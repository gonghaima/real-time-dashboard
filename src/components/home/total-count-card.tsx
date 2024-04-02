import { variants } from '@/constants';
import { Card } from 'antd';
import React from 'react'

type Props = {
    resource: string;
    isLoading: boolean;
    totalCount: number;

}

const DashboardTotalCountCard = ({
        resource,
        isLoading,
        totalCount,
}: Props) => {
    debugger;
    const { primaryColor, secondaryColor, icon, title } = variants[resource];
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
            </div>
        </Card>
    )
}

export default DashboardTotalCountCard
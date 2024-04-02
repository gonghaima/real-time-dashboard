import React, { FC, PropsWithChildren, Suspense } from "react";
import { AuditOutlined, ShopOutlined, TeamOutlined } from "@ant-design/icons";
import { IconWrapper } from './IconWrapper';

export const variants: {
    [key in Type]: {
      primaryColor: string;
      secondaryColor?: string;
      icon: React.ReactNode;
      title: string;
      data: { index: string; value: number }[];
    };
  } = {
    companies: {
      primaryColor: "#1677FF",
      secondaryColor: "#BAE0FF",
      icon: (
        <IconWrapper color="#E6F4FF">
          <ShopOutlined
            className="md"
            style={{
              color: "#1677FF",
            }}
          />
        </IconWrapper>
      ),
      title: "Number of companies",
      data: [
        {
          index: "1",
          value: 3500,
        },
        {
          index: "2",
          value: 2750,
        },
        {
          index: "3",
          value: 5000,
        },
        {
          index: "4",
          value: 4250,
        },
        {
          index: "5",
          value: 5000,
        },
      ],
    },
    contacts: {
      primaryColor: "#52C41A",
      secondaryColor: "#D9F7BE",
      icon: (
        <IconWrapper color="#F6FFED">
          <TeamOutlined
            className="md"
            style={{
              color: "#52C41A",
            }}
          />
        </IconWrapper>
      ),
      title: "Number of contacts",
      data: [
        {
          index: "1",
          value: 10000,
        },
        {
          index: "2",
          value: 19500,
        },
        {
          index: "3",
          value: 13000,
        },
        {
          index: "4",
          value: 17000,
        },
        {
          index: "5",
          value: 13000,
        },
        {
          index: "6",
          value: 20000,
        },
      ],
    },
    deals: {
      primaryColor: "#FA541C",
      secondaryColor: "#FFD8BF",
      icon: (
        <IconWrapper color="#FFF2E8">
          <AuditOutlined
            className="md"
            style={{
              color: "#FA541C",
            }}
          />
        </IconWrapper>
      ),
      title: "Total deals in pipeline",
      data: [
        {
          index: "1",
          value: 1000,
        },
        {
          index: "2",
          value: 1300,
        },
        {
          index: "3",
          value: 1200,
        },
        {
          index: "4",
          value: 2000,
        },
        {
          index: "5",
          value: 800,
        },
        {
          index: "6",
          value: 1700,
        },
        {
          index: "7",
          value: 1400,
        },
        {
          index: "8",
          value: 1800,
        },
      ],
    },
  };



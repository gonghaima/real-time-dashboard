import React, { FC, PropsWithChildren, Suspense, HTMLAttributes } from "react";

export const IconWrapper: FC<HTMLAttributes<HTMLDivElement>> = (props) => {
        const { children, color } = props;
        return (
            <div
                style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "32px",
                    height: "32px",
                    borderRadius: "50%",
                    backgroundColor: color,
                }}
            >
                {children}
            </div>
        );
    };

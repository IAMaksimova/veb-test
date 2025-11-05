import React from 'react';
import type {Condition} from "../Conditions.tsx";
import {S} from './ConditionCard_Styles.ts'

export const ConditionCard: React.FC<{ item: Condition, color: string }> = ({item, color}) => {
    return (
        <S.ConditionCard color={color}>
            <S.IconWrapper $color={color}>
                {item.icon}
            </S.IconWrapper>
            <S.Content>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
            </S.Content>
            <S.CornerDecoration $color={color}/>
        </S.ConditionCard>
    );
};


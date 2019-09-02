import React from 'react';
import { DocumentNode } from 'graphql';
export interface SourceInterface {
    id: string;
    query: DocumentNode;
    typeRelationships: object;
    unrestricted: boolean;
    parameters: Record<string, any>;
    children: (props: object) => JSX.Element;
}
export interface Instance {
    instance: {
        id: string;
        value: string;
        __typename?: string;
    };
    __typename: string;
}
export interface Response {
    ExecuteAction: string;
}
export declare const Source: React.FunctionComponent<SourceInterface>;
export default Source;
//# sourceMappingURL=index.d.ts.map
import React from 'react';
import { MutationFunction } from '@apollo/react-common';
export interface CreateFirstTypeFormProps {
    treeId: string;
    createFirstType: MutationFunction;
}
export interface CreateFirstTypeFormState {
    typeName: string;
    isSubmitting: boolean;
}
export interface Response {
    AddRootType: {
        id: string;
        name: string;
    };
}
export interface Variables {
    id: string;
    name: string;
    treeId: string;
}
declare const _default: React.ComponentClass<{
    treeId: string;
}, any>;
export default _default;
//# sourceMappingURL=index.d.ts.map
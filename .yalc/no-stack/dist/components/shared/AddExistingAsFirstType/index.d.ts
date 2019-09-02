import React, { Component } from 'react';
import { MutationFunction } from '@apollo/react-common';
export interface AddExistingAsFirstTypeProps {
    treeId: string;
    platformId: string;
    addFirstType: MutationFunction;
}
export interface AddExistingAsFirstTypeState {
    selectedTypeId: string | null;
    isSubmitting: boolean;
}
declare class AddExistingAsFirstType extends Component<AddExistingAsFirstTypeProps, AddExistingAsFirstTypeState> {
    readonly state: {
        selectedTypeId: null;
        isSubmitting: boolean;
    };
    handleSelect: (e: React.FormEvent<HTMLSelectElement>) => void;
    private handleCreateType;
    render(): JSX.Element;
}
declare const _default: (React.ComponentClass<{
    treeId: string;
}, any> & Pick<(React.ComponentClass<AddExistingAsFirstTypeProps, any> & typeof AddExistingAsFirstType) | (React.FunctionComponent<AddExistingAsFirstTypeProps> & typeof AddExistingAsFirstType), "defaultProps" | "prototype">) | (React.FunctionComponent<{
    treeId: string;
}> & Pick<(React.ComponentClass<AddExistingAsFirstTypeProps, any> & typeof AddExistingAsFirstType) | (React.FunctionComponent<AddExistingAsFirstTypeProps> & typeof AddExistingAsFirstType), "defaultProps" | "prototype">);
export default _default;
//# sourceMappingURL=index.d.ts.map
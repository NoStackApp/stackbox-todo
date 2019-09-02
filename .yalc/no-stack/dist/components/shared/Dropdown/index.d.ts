import { FormEvent } from 'react';
export interface Option {
    id: string;
    name: string;
}
export interface DropdownProps {
    options?: Option[];
    onSelect: (e: FormEvent<HTMLSelectElement>) => void;
    disabled: boolean;
}
declare const Dropdown: ({ options, onSelect, disabled, }: DropdownProps) => JSX.Element;
export default Dropdown;
//# sourceMappingURL=index.d.ts.map
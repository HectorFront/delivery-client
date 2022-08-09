/** @name Dependencies */
import {ElementType, memo} from 'react';
/** @name External */
import {InputMenuSearch} from "helpers";

export const Search: ElementType = memo((_props): JSX.Element =>
    <InputMenuSearch
        placeholder="Buscar produto do cardápio"
    />
);
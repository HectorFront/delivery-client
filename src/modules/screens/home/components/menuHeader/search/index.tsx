/** @name Dependencies */
import {ElementType, memo} from 'react';
/** @name External */
import {InputMenuSearch} from "components";

export const Search: ElementType = memo((_props): JSX.Element =>
    <InputMenuSearch
        className='mt-1'
        placeholder="Buscar produto do cardápio"
    />
);
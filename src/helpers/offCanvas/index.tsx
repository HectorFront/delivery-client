/** @name Dependencies */
import {ElementType, memo, ReactNode} from "react";

type OffCanvasContainerProps = {
    type?: string,
    children: ReactNode
}

type OffCanvasBodyProps = {
    children: ReactNode
}

type OffCanvasHeaderProps = {
    title?: string
};

export const OffCanvasContainer: ElementType = memo(({ children, type = 'end', ...props }: OffCanvasContainerProps): JSX.Element =>
    <div
        {...props}
        tabIndex={-1}
        className={`offcanvas offcanvas-${type}`}
    >
        {children}
    </div>
);

export const OffCanvasHeader: ElementType = memo(({ title, ...props }: OffCanvasHeaderProps): JSX.Element =>
    <div className="offcanvas-header" {...props}>
        {title && <h5 className="offcanvas-title">{title}</h5>}
        <button
            type="button"
            aria-label="Close"
            className="btn-close"
            data-bs-dismiss="offcanvas"
        />
    </div>
);

export const OffCanvasBody: ElementType = memo(({ children, ...props }: OffCanvasBodyProps): JSX.Element =>
    <div className="offcanvas-body" {...props}>
        {children}
    </div>
);
import React, {type ReactNode, type DetailedHTMLProps, type HTMLAttributes} from 'react';

interface Props {
	children: ReactNode;
}

export const AboutPetItem = ({children, ...props}: Props & DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>) => (<div {...props}>{children}</div>);

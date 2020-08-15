import Link from "next/link";
import { useRouter } from "next/router";
import React, { Children } from "react";


const ActiveLink = ({children, ...props}) => {
    const router = useRouter();
    // ensure that i provide only one child element
    const child = Children.only(children);
    let className = child.props.className || '';

    if (router.asPath === props.href && props.activeClassName) {
        className = className + ' ' + props.activeClassName
    }

    // removes activeClassName so we can pass ...props without it
    delete props.activeClassName;

    // ne pas mettre d'espaces autour de React.cloneElement, ils sont considérés comme des éléments
    return <Link {...props}>{React.cloneElement(child, {className})}</Link>
}

export default ActiveLink;
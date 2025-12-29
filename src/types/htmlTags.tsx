import React from 'react';

export type DivRef = React.ElementRef<"div">; 
export type DivProps = React.HTMLAttributes<HTMLDivElement>;

export type InputRef = React.ElementRef<"input">; 
export type InputProps = React.HTMLAttributes<HTMLInputElement>;

export type ButtonRef = React.ElementRef<"button">; 
export type ButtonProps = React.HTMLAttributes<HTMLButtonElement>;

export type ParagraphRef = React.ElementRef<"p">; 
export type ParagraphProps = React.HTMLAttributes<HTMLParagraphElement>;

export type HeadRef = React.ElementRef<"h1" | "h2" | "h3" | "h4" | "h5" | "h6">; 
export type HeadProps = React.HTMLAttributes<HTMLHeadElement>;

export type ListRef = React.ElementRef<"ul" | "ol">; 
export type ListProps = React.HTMLAttributes<HTMLUListElement>;

export type ListItemRef = React.ElementRef<"li">; 
export type ListItemProps = React.HTMLAttributes<HTMLLIElement>;

export type LabelRef = React.ElementRef<"label">; 
export type LabelProps = React.HTMLAttributes<HTMLLabelElement>;

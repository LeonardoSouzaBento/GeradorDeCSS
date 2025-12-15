import { Dispatch, SetStateAction } from 'react';

export type BooleanSetter = Dispatch<SetStateAction<boolean>>;
export type StateSetter<T> = Dispatch<SetStateAction<T>>;

export interface SizeHierarchy {
  tagName: string;
  pow?: number;
  ratio?: number;
  var?: string;
}

export interface ScaledList {
  tagName: string;
  minSize: number;
  maxSize: number;
}

export type ClampValue = Record<string, string>;

export interface TagAndCssVar {
  tagName: string;
  varName: string;
}

export interface Scale {
  name: string;
  value: number;
}

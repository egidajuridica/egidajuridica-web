export interface RichTextNode {
  type: string;
  children?: RichTextNode[];
  [key: string]: unknown; 
}

export interface RichTextContent {
  root: {
    children: RichTextNode[];
    [key: string]: unknown;
  };
}
export type DocumentObject = {
  identifier: string;
  version: Version;
};

export type Version = {
  document: Document;
};

export type Document = {
  artboards: ArtboardEntries;
  name: string;
};

export type ArtboardEntries = {
  entries: Artboard[];
};
export type Artboard = {
  files: File[];
  identifier: string;
  name: string;
};

export type File = {
  height: number;
  scale: number;
  thumbnails: Thumbnail[];
  url: string;
  width: number;
};
export type Thumbnail = {
  type: 'S' | 'M' | 'L' | 'XL';
  url: string;
};

export type UIDocument = {
  id: string;
  name: string;
  artboards: UIArtboard[];
};

export type UIArtboard = {
  id: string;
  title: string;
  url?: string;
  thumb?: string;
};

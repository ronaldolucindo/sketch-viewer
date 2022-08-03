import {
  Artboard,
  DocumentObject,
  File,
  Thumbnail,
} from 'modules/document/types';
function smallestThumbnail(thumbs: Thumbnail[]) {
  const small = thumbs.find((t) => t.type === 'S')?.url;
  const medium = thumbs.find((t) => t.type === 'M')?.url;
  const large = thumbs.find((t) => t.type === 'L')?.url;
  const xLarge = thumbs.find((t) => t.type === 'XL')?.url;

  return small || medium || large || xLarge;
}
function originalSizeScale(files: File[]) {
  return files.find((file) => file.scale === 1);
}
export function parseArtboard(data: Artboard[]) {
  return data.map((entry) => ({
    id: entry.identifier,
    title: entry.name,
    url: originalSizeScale(entry.files)?.url,
    thumb: smallestThumbnail(originalSizeScale(entry.files)?.thumbnails || []),
  }));
}

export function parseApiResponse(data: DocumentObject) {
  return {
    id: data.identifier,
    name: data.version.document.name,
    artboards: parseArtboard(data.version.document.artboards.entries),
  };
}

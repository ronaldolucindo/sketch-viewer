import { Artboard } from 'modules/document/types';
export function apiToViewerFromat(data: Artboard[]) {
  return data.map((entry) => ({
    id: entry.identifier,
    title: entry.name,
    url: entry.files.find((file) => file.scale === 1)?.url,
  }));
}

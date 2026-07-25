// Offline mode: All Firebase functionality is stubbed out.
// No network requests to Firebase services will be made.

import type {
  ExcalidrawElement,
  FileId,
} from "@excalidraw/element/types";
import type {
  AppState,
  BinaryFileData,
} from "@excalidraw/excalidraw/types";

import type { SyncableExcalidrawElement } from ".";
import type Portal from "../collab/Portal";

export const loadFirebaseStorage = async () => {
  throw new Error("Firebase is disabled in offline mode");
};

export const isSavedToFirebase = (
  _portal: Portal,
  _elements: readonly ExcalidrawElement[],
): boolean => {
  // if no room exists, consider the room saved so that we don't unnecessarily
  // prevent unload (there's nothing we could do at that point anyway)
  return true;
};

export const saveFilesToFirebase = async ({
  prefix: _prefix,
  files: _files,
}: {
  prefix: string;
  files: { id: FileId; buffer: Uint8Array }[];
}) => {
  console.warn("Firebase is disabled in offline mode — saveFilesToFirebase is a no-op");
  return {
    savedFiles: [] as FileId[],
    erroredFiles: _files.map((f) => f.id),
  };
};

export const saveToFirebase = async (
  _portal: Portal,
  _elements: readonly SyncableExcalidrawElement[],
  _appState: AppState,
) => {
  return null;
};

export const loadFromFirebase = async (
  _roomId: string,
  _roomKey: string,
  _socket: unknown | null,
): Promise<readonly SyncableExcalidrawElement[] | null> => {
  return null;
};

export const loadFilesFromFirebase = async (
  _prefix: string,
  _decryptionKey: string,
  _filesIds: readonly FileId[],
) => {
  return {
    loadedFiles: [] as BinaryFileData[],
    erroredFiles: new Map<FileId, true>(),
  };
};

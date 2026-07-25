import { DefaultSidebar } from "@excalidraw/excalidraw";

import "./AppSidebar.scss";

export const AppSidebar = () => {
  // Offline mode: Excalidraw+ promo sidebar tabs (comments, presentation) removed
  return <DefaultSidebar />;
};

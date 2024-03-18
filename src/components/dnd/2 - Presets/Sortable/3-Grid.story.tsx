import React from "react";
import { arraySwap, rectSwappingStrategy } from "@dnd-kit/sortable";

import { Sortable } from "./Sortable";
import { type UniqueIdentifier } from "@dnd-kit/core";

export default {
  title: "Presets/Sortable/Grid",
};

export const Swappable = (props: {
  items?: {
    id: UniqueIdentifier;
    content: React.ReactElement;
  }[];
}) => {
  return (
    <Sortable
      adjustScale={true}
      Container={(props: any) => <div {...props} className="inline-grid auto-rows-fr grid-cols-1 gap-8 lg:grid-cols-3" />}
      strategy={rectSwappingStrategy}
      items={props.items}
      reorderItems={arraySwap}
      getNewIndex={({ id, items, activeIndex, overIndex }) =>
        arraySwap(items, activeIndex, overIndex).indexOf(id)
      }
    />
  );
};

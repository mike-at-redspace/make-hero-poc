import { useReducer, useCallback } from "react";
import type {
  ActiveItemState,
  ActiveItemAction,
} from "../types/carousel.types";

const deriveDirection = (next: number, prev: number) => (next > prev ? 1 : -1);

const reducer = (
  state: ActiveItemState,
  action: ActiveItemAction,
): ActiveItemState => {
  switch (action.type) {
    case "SET_INDEX":
      return {
        activeIndex: action.payload,
        direction:
          action.direction ??
          deriveDirection(action.payload, state.activeIndex),
      };
    case "NEXT": {
      const next = Math.min(state.activeIndex + 1, action.maxIndex);
      return { activeIndex: next, direction: 1 };
    }
    case "PREV": {
      const prev = Math.max(state.activeIndex - 1, 0);
      return { activeIndex: prev, direction: -1 };
    }
    default:
      return state;
  }
};

export const useActiveItem = (initialIndex = 0) => {
  const [state, dispatch] = useReducer(reducer, {
    activeIndex: initialIndex,
    direction: 0,
  });

  const setIndex = useCallback((index: number, direction?: number) => {
    dispatch({ type: "SET_INDEX", payload: index, direction });
  }, []);

  const next = useCallback(
    (maxIndex: number) => dispatch({ type: "NEXT", maxIndex }),
    [],
  );
  const prev = useCallback(() => dispatch({ type: "PREV" }), []);

  return { ...state, setIndex, next, prev };
};

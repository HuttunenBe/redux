// Import Redux hooks
import { useDispatch, useSelector } from "react-redux";

// Custom hook for typed dispatch (or just to have a standard hook for dispatch)
export const useAppDispatch = () => useDispatch();

// Custom hook for typed selector (or to have a standard hook for selector)
export const useAppSelector = () => useSelector; // ❌ This is **wrong**

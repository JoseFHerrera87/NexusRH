import { create } from "zustand";
import { viewSlice } from "./viewSlice";

const useStorePanel = create((set) => viewSlice(set));

export default useStorePanel;

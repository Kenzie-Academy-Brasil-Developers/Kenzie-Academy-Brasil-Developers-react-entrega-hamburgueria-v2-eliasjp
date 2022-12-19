export interface iSearchBar {
    openSearch: boolean;
    setOpenSearch: (active: boolean) => void;
    products: any[];
    setFilterProducts: (active: []) => void;
}
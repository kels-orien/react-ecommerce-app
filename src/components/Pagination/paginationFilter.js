export const paginationPipe = (state,args) => {
    if (!args || !args.perPage || !args.currentPage) {
        console.log("paginatie:", state)
        return state;
    }
    const location = (args.perPage * (args.currentPage - 1)) || 0 ;
    return state.products.slice(location, location + args.perPage);
};


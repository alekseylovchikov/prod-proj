import { ReactNode } from "react";
import { Provider } from "react-redux"
import { createReduxStore } from "../config/store";

interface StoreProvider {
    children: ReactNode;
}

const store = createReduxStore();

export const StoreProvider = (props: StoreProvider) => {
    const { children } = props;

    return (
        <Provider store={store}>{children}</Provider>
    );
};
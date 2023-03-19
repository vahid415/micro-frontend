import RoutesHook from "./router";
import {MuiGlobal} from "./theme/mui-global";
import {Suspense} from "react";


export function App() {
    return (
            <MuiGlobal>
                <Suspense fallback={<span>has error</span>}>
                    <RoutesHook/>
                </Suspense>
            </MuiGlobal>
    );
}

export default App;

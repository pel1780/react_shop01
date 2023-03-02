import { DEFAULT, DEFAULT_CONTENTS, NAV } from "./data/default";
import { Footer } from "./pages/Footer";
import { Header } from "./pages/Header";
import { TopBanner } from "./pages/TopBanner";

export const App = () => {
    return (
        <>
            <TopBanner DEFAULT={DEFAULT} DEFAULT_CONTENTS={DEFAULT_CONTENTS} />
            <Header DEFAULT={DEFAULT} NAV={NAV} />
            <Footer DEFAULT={DEFAULT} NAV={NAV} />
        </>
    )
}
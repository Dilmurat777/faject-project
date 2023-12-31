import { Helmet } from "react-helmet";

export function HeadHelmet({ title, description}) {
    return <Helmet>
            <title>{title}</title>
            <meta name='description' content={description} />
        </Helmet>
}
import { ReactElement } from 'react';

const Error404 = (): ReactElement => {
    return (
        <div className="max-w-full flex flex-col justify-center items-center gap-6">
            <h1 className="text-6xl font-thin mb-4">404</h1>
            <h2 className="text-gray-800 font-bold">Page not found</h2>
            <p className="text-gray-800">
                The page you are looking for does not exist.
            </p>
        </div>
    );
};

export default Error404;

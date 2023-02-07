import { ReactElement } from 'react';
import A from '@/components/A';
import config from '@/configuration';

const Navbar = (): ReactElement => {
    return (
        <nav className="flex flex-row px-8 py-4">
            <A href="/">
                <div className="flex flex-row items-center">
                    <img src="/logo.svg" alt="logo" className="h-8 w-8 mr-2" />
                    <h1 className="text-xl font-light text-gray-800">
                        {config.name}
                    </h1>
                </div>
            </A>
        </nav>
    );
};

export default Navbar;

import { ReactElement } from 'react';
import config from '@/configuration';
import A from '@/components/A';

const Footer = (): ReactElement => {
    return (
        <footer className="w-full flex flex-row justify-center my-8">
            <p className="text-gray-500">
                Made with ❤️ by
                <A
                    href={config.contact}
                    className="text-blue-500 hover:text-blue-700"
                >
                    {` ${config.nickname}`}
                </A>
            </p>
        </footer>
    );
};

export default Footer;

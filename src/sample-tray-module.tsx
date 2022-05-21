import { declareModule, makeTraySimpleModule } from '@collboard/modules-sdk';
import { contributors, description, license, repository, version } from '../package.json';

import bottleImage from '../assets/Mattoni_jemne_perliva_15_2020 KV 2.png';

declareModule(
    makeTraySimpleModule({
        manifest: {
            name: '@hejny/mattoni-tray',
            version,
            description,
            contributors,
            license,
            repository,
        },

        icon: {
            order: 60,
            icon: bottleImage,
        },
        trayDefinition: [
            {
                title: 'Photos',
                icon: bottleImage,
                groups: [
                    {
                        title: 'Just images',
                        items: [{ imageSrc: bottleImage }],
                    },
                ],
            },
        ],
    }),
);

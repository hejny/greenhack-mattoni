import { declareModule, makeTraySimpleModule, React } from '@collboard/modules-sdk';
import { contributors, description, license, name, repository, version } from '../package.json';

import img20220101_155315 from '../assets/20220101_155315.jpg';
import img20220105_130407 from '../assets/20220105_130407.jpg';
import img20220207_141122 from '../assets/20220207_141122.jpg';
import img20220208_145707 from '../assets/20220208_145707.jpg';
import img20220215_145915 from '../assets/20220215_145915.jpg';
import img20220215_160201 from '../assets/20220215_160201.jpg';
import img20220219_155700 from '../assets/20220219_155700.jpg';
import img20220223_164612 from '../assets/20220223_164612.jpg';
import img20220319_160701 from '../assets/20220319_160701.jpg';
import img20220319_164131 from '../assets/20220319_164131.jpg';
import img20220319_174200 from '../assets/20220319_174200.jpg';
import img20220319_174757 from '../assets/20220319_174757.jpg';
import img20220322_154653 from '../assets/20220322_154653.jpg';
import img20220322_163319 from '../assets/20220322_163319.jpg';
import img20220326_142552 from '../assets/20220326_142552.jpg';
import img20220327_122308 from '../assets/20220327_122308.jpg';
import img20220328_152716 from '../assets/20220328_152716.jpg';
import img20220328_194840 from '../assets/20220328_194840.jpg';

declareModule(
    makeTraySimpleModule({
        manifest: {
            name,
            version,
            description,
            contributors,
            license,
            repository,
        },

        icon: {
            order: 60,
            icon: img20220215_160201,
        },
        trayDefinition: [
            {
                title: 'Photos',
                icon: img20220208_145707,
                groups: [
                    {
                        title: 'Just images',
                        items: [
                            { imageSrc: img20220101_155315 },
                            { imageSrc: img20220208_145707 },
                            { imageSrc: img20220219_155700 },
                            { imageSrc: img20220319_164131 },
                            { imageSrc: img20220322_154653 },
                            { imageSrc: img20220327_122308 },
                            { imageSrc: img20220105_130407 },
                            { imageSrc: img20220215_145915 },
                        ],
                    },
                    {
                        title: (
                            <>
                                Images + <b>titles</b>
                            </>
                        ),
                        items: [
                            // Note: You can add titles to tray items
                            { title: 'image0', imageSrc: img20220223_164612 },
                            { title: 'image1', imageSrc: img20220319_174200 },
                            { title: 'image2', imageSrc: img20220322_163319 },
                            { title: 'image3', imageSrc: img20220328_152716 },
                            { title: 'image4', imageSrc: img20220207_141122 },
                            { title: 'image5', imageSrc: img20220215_160201 },
                            { title: 'image6', imageSrc: img20220319_160701 },
                            { title: 'image7', imageSrc: img20220319_174757 },
                            { title: 'image8', imageSrc: img20220326_142552 },
                            { title: 'image9', imageSrc: img20220328_194840 },
                        ],
                    },
                ],
            },
            {
                title: { en: 'Photos', cs: 'Fotky' /* <- Note: You can make inline translations inside titles */ },
                icon: img20220215_160201,
                groups: [
                    {
                        title: (
                            <>
                                Images with <b>better quality</b>
                            </>
                            // Note: Tray item can be anything importable by Collboard.
                            //       It can be internal asset or external link.
                            //       For example this is using https://github.com/hejny/heic-support
                        ),
                        items: [
                            {
                                title: 'image0',
                                imageSrc: img20220223_164612,
                                artSrc: 'https://github.com/hejny/heic-support/raw/main/samples/20220223_164612.heic',
                            },
                            {
                                title: 'image1',
                                imageSrc: img20220319_174200,
                                artSrc: 'https://github.com/hejny/heic-support/raw/main/samples/20220319_174200.heic',
                            },
                            {
                                title: 'image2',
                                imageSrc: img20220322_163319,
                                artSrc: 'https://github.com/hejny/heic-support/raw/main/samples/20220322_163319.heic',
                            },
                            {
                                title: 'image3',
                                imageSrc: img20220328_152716,
                                artSrc: 'https://github.com/hejny/heic-support/raw/main/samples/20220328_152716.heic',
                            },
                            {
                                title: 'image4',
                                imageSrc: img20220207_141122,
                                artSrc: 'https://github.com/hejny/heic-support/raw/main/samples/20220207_141122.heic',
                            },
                            {
                                title: 'image5',
                                imageSrc: img20220215_160201,
                                artSrc: 'https://github.com/hejny/heic-support/raw/main/samples/20220215_160201.heic',
                            },
                            {
                                title: 'image6',
                                imageSrc: img20220319_160701,
                                artSrc: 'https://github.com/hejny/heic-support/raw/main/samples/20220319_160701.heic',
                            },
                            {
                                title: 'image7',
                                imageSrc: img20220319_174757,
                                artSrc: 'https://github.com/hejny/heic-support/raw/main/samples/20220319_174757.heic',
                            },
                            {
                                title: 'image8',
                                imageSrc: img20220326_142552,
                                artSrc: 'https://github.com/hejny/heic-support/raw/main/samples/20220326_142552.heic',
                            },
                            {
                                title: 'image9',
                                imageSrc: img20220328_194840,
                                artSrc: 'https://github.com/hejny/heic-support/raw/main/samples/20220328_194840.heic',
                            },
                        ],
                    },
                ],
            },
        ],
    }),
);

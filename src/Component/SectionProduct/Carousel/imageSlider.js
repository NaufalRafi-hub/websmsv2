import First from '../../../Images/opt1.png';
import logo1 from '../../../Images/heineken.png';
import Second from '../../../Images/opt2.png';
import camel1 from '../../../Images/digital/1.jpg';
import camel2 from '../../../Images/digital/2.jpg';
import camel3 from '../../../Images/digital/3.jpg';
import camel4 from '../../../Images/digital/4.jpg';
import camel5 from '../../../Images/digital/5.jpg';
import camel6 from '../../../Images/digital/6.jpg';
import camel7 from '../../../Images/digital/7.jpg';
import camel8 from '../../../Images/digital/8.jpg';

import bintang1 from '../../../Images/promotion/1.jpg';
import clas2 from '../../../Images/promotion/2.jpg';
import bebe3 from '../../../Images/promotion/3.jpg';
import apta4 from '../../../Images/promotion/4.jpg';
import mevius5 from '../../../Images/promotion/5.jpg';
import puff6 from '../../../Images/promotion/6.jpg';
import nutricia7 from '../../../Images/promotion/7.jpg';

import aqua1 from '../../../Images/sign/1.jpg';
import ichitan2 from '../../../Images/sign/2.jpg';
import royal3 from '../../../Images/sign/3.jpg';
import nutriclub4 from '../../../Images/sign/4.jpg';
import royal5 from '../../../Images/sign/5.jpg';
import bebe6 from '../../../Images/sign/6.jpg';
import salon7 from '../../../Images/sign/7.jpg';
import migo8 from '../../../Images/sign/8.jpg';
import relx9 from '../../../Images/sign/9.jpg';
import camel10 from '../../../Images/sign/10.jpg';
import heine11 from '../../../Images/sign/11.jpg';

import logo2 from '../../../Images/cocacola.png';
import bebelac from '../../../Images/bebelac.png';
import camel from '../../../Images/camel.png';
import salonpas from '../../../Images/salonpas.png';
import mevius from '../../../Images/mevius.png';
import relx from '../../../Images/relx.webp';
import migo from '../../../Images/migo-min.webp';
// import sgm from '../../../Images/sgm.webp';
import ichitan from '../../../Images/ichitan.png'
import aqua from '../../../Images/aqua.png'
import clasmild from '../../../Images/clasmild.png'
import puf from '../../../Images/puf.png'
import combi from '../../../Images/combiphar.png'
import nutricia from '../../../Images/nutricia.png'
import nutroyal from '../../../Images/nutrilon_royal.webp'
import nutriclub from '../../../Images/nutriclub.png'






import heineken1 from '../../../Images/heineken1.jpg'
import heineken2 from '../../../Images/heineken2.jpg'
import heineken3 from '../../../Images/heineken3.jpg'
import heineken4 from '../../../Images/heineken4.jpg'
import floor_disp_bintang1 from '../../../Images/F_Disp_Bintang.jpg'
import floor_disp_bintang2 from '../../../Images/F_Disp_bintang2.jpg'
import floor_disp_bintang3 from '../../../Images/F_Disp_bintang3.jpg'
import table_disp_fayrouz from '../../../Images/T_Disp_fayrouz.jpg'
import bar_top_heineken from '../../../Images/BarTop_Heineken.jpg'
import bar_top_mevius from '../../../Images/BarTop_Mevius.jpg'
import table_disp_bintang from '../../../Images/t_disp_bintang.jpg'
import floor_disp_dutch from '../../../Images/f_disp_dutch.jpg'
import back_disp_camel1 from '../../../Images/back_disp_camel.jpg'
import back_disp_camel2 from '../../../Images/back_disp_camel2.jpg'
import shelf_bebelac from '../../../Images/shelf_bebelac.jpg'
import shelf_sgm from '../../../Images/shelf_sgm.jpg'
import djtable_heineken from '../../../Images/DjTable_Heineken.jpg'
import booth_bebelac from '../../../Images/Booth_bebelac.jpg'
import packaging_camel1 from '../../../Images/Packaging_camel.jpg'
import packaging_camel2 from '../../../Images/Packaging_camel2.jpg'
import standee_camel1 from '../../../Images/Standee_camel.jpg'
import standee_camel2 from '../../../Images/Standee_camel2.jpg'
import table_booth_bintang from '../../../Images/TableBooth_Bintang.jpg'
import totem_heineken1 from '../../../Images/totem_heineken.jpg'
import totem_heineken2 from '../../../Images/totem_heineken2.jpg'


export default [
  {
    option: 'digital',
    //atau bikin lagi object array di dalem object array
    data: [
      {
        id : 1,
        title: 'PT. Karyadibya Mahardhika (JTI)*',
        description:
          '',
        urls: camel1,
        logo: camel,
        product : [
          {
            prod : 'Floor Display',
            name : 'Bintang Radler Display',
            desc : 
            'Menggunakan material wood, acrylic, dan sticker digital printing. Process diawali dengan wood lathe, cutting acrylic, dan menginstall sticker digital printing',
            image : [
              {
                file : floor_disp_bintang1
              },
              {
                file : floor_disp_bintang2
              },
              {
                file : floor_disp_bintang3
              },
            ]
          },
          {
            prod : 'Table Display',
            name : 'Fayrouz Display',
            desc : 
            'Menggunakan material acrylic, dan sticker digital printing. Process diawali dengan cutting acrylic, dan menginstall sticker digital printing',
            image : [
              {
                file : table_disp_fayrouz
              },
            ]
          },
          {
            prod : 'Bar Top', 
            name : 'Heineken Display', 
            desc : 'Menggunakan material acrylic, led light, sticker cutting. Process diawali dengan cutting acrylic, insttallation sticker cutting, installation LED light dan electricity', 
            image : [
              {
                file : bar_top_heineken
              },
            ]
          },
          {
            prod : 'Table Display', 
            name : 'Radler Bottle Display', 
            desc : 'Menggunakan material acrylic, dan sticker digital printing. Process diawali dengan cutting acrylic, dan installation sticker digital printing', 
            image : [
              {
                file : table_disp_bintang
              },
            ]
          },
        ]
      },
      {
        id : 2,
        title: 'PT. Karyadibya Mahardhika (JTI)*',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pharetra pretium vel mattis posuere nulla venenatis rhoncus nec scelerisque.',
        urls: camel2,
        logo: camel,
        product : [
          {
            prod : 'Floor Display', 
            name : 'Dutchmill Drinks Display', 
            desc : 'Menggunakan material wood, acrylic, dan sticker digital printing. Process diawali dengan wood lathe, cutting acrylic, dan installation sticker digital printing',
            image : [
              {
                file : floor_disp_dutch
              },
            ]
          },
        ]
      },
      {
        id : 3,
        title: 'PT. Karyadibya Mahardhika (JTI)*',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pharetra pretium vel mattis posuere nulla venenatis rhoncus nec scelerisque.',
        urls: camel3,
        logo: camel,
        product : [
          {
            prod : 'Backwall Display', 
            name : 'Camel Cigarettes Backwall Display', 
            desc : 'Menggunakan material alumumium iron, acrylic, led light, sticker digital printing, digital printing untuk header. Process diawali alumunium welding, cutting acrylic, installation sticker digital printing, installation LED Light dan electricity',
            image : [
              {
                file : back_disp_camel1
              },
              {
                file : back_disp_camel2
              },
            ]
          },
        ]
      },
      {
        id : 4,
        title: 'PT. Karyadibya Mahardhika (JTI)*',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pharetra pretium vel mattis posuere nulla venenatis rhoncus nec scelerisque.',
        urls: camel4,
        logo: camel,
        product : [
          {
            prod : 'Bar Top', 
            name : 'Mevius Cigarettes Display', 
            desc : 'Menggunakan material acrylic, led light, dan sticker cutting. Process diawali dengan cutting acrylic, installation sticker cutting, installation LED light dan electricity',
            image : [
              {
                file : bar_top_mevius
              },
            ]
          },
        ]
      },
      {
        id : 5,
        title: 'PT. Karyadibya Mahardhika (JTI)*',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pharetra pretium vel mattis posuere nulla venenatis rhoncus nec scelerisque.',
        urls: camel5,
        logo: camel,
        product : [
          {
            prod : 'Shelftalker', 
            name : 'Bebelac Go! Shelftalker Display', 
            desc : 'Menggunakan material acrylic, dan Sticker digital printing. Process diawali dengan cutting acrylic, installation sticker digital printing',
            image : [
              {
                file : shelf_bebelac
              },
            ]
          },
        ]
      },
      {
        id : 6,
        title: 'PT. Karyadibya Mahardhika (JTI)*',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pharetra pretium vel mattis posuere nulla venenatis rhoncus nec scelerisque.',
        urls: camel6,
        logo: camel,
        product : [
          {
            prod : 'Shelftalker', 
            name : 'SGM aktif Shelftalker Display', 
            desc : 'Menggunakan material acrylic, dan Sticker digital printing. Process diawali dengan cutting acrylic, installation sticker digital printing',
            image : [
              {
                file : shelf_sgm
              },
            ]
          },
        ]
        
      },
      {
        id : 7,
        title: 'PT. Karyadibya Mahardhika (JTI)*',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pharetra pretium vel mattis posuere nulla venenatis rhoncus nec scelerisque.',
        urls: camel7,
        logo: camel,
        product : [
          {
            prod : 'Shelftalker', 
            name : 'SGM aktif Shelftalker Display', 
            desc : 'Menggunakan material acrylic, dan Sticker digital printing. Process diawali dengan cutting acrylic, installation sticker digital printing',
            image : [
              {
                file : shelf_sgm
              },
            ]
          },
        ]
        
      },
      {
        id : 8,
        title: 'PT. Karyadibya Mahardhika (JTI)',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pharetra pretium vel mattis posuere nulla venenatis rhoncus nec scelerisque.',
        urls: camel8,
        logo: camel,
        product : [
          {
            prod : 'Shelftalker', 
            name : 'SGM aktif Shelftalker Display', 
            desc : 'Menggunakan material acrylic, dan Sticker digital printing. Process diawali dengan cutting acrylic, installation sticker digital printing',
            image : [
              {
                file : shelf_sgm
              },
            ]
          },
        ]
        
      },
    ],
  },
  {
    option: 'promotion product',
    data: [
      {
        title: 'PT. Multi Bintang Indonesia',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pharetra pretium vel mattis posuere nulla venenatis rhoncus nec scelerisque. ',
        urls: bintang1,
        logo: logo1,
        product : [
          {
            prod : 'Shelftalker', 
            name : 'SGM aktif Shelftalker Display', 
            desc : 'Menggunakan material acrylic, dan Sticker digital printing. Process diawali dengan cutting acrylic, installation sticker digital printing',
            image : [
              {
                file : shelf_sgm
              },
            ]
          },
        ]
      },
      {
        title: 'PT Nojorono Tobacco International',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pharetra pretium vel mattis posuere nulla venenatis rhoncus nec scelerisque.',
        urls: clas2,
        logo: clasmild,
        product : [
          {
            prod : 'Shelftalker', 
            name : 'SGM aktif Shelftalker Display', 
            desc : 'Menggunakan material acrylic, dan Sticker digital printing. Process diawali dengan cutting acrylic, installation sticker digital printing',
            image : [
              {
                file : shelf_sgm
              },
            ]
          },
        ]
      },
      {
        title: 'PT. Nutricia Indonesia Sejahtera',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pharetra pretium vel mattis posuere nulla venenatis rhoncus nec scelerisque.',
        urls: bebe3,
        logo: bebelac,
        product : [
          {
            prod : 'Shelftalker', 
            name : 'SGM aktif Shelftalker Display', 
            desc : 'Menggunakan material acrylic, dan Sticker digital printing. Process diawali dengan cutting acrylic, installation sticker digital printing',
            image : [
              {
                file : shelf_sgm
              },
            ]
          },
        ]
      },
      {
        title: 'PT Combiphar',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pharetra pretium vel mattis posuere nulla venenatis rhoncus nec scelerisque.',
        urls: apta4,
        logo: combi,
        product : [
          {
            prod : 'Shelftalker', 
            name : 'SGM aktif Shelftalker Display', 
            desc : 'Menggunakan material acrylic, dan Sticker digital printing. Process diawali dengan cutting acrylic, installation sticker digital printing',
            image : [
              {
                file : shelf_sgm
              },
            ]
          },
        ]
      },
      {
        title: 'PT Mevius',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pharetra pretium vel mattis posuere nulla venenatis rhoncus nec scelerisque.',
        urls: mevius5,
        logo: mevius,
        product : [
          {
            prod : 'Shelftalker', 
            name : 'SGM aktif Shelftalker Display', 
            desc : 'Menggunakan material acrylic, dan Sticker digital printing. Process diawali dengan cutting acrylic, installation sticker digital printing',
            image : [
              {
                file : shelf_sgm
              },
            ]
          },
        ]
      },
      {
        title: 'PT Puf Sains Lab',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pharetra pretium vel mattis posuere nulla venenatis rhoncus nec scelerisque.',
        urls: puff6,
        logo: puf,
        product : [
          {
            prod : 'Shelftalker', 
            name : 'SGM aktif Shelftalker Display', 
            desc : 'Menggunakan material acrylic, dan Sticker digital printing. Process diawali dengan cutting acrylic, installation sticker digital printing',
            image : [
              {
                file : shelf_sgm
              },
            ]
          },
        ]
      },
      {
        title: 'PT. Nutricia Indonesia Sejahtera*',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pharetra pretium vel mattis posuere nulla venenatis rhoncus nec scelerisque.',
        urls: nutricia7,
        logo: nutricia,
        product : [
          {
            prod : 'Shelftalker', 
            name : 'SGM aktif Shelftalker Display', 
            desc : 'Menggunakan material acrylic, dan Sticker digital printing. Process diawali dengan cutting acrylic, installation sticker digital printing',
            image : [
              {
                file : shelf_sgm
              },
            ]
          },
        ]
      },
    ],
  },
  {
    option: 'sign',
    data: [
      {
        title: 'PT Tirta Investama',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pharetra pretium vel mattis posuere nulla venenatis rhoncus nec scelerisque. ',
        urls: aqua1,
        logo: aqua,
        product : [
          {
            prod : 'DJ Table',
            name : 'Heineken DJ Table',
            desc : 'Menggunakan material wood, acrylic, led light, dan sticker cutting. Process diawali dengan cutting wood, cutting acrylic, installation sticker cutting, dan installation LED light dan electricity',
            image : [
              {
                file : djtable_heineken
              },
            ]
          },
          {
            prod : 'Table Booth',
            name : 'Bintang Radler Table Booth',
            desc : 'Menggunakan material acrylic, LED Light, sticker cutting. Process diawali dengan cutting acrylic, installation sticker cutting, dan installation LED light dan electricity',
            image : [
              {
                file : table_booth_bintang
              },
            ]
          },
        ]
      },{
        title: 'PT Ichi Tan Indonesia',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pharetra pretium vel mattis posuere nulla venenatis rhoncus nec scelerisque.',
        urls: ichitan2,
        logo: ichitan,
        product : [
          {
            prod : 'Booth', 
            name : 'Bebelac Booth',
            desc : 'Menggunakan material wood, acrylic, dan sticker digital printing. Process diawali dengan cutting wood, cutting acrylic, painting, installation sticker digital printing',
            image : [
              {
                file : booth_bebelac
              },
            ]
          },
        ]
        
      },
      {
        title: 'PT. Nutricia Indonesia Sejahtera*',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pharetra pretium vel mattis posuere nulla venenatis rhoncus nec scelerisque.',
        urls: royal3,
        logo: nutroyal,
        product : [
          {
            prod : 'Booth', 
            name : 'Bebelac Booth',
            desc : 'Menggunakan material wood, acrylic, dan sticker digital printing. Process diawali dengan cutting wood, cutting acrylic, painting, installation sticker digital printing',
            image : [
              {
                file : booth_bebelac
              },
            ]
          },
        ]
        
      },
      {
        title: 'PT. Nutricia Indonesia Sejahtera*',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pharetra pretium vel mattis posuere nulla venenatis rhoncus nec scelerisque.',
        urls: nutriclub4,
        logo: nutriclub,
        product : [
          {
            prod : 'Booth', 
            name : 'Bebelac Booth',
            desc : 'Menggunakan material wood, acrylic, dan sticker digital printing. Process diawali dengan cutting wood, cutting acrylic, painting, installation sticker digital printing',
            image : [
              {
                file : booth_bebelac
              },
            ]
          },
        ]
        
      },
      {
        title: 'PT. Nutricia Indonesia Sejahtera*',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pharetra pretium vel mattis posuere nulla venenatis rhoncus nec scelerisque.',
        urls: royal5,
        logo: nutroyal,
        product : [
          {
            prod : 'Booth', 
            name : 'Bebelac Booth',
            desc : 'Menggunakan material wood, acrylic, dan sticker digital printing. Process diawali dengan cutting wood, cutting acrylic, painting, installation sticker digital printing',
            image : [
              {
                file : booth_bebelac
              },
            ]
          },
        ]
        
      },
      {
        title: 'PT Hisamitsu Pharma Indonesia',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pharetra pretium vel mattis posuere nulla venenatis rhoncus nec scelerisque.',
        urls: salon7,
        logo: salonpas,
        product : [
          {
            prod : 'Booth', 
            name : 'Bebelac Booth',
            desc : 'Menggunakan material wood, acrylic, dan sticker digital printing. Process diawali dengan cutting wood, cutting acrylic, painting, installation sticker digital printing',
            image : [
              {
                file : booth_bebelac
              },
            ]
          },
        ]
        
      },
      {
        title: 'PT. Teknkologi Migo Indonesia',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pharetra pretium vel mattis posuere nulla venenatis rhoncus nec scelerisque.',
        urls: migo8,
        logo: migo,
        product : [
          {
            prod : 'Booth', 
            name : 'Bebelac Booth',
            desc : 'Menggunakan material wood, acrylic, dan sticker digital printing. Process diawali dengan cutting wood, cutting acrylic, painting, installation sticker digital printing',
            image : [
              {
                file : booth_bebelac
              },
            ]
          },
        ]
        
      },
      {
        title: 'PT. Wickham International Indonesia',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pharetra pretium vel mattis posuere nulla venenatis rhoncus nec scelerisque.',
        urls: relx9,
        logo: relx,
        product : [
          {
            prod : 'Booth', 
            name : 'Bebelac Booth',
            desc : 'Menggunakan material wood, acrylic, dan sticker digital printing. Process diawali dengan cutting wood, cutting acrylic, painting, installation sticker digital printing',
            image : [
              {
                file : booth_bebelac
              },
            ]
          },
        ]
        
      },
      {
        title: 'PT. Karyadibya Mahardhika (JTI)',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pharetra pretium vel mattis posuere nulla venenatis rhoncus nec scelerisque.',
        urls: camel10,
        logo: camel,
        product : [
          {
            prod : 'Booth', 
            name : 'Bebelac Booth',
            desc : 'Menggunakan material wood, acrylic, dan sticker digital printing. Process diawali dengan cutting wood, cutting acrylic, painting, installation sticker digital printing',
            image : [
              {
                file : booth_bebelac
              },
            ]
          },
        ]
        
      },
      {
        title: 'PT Multi Bintang Indonesia',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pharetra pretium vel mattis posuere nulla venenatis rhoncus nec scelerisque.',
        urls: heine11,
        logo: logo1,
        product : [
          {
            prod : 'Booth', 
            name : 'Bebelac Booth',
            desc : 'Menggunakan material wood, acrylic, dan sticker digital printing. Process diawali dengan cutting wood, cutting acrylic, painting, installation sticker digital printing',
            image : [
              {
                file : booth_bebelac
              },
            ]
          },
        ]
        
      },
    ],
  },
  {
    option: 'Installation',
    data: [
      {
        title: 'PT. Multi Bintang Indonesia',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pharetra pretium vel mattis posuere nulla venenatis rhoncus nec scelerisque. ',
        urls: First,
        logo: logo1,
        product : [
          {
            prod : 'Totem',
            name : 'Heineken Bottle Totem',
            desc : 'Menggunakan material wood, acrylic, LED light, sticker cutting. Process diawali dengan wood lathe, cutting acrylic, installation sticker cutting, installation LED light dan electricity',
            image : [
              {
                file : totem_heineken1
              },
              {
                file : totem_heineken2
              },
            ]
          },
        ]
      },
      {
        title: 'PT. Karyadibya Mahardhika (JTI)*',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pharetra pretium vel mattis posuere nulla venenatis rhoncus nec scelerisque.',
        urls: Second,
        logo: camel,
        product : [
          {
            prod : 'Standee Acrylic',
            name : 'Camel Standee Acrylic',
            desc : 'Menggunakan material acrylic, dan sticker digital printing. Process diawali dengan cutting acrylic, dan installation sticker digital printing',
            image : [
              {
                file : standee_camel1
              },
              {
                file : standee_camel2
              },
            ]
          },
          {
            prod : 'Tin Can', 
            name : 'Camel Tin Can Packaging',
            desc : 'Mengguankan material cans, dan sticker digital printing. Process diawali dengan cleaning cans, installation sticker digital printing',
            image : [
              {
                file : packaging_camel1
              },
              {
                file : packaging_camel2
              },
            ]
          },
        ]
      },
    ],
  },
];

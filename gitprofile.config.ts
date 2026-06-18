// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'CarolDoudouCao', // Your actual GitHub username
  },

  /**
   * Because your repository is CarolDoudouCao.github.io,
   * and your website will be https://CarolDoudouCao.github.io/,
   * base should be '/'.
   */
  base: '/',

  projects: {
    github: {
      display: true,
      header: 'Data and Code',
      mode: 'manual',
      automatic: {
        sortBy: 'updated',
        limit: 6,
        exclude: {
          forks: true,
          projects: [
            'CarolDoudouCao/CarolDoudouCao.github.io',
            'CarolDoudouCao/CDH_repro_quarto_example',
          ],
        },
      },
      manual: {
        projects: [
          'CarolDoudouCao/ModernBodyForm_China',
          'CarolDoudouCao/Archaeo_Bodyform_China',
          'CarolDoudouCao/Aggregate_IntraLimb_Proportions_for_Commingled_Remains',
        ],
      },
    },

    external: {
      header: 'Research Projects',
      projects: [],
    },
  },

seo: {
  title: 'Doudou Cao 曹豆豆 | Bioarchaeology, Skeletal Biology & Quantitative Modelling',
  description:
    'description:
  'I study how ancient populations experienced health, growth, violence, and adaptation across changing environments and historical processes, using skeletal evidence, morphometric data, spatial analysis, and quantitative modelling.',
  imageURL: '',
},
  

  
  social: {
    linkedin: 'doudou-cao-500081266',
    x: '',
    mastodon: '',
    researchGate: 'Cao-Doudou',
    facebook: '',
    instagram: '',
    reddit: '',
    threads: '',
    youtube: '',
    udemy: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '',
    discord: '',
    telegram: '',
    website: 'https://ihss.hku.hk/portfolio/doudou-cao/',
    phone: '',
    email: 'dcao@hku.hk',
  },

resume: {
  fileUrl: '/Doudou_Cao_CV.pdf',
},

  skills: [
    'Biological Anthropology',
    'Quantitative and Computational Archaeology',
    'Human Osteology',
    'Bayesian Inference',
    '3D Morphometrics',
    'Human Population Biology and Health',
  ],

  experiences: [
    {
      company: 'The University of Hong Kong',
      position: 'Research Assistant Professor, Institute for the Humanities and Social Sciences',
      from: '2026',
      to: 'Present',
      companyLink: 'https://ihss.hku.hk/portfolio/doudou-cao/',
    },

  ],

  certifications: [{ name: 'Harding Distinguished Postgraduate Scholars Programme', 
                    body: 'University of Cambridge', 
                    year: '2021–2025', 
                    link: 'https://www.hardingscholars.fund.cam.ac.uk/dr-doudou-cao', }, 
                   { name: 'ICRC Research Scholarship for work related to missing persons and unidentified human remains', 
                    body: 'International Committee of the Red Cross', 
                    year: '2022', 
                    link: '', },],

  educations: [
    {
      institution: 'University of Cambridge',
      degree: 'PhD in Biological Anthropology',
      from: '2021',
      to: '2025',
    },
    {
      institution: 'Sichuan University',
      degree: 'MA in Archaeology',
      from: '2018',
      to: '2021',
    },
    {
      institution: 'Sichuan University',
      degree: 'BA in Archaeology',
      from: '2014',
      to: '2018',
    },
  ],


publications: [
  {
    title:
      'Multifactorial drivers of spatial variation in human body form across modern China',
    conferenceName: '',
    journalName: 'Scientific Reports',
    authors: 'Doudou Cao, Enrico R. Crema, Emma Pomeroy',
    link: 'https://doi.org/10.1038/s41598-026-57537-8',
    description:
      'A large-scale Bayesian analysis of how ecology, population history, urbanisation, and recent historical change shaped human body form across modern China.',
  },
  {
  title:
    'Subsistence change in Iron Age to Tubo-period western Xizang: A stable isotope study from Phiyang Dunkar',
  conferenceName: '',
  journalName: 'Journal of Archaeological Science: Reports',
  authors:
    'Xin Wang, Anqi Yang, Feng Yang, Haibing Yuan, Doudou Cao, Jie Li, Wei Huo, Suwen Lu, Shuai Li',
  link: 'https://doi.org/10.1016/j.jasrep.2026.105639',
  description:
    'A stable isotope study of human and faunal remains from Phiyang Dunkar, examining long-term subsistence change from the Iron Age to the Tubo period in western Xizang.',
},
  {
    title:
      'Dental caries as indicators of agricultural practices in the foothills of Neolithic China',
    conferenceName: '',
    journalName: 'Archaeological Research in Asia',
    authors:
      'Doudou Cao, Xiangyu Liu, Wanfa Gu, Hong Zhu, Ruojing Zhang, Zhiqing Zhou, Qingli Wei, Jiaxing Zou, Yujie Qiu, Jian Chen, Lanpo Ding, Emma Pomeroy, Haibing Yuan',
    link: 'https://doi.org/10.1016/j.ara.2025.100645',
    description:
      'A comparative bioarchaeological study of dental caries, subsistence strategies, and oral health in middle-to-late Neolithic foothill communities in China.',
  },
  {
    title:
      'Multi-Isotope analysis reveals human millet-based diets and limited mobility in the Central Plains of China ca. 5000 Years Ago',
    conferenceName: '',
    journalName: 'International Journal of Osteoarchaeology',
    authors:
      'Xueye Wang, Doudou Cao, Wanfa Gu, Qingli Wei, Xianglong Chen, Ruojing Zhang, Lanpo Ding, Zihua Tang, Xiaoxiao Teng, Tianyi Wang, Jiaxing Zou, Yujie Qiu, Qiaomei Fu, Haibing Yuan',
    link: 'https://doi.org/10.1002/oa.3407',
    description:
      'A multi-isotope study reconstructing millet-based diets and mobility patterns in early Central Plains populations.',
  },
  {
    title: 'Estimating intralimb proportions for commingled remains',
    conferenceName: '',
    journalName: 'International Journal of Osteoarchaeology',
    authors: 'Doudou Cao, Enrico R. Crema, Emma Pomeroy',
    link: 'https://doi.org/10.1002/oa.3326',
    description:
      'A methodological study evaluating how aggregate limb-bone measurements can be used to estimate intralimb proportions in commingled skeletal assemblages.',
  },
  {
    title:
      'Life history of a high-class noblewoman from the late Shu state in the Chengdu Plain during the Eastern Zhou period (770–221 BC): Childhood stresses and stable life',
    conferenceName: '',
    journalName: 'International Journal of Osteoarchaeology',
    authors: 'Bing Yi, Haibing Yuan, Tianyou Wang, Doudou Cao, Yingdong Yang, Yaowu Hu',
    link: 'https://doi.org/10.1002/oa.3282',
    description:
      'A life-history reconstruction of a high-status Eastern Zhou individual using skeletal and stable isotope evidence.',
  },

{
  title:
    'Ancient genomes reveal millet farming-related demic diffusion from the Yellow River into southwest China',
  conferenceName: '',
  journalName: 'Current Biology',
  authors:
    'Le Tao, Haibing Yuan, Kongyang Zhu, Xiangyu Liu, Jianxin Guo, Rui Min, Haifeng He, Doudou Cao, Xiaomin Yang, Zhiqing Zhou, Rui Wang, Deyun Zhao, Hao Ma, Jian Chen, Jing Zhao, Yingfu Li, Yuanhong He, Dehao Suo, Ruojing Zhang, Shuai Li, Lan Li, Feng Yang, Haichao Li, Liang Zhang, Li Jin, Chuan-Chao Wang',
  link: 'https://doi.org/10.1016/j.cub.2023.09.055',
  description:
    'An ancient DNA study examining population movement, millet farming, and mixed farming dispersal from the Yellow River into southwest China.',
},

  {
    title:
      'Sding Chung: An early multi-burial cave site on the Tibetan Plateau',
    conferenceName: '',
    journalName: 'Antiquity',
    authors: 'Hongliang Lu, Ziyan Li, Chilie Ciren, Doudou Cao, Xuan Gao, Linhui Li',
    link: 'https://doi.org/10.15184/aqy.2022.42',
    description:
      'A report on an early multi-burial cave site on the Tibetan Plateau, with evidence for high-altitude mortuary practice and human occupation.',
  },
  {
    title:
      'Analysis of dental caries in the Yangshao population at the Qingtai site, Zhengzhou city',
    conferenceName: '',
    journalName: 'Acta Anthropologica Sinica',
    authors: 'Haibing Yuan, Wanfa Gu, Qingli Wei, Qian Wu, Lanpo Ding, Doudou Cao',
    link: 'https://www.anthropol.ac.cn/EN/10.16359/j.1000-3193/AAS.2021.0023',
    description:
      'A study of dental caries in the Yangshao-period population from the Qingtai site in Zhengzhou, China.',
  },
],


  blog: {
    source: 'dev',
    username: '', // Keep empty to hide blog section
    limit: 2,
  },

  googleAnalytics: {
    id: '',
  },

  hotjar: {
    id: '',
    snippetVersion: 6,
  },

  themeConfig: {
    defaultTheme: 'lofi',

    disableSwitch: false,

    respectPrefersColorScheme: false,

    displayAvatarRing: true,

    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'winter',
      'nord',
      'silk',
    ],
  },

  footer: `© DoudouCao. Made with <a 
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a>.`,

  enablePWA: true,
};

export default CONFIG;

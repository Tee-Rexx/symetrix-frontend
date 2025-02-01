import { ICONS_NAME } from "./icons.constants";

type MenuItem = {
    menu_url: string;
    menu: string;
    icon: ICONS_NAME; // Ensure this matches one of the defined literals
    title:string
  };

export interface IDocument {
  description : string,
  keywords : string,
}

export const SIDEBAR_MENU : MenuItem [] = [
    { menu : 'Home', menu_url : '/', icon : 'home', title: 'Innovative Solutions for Web & Mobile Apps | Naxiums', },
    { menu : 'Blogs', menu_url : '/blogs' , icon : 'blog', title: "Bolgs| Naxiums"  },
    { menu : 'Our Services', menu_url : '/our-services', icon : 'laptop_mobile', title: "Our Services | Naxiums" },
    { menu : 'Portfolio', menu_url : '/portfolio', icon : 'briefcase', title: "Portfolio | Naxiums" },
    { menu : 'About Us', menu_url : '/about-us', icon : 'group', title: "About Us | Naxiums"  },
    { menu : 'Contact Us', menu_url : '/contact-us', icon : 'contact_us', title: "Contact Us | Naxiums"  },
]

export const PORTFOLIO_PAGE_DESCRIPTION = {
  description: "Explore our portfolio at Naxiums to see how we’ve helped businesses grow with custom websites and mobile apps. Discover innovative designs and success stories!",
  keywords: "portfolio, custom websites, mobile apps, Naxiums, business growth, success stories, design, development, digital solutions, innovation"
};

export const CONTACTUS_PAGE_DESCRIPTION = {
  description: "Get in touch with us at Naxiums for your web and mobile app development needs. We’re here to empower your business with tailored software solutions. Contact us today!",
  keywords: "contact us, web development, mobile app development, Naxiums, software solutions, business inquiries, customer support, tailored solutions, development needs"
};

export const HOME_PAGE_DESCRIPTION = {
  description: "Welcome to Naxiums! Discover how we empower businesses with custom web and mobile app development solutions tailored to drive success.",
  keywords: "home, Naxiums, web development, mobile app development, business solutions, digital transformation, technology, innovation, tailored solutions"
};

export const OUR_SERVICES_PAGE_DESCRIPTION = {
  description: "Explore our range of services at Naxiums, including web development, mobile apps, and tailored software solutions to meet your business needs.",
  keywords: "services, web development, mobile apps, software solutions, Naxiums, business needs, enterprise solutions, tailored development, technology services"
};

export const ABOUT_US_PAGE_DESCRIPTION = {
  description: "Learn more about Naxiums, a leading provider of innovative web and mobile app solutions. Discover our mission, values, and commitment to your success.",
  keywords: "about us, Naxiums, web solutions, mobile app solutions, mission, values, commitment, innovation, leadership, technology expertise"
};

export const BLOGS_PAGE_DESCRIPTION = {
  description: "Stay updated with the latest insights, trends, and tips in web and mobile app development. Explore the Naxiums blog for valuable content to empower your business.",
  keywords: "blogs, web development, mobile apps, insights, trends, Naxiums, business tips, technology updates, development tutorials, innovation"
};

export const FAQS_PAGE_DESCRIPTION = {
  description: "Find answers to commonly asked questions about our web and mobile app development services. Get the information you need with Naxiums' FAQs.",
  keywords: "FAQs, web development, mobile apps, questions, answers, Naxiums, customer support, technical queries, solutions, common issues"
};

export const BLOCKCHAIN_BEYOND_BITCOIN_PAGE_DESCRIPTION = {
  description: "Explore beyond Bitcoin with insights into blockchain technology and its applications beyond cryptocurrencies. Discover how it’s shaping industries and driving innovation.",
  keywords: "blockchain, beyond Bitcoin, custom solutions, Naxiums, innovation, distributed ledger, cryptocurrencies, enterprise blockchain, blockchain applications"
};

export const CYBERSECURITY_REMOTE_WORK_PAGE_DESCRIPTION = {
  description: "Learn about cybersecurity challenges and best practices in the remote work era. Protect your business and employees with comprehensive security strategies.",
  keywords: "cybersecurity, remote work, security, protection, Naxiums, business, best practices, data protection, security strategies, risk management"
};

export const DATA_GOVERNANCE_PAGE_DESCRIPTION = {
  description: "Understand the importance of data governance and how it ensures the secure management, compliance, and quality of data in your organization.",
  keywords: "data governance, secure data management, compliance, Naxiums, business data, data security, data quality, data protection, analytics"
};

export const DEMYSTIFYING_AI_PAGE_DESCRIPTION = {
  description: "Demystify artificial intelligence with insights into its practical applications and how it’s transforming businesses across various sectors.",
  keywords: "AI, artificial intelligence, machine learning, Naxiums, business transformation, innovative technology, automation, analytics, predictive models"
};

export const DIGITAL_TRANSFORMATION_PAGE_DESCRIPTION = {
  description: "Explore digital transformation and how organizations are leveraging technology to innovate, streamline processes, and stay competitive in the digital age.",
  keywords: "digital transformation, innovation, technology, Naxiums, competitive edge, automation, process optimization, future-proofing, software solutions"
};

export const POWER_OF_DEVOPS_PAGE_DESCRIPTION = {
  description: "Dive into the power of DevOps practices that foster collaboration between development and operations teams, enhancing efficiency and delivering high-quality software.",
  keywords: "DevOps, collaboration, software development, Naxiums, efficiency, automation, CI/CD, continuous integration, deployment, quality assurance"
};

export const FUTURE_OF_WORK_PAGE_DESCRIPTION = {
  description: "Discover how the future of work is evolving with remote, hybrid models, automation, and new technologies shaping the workplace of tomorrow.",
  keywords: "future of work, remote work, hybrid models, automation, Naxiums, workplace, digital transformation, innovation, employee experience, flexible solutions"
};

export const NAVIGATING_THE_CLOUD_PAGE_DESCRIPTION = {
  description: "Gain insights into cloud computing, its benefits, and strategies for navigating the cloud to enhance scalability, flexibility, and security for your business.",
  keywords: "cloud computing, cloud security, cloud migration, Naxiums, scalability, flexibility, cloud adoption, data management, enterprise cloud"
};

export const EXPLORING_EDGE_COMPUTING_PAGE_DESCRIPTION = {
  description: "Explore edge computing and how it provides low-latency, high-performance solutions for real-time data processing and IoT applications.",
  keywords: "edge computing, low-latency, IoT, Naxiums, real-time data, distributed computing, edge infrastructure, performance optimization, data processing"
};

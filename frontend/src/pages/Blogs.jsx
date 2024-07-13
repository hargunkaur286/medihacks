import React from 'react';

const blogs = [
    {
        heading: 'Mother Rising',
        description: 'Mother Rising is a holistic pregnancy blog created by Lindsey Morrow. As a childbirth educator, doula, and mother of three, Lindsey has oodles of experience in the pregnancy advice arena and this experience is reflected in the positive and inspiring tone of the blog.',
        articles: [
            {
                title: 'How to prevent tearing during birth',
                link: 'https://www.motherrisingbirth.com/preventtearing/',
                shadowColor: 'shadow-primaryColor'
            },
            {
                title: 'Surprise! Pitocin is linked to postpartum depression',
                link: 'https://www.motherrisingbirth.com/pitocin-is-linked-to-postpartum-depression/',
                shadowColor: 'shadow-yellowColor'
            },
            {
                title: 'How to labor at home as long as possible',
                link: 'https://www.motherrisingbirth.com/labor-at-home/',
                shadowColor: 'shadow-irisBlueColor'
            }
        ]
    },
    {
        heading: 'Pregnant Chicken',
        description: 'Pregnant Chicken is the brainchild of Amy Morrison. “I started the site in 2010 after being frustrated with how scary all the pregnancy sites were,” says Amy. “They had tons of options but very little information, so I set out to create a site that laid out the facts in a clear, fun way so that parents could make their own decisions.”',
        articles: [
            {
                title: 'Happily after giving birth –- 10 things they don’t tell you',
                link: 'https://pregnantchicken.com/happily-after-giving-birth-10-things-they-dont-tell-you/',
                shadowColor: 'shadow-primaryColor'
            },
            {
                title: 'Breastfeeding in the first week: 4 things you will be glad you knew',
                link: 'https://pregnantchicken.com/breastfeeding-in-the-first-week-4-things-you-will-be-glad-you-knew/',
                shadowColor: 'shadow-yellowColor'
            },
            {
                title: '7 things every pregnant woman should do, at least once',
                link: 'https://pregnantchicken.com/7-things-every-pregnant-woman-should-do-at-least-once/',
                shadowColor: 'shadow-irisBlueColor'
            }
        ]
    },
    {
        heading: 'Evidence Based Birth',
        description: 'Evidence Based Birth is the creation of mother, wife, Ph.D.-prepared nurse researcher, and blogger, Rebecca Dekker. “I started Evidence Based Birth after the birth of my second child,” Rebecca explained.',
        articles: [
            {
                title: 'Evidence for the Vitamin K shot in newborns',
                link: 'https://evidencebasedbirth.com/evidence-for-the-vitamin-k-shot-in-newborns/',
                shadowColor: 'shadow-primaryColor'
            },
            {
                title: 'What is the evidence for induction or C-section for a big baby?',
                link: 'https://evidencebasedbirth.com/evidence-for-induction-or-c-section-for-big-baby/',
                shadowColor: 'shadow-yellowColor'
            },
            {
                title: 'The evidence on advanced maternal age',
                link: 'https://evidencebasedbirth.com/advanced-maternal-age/',
                shadowColor: 'shadow-irisBlueColor'
            }
        ]
    },

    {
        heading: 'Plus Size Birth',
        description: 'Jen McLellan is a published author, certified childbirth educator, public speaker, and founder of Plus Size Birth.',
        articles: [
            {
                title: 'What’s a B belly?',
                link: 'https://plussizebirth.com/whats-a-b-belly/',
                shadowColor: 'shadow-primaryColor'
            },
            {
                title: 'Where’s my bump? Plus size pregnancy woes',
                link: 'https://plussizebirth.com/wheres-my-bump/',
                shadowColor: 'shadow-yellowColor'
            },
            {
                title: 'Plus size maternity clothes must haves',
                link: 'https://plussizebirth.com/plus-size-maternity-clothes-must-haves/',
                shadowColor: 'shadow-irisBlueColor'
            }
        ]
    }
];

const ArticleCard = ({ title, link, shadowColor }) => {
    return (
        <div className={`p-6 rounded-xl ${shadowColor} shadow-lg bg-white flex flex-col items-center text-center h-full`}>
            <h3 className="text-xl font-bold mb-4">{title}</h3>
            <a href={link} target="_blank" rel="noopener noreferrer">
                <button className="bg-primaryColor text-white font-semibold py-2 px-4 rounded-full">
                    Read more
                </button>
            </a>
        </div>
    );
};

const BlogSection = ({ heading, description, articles }) => {
    return (
        <div className="mb-12">
            <h2 className="text-3xl font-bold mb-4">{heading}</h2>
            <p className="mb-6">{description}</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {articles.map((article, index) => (
                    <ArticleCard key={index} {...article} />
                ))}
            </div>
        </div>
    );
};

const BlogPage = () => {
    return (
        <div className="bg-gray-100 min-h-screen p-6">
            <div className="max-w-5xl mx-auto">
                <h1 className="text-4xl font-bold text-center mb-8">Maternity Blogs</h1>
                {blogs.map((blog, index) => (
                    <BlogSection key={index} {...blog} />
                ))}
            </div>
        </div>
    );
};

export default BlogPage;

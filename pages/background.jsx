import { useState } from "react";
import Head from 'next/head';
import Edu_Card from "../components/Background/Edu_Card";
import Exp_Card from "../components/Background/Exp_Card";
import BannerLayout from "../components/Common/BannerLayout";
import Footer from "../components/Footer";
import { useQuery } from "react-query";
import axios from "axios";
import { Skeleton } from "antd";
import ParagraphSkeleton from "../components/Common/ParagraphSkeleton";

function Background() {

    const { isLoading, error, data } = useQuery('background', () =>
        axios.get('api/background')
            .then(({ data }) => data)
            .catch(error => console.error('Error fetching testimonials:', error)))

    return (
        <>
        <Head>
    <title>Sonu Yadav | Freelance Fullstack Engineer India | Node | React.js | AWS Developer | Designer Delhi Web Developer India</title>
    <meta name="description" content="Sonu Yadav is an award-winning freelance web developer &amp; designer based in Delhi, INDIA. Specializing in Node.Js, React.js, PHP, eCommerce, &amp; responsive websites." />
    <link rel="canonical" href="https://www.sonnu.in/" />
    <meta property="og:locale" content="en_US" />
    <meta property="og:type" content="website" />
    <meta property="og:title" content="Best #1 Freelance Website Designer Delhi | Web Developer India" />
    <meta property="og:description" content="Jitesh is an award-winning freelance web developer &amp; designer based in Delhi, INDIA. Specializing in php frameworks, eCommerce, &amp; responsive websites." />
    <meta property="og:url" content="https://www.sonnu.in/" />
    <meta property="og:site_name" content="Freelance Web Developer" />
    <meta name="twitter:card" content="summary_large_image" />
   </Head>
        <BannerLayout>
            <div className="grid md:grid-cols-2 md:divide-x-4 md:divide-Green px-4 pb-2 pt-10">
                <div className="flex flex-col gap-y-4 order-2 md:order-1  md:mr-12">
                    <div className="mt-10 md:mt-0 text-xl text-Snow font-semibold">Education</div>
                    {isLoading ?
                        [1, 2, 3].map(() => (
                            <ParagraphSkeleton className={"p-8 h-full w-full relative"} />
                        ))
                        :
                        data && data[0]?.eduCards?.map((data, key) => (
                            <Edu_Card key={key} data={data} />
                        ))
                    }

                </div>
                <div className="order-1 md:order-2">
                    <div className="flex flex-col gap-y-4 md:ml-12">
                        <div className=" md:pt-0 pt-4 text-xl text-Snow font-semibold">Experience</div>

                        {isLoading ?
                            [1, 2, 3].map(() => (
                                <ParagraphSkeleton className={"p-8 h-full w-full relative"} />
                            ))
                            :
                            data && data[1]?.expCards?.map((data, key) => (
                                <Exp_Card key={key} data={data} />
                            ))
                        }

                    </div>
                </div>
            </div>
            <Footer />
        </BannerLayout>
        </>
    );
}

export default Background;

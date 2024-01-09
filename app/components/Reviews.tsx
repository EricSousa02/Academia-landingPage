"use client"
import Image from 'next/image';
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 

interface ReviewProps {
    content: string;
    rating: number;
    memberName: string;
    memberRole: string;
    imgUrl: string;
    alt: string;
}

const Review: React.FC<ReviewProps> = ({ content, rating, memberName, memberRole, imgUrl, alt }) => {
    return (
        <section className="review">
            <div className="section__container review__container">
                <span>
                    <i className="ri-double-quotes-r"></i>
                </span>
                <div className="review__content text-left">
                    <h4>REVISÃO DOS MEMBROS</h4>
                    <p>{content}</p>
                    <div className="review__rating">
                        {Array.from({ length: rating }).map((_, index) => (
                            <span key={index}>
                                <i className="ri-star-fill"></i>
                            </span>
                        ))}
                        <span><i className="ri-star-half-fill"></i></span>
                    </div>
                    <div className="review__footer">
                        <div className="review__member">
                            <Image src={imgUrl} alt={alt} height={60} width={60} />
                            <div className="review__member__details">
                                <h4>{memberName}</h4>
                                <p>{memberRole}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const ReviewsCarousel: React.FC = () => {
    const reviewsData: ReviewProps[] = [
        {
            content: 'O que realmente diferencia esta academia é sua equipe de treinadores especializados. Os treinadores são experientes, acessíveis e genuinamente comprometidos em ajudar os membros a alcançar seus objetivos de fitness. Eles dedicam tempo para entender as necessidades individuais e criar planos de treino personalizados, garantindo resultados máximos e segurança.',
            rating: 4.5,
            memberName: 'Junior',
            memberRole: 'Software Developer',
            imgUrl: '/assets/member.jpg',
            alt: 'member',
        },
        {
            content: 'O que realmente diferencia esta academia é sua equipe de treinadores especializados. Os treinadores são experientes, acessíveis e genuinamente comprometidos em ajudar os membros a alcançar seus objetivos de fitness. Eles dedicam tempo para entender as necessidades individuais e criar planos de treino personalizados, garantindo resultados máximos e segurança.',
            rating: 4.5,
            memberName: 'Junior',
            memberRole: 'Software Developer',
            imgUrl: '/assets/member.jpg',
            alt: 'member',
        },
        {
            content: 'O que realmente diferencia esta academia é sua equipe de treinadores especializados. Os treinadores são experientes, acessíveis e genuinamente comprometidos em ajudar os membros a alcançar seus objetivos de fitness. Eles dedicam tempo para entender as necessidades individuais e criar planos de treino personalizados, garantindo resultados máximos e segurança.',
            rating: 4.5,
            memberName: 'Junior',
            memberRole: 'Software Developer',
            imgUrl: '/assets/member.jpg',
            alt: 'member',
        },

    ];

    return (
        <div className="hero-carousel-wrapper relative w-full h-full"><Carousel
            showStatus={false}
            autoPlay
            infiniteLoop
            interval={3000}
            showArrows={false}
            showThumbs={false}>
            {reviewsData.map((review, index) => (
                <Review key={index} {...review} />
            ))}
        </Carousel>
        </div>
    );
};

export default ReviewsCarousel;

import React from "react"
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
    font-size: .75rem;
`;



const Image = styled.div`
    background-image: url(${props => props.bgUrl});
    height: 10rem;
    background-size: cover;
    border-radius: .25rem;
    background-position: center center;
    transition: opacity 0.2s ease-in-out;
`;

const Rating = styled.span`
    position: absolute;
    bottom: .75rem;
    right: .25rem;
    opacity: 0;
`;

const ImageContainer = styled.div`
    margin-bottom: .25rem;
    position: relative;
    &:hover {
        ${Image} {
            opacity: .3;
        }
        ${Rating} {
            opacity: 1;
        }
    }
`;
const Title = styled.span`
    display: block;
    margin-bottom: .25rem;
`;

const Year = styled.span`
    display: block;
    color: rgba(255,255,255, .5);
`;

const Poster = ({id, bgUrl, title, rating, year, isMovie = false}) => (
    <Link to={isMovie ? `/movie/${id}` : `/tv/${id}`}>
        <Container>
            <ImageContainer>
                <Image  bgUrl={bgUrl ? `https://image.tmdb.org/t/p/w300${bgUrl}` : require("../assets/nopostsmall.jpg")}>
                </Image>
                <Rating>
                    <span role="img" aria-label="rating">
                        ⭐️
                    </span>{" "}
                    {rating}/10
                </Rating>
            </ImageContainer>
            <Title>{title.length > 15 ? `${title.substring(0, 15)}...` : title}</Title>
            <Year>{year}</Year>
        </Container>
    </Link>
);

Poster.propTypes = {
    id: PropTypes.number.isRequired,
    bgUrl: PropTypes.string,
    title: PropTypes.string.isRequired,
    rating: PropTypes.number,
    year: PropTypes.string,
    isMovie: PropTypes.bool
}

export default Poster;
import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Helmet from "react-helmet";
import Section from "../../Components/Section";
import Message from "../../Components/Message";
import Loader from "../../Components/Loader";
import Poster from "../../Components/Poster";

const Container = styled.div`
    padding: 20px;
`;

const TVPresenter = ({
    topRated,
    popular,
    airingToday,
    loading,
    error
}) => 
    (
        <> 
            <Helmet>
                <title>TV | Nomflix</title>
            </Helmet>
            {
                loading ? (<Loader></Loader>) : (
        <Container>
            {topRated && topRated.length > 0 && (
                <Section title="Top Rated Shows">
                    {popular.map(tv => (
                        <Poster 
                            key={tv.id} 
                            id={tv.id} 
                            title={tv.original_name} 
                            bgUrl={tv.poster_path}
                            rating={tv.vote_average}
                            year={tv.first_air_date && tv.first_air_date.substring(0, 4)}
                        />
                    ))}
                    
                </Section>
            )}
            {popular && popular.length > 0 && (
                <Section title="Popular Shows">
                    {popular.map(tv => (
                        <Poster 
                            key={tv.id} 
                            id={tv.id} 
                            title={tv.original_name} 
                            bgUrl={tv.poster_path}
                            rating={tv.vote_average}
                            year={tv.first_air_date && tv.first_air_date.substring(0, 4)}
                        />
                    ))}
                </Section>
            )}
            {airingToday && airingToday.length > 0 && (
                <Section title="Airing Today Shows">
                    {airingToday.map(tv => (
                        <Poster 
                            key={tv.id} 
                            id={tv.id} 
                            title={tv.original_name} 
                            bgUrl={tv.poster_path}
                            rating={tv.vote_average}
                            year={tv.first_air_date && tv.first_air_date.substring(0, 4)}
                        />
                    ))}
                </Section>
            )}
            {
                error && <Message text={error} color="#e74c3c"/>
            }            
        </Container>
    )}


        </>

    );

TVPresenter.propTypes = {
    topRated:PropTypes.array,
    popular:PropTypes.array,
    airingToday:PropTypes.array,
    loading:PropTypes.bool.isRequired,
    error: PropTypes.string
}

export default TVPresenter;
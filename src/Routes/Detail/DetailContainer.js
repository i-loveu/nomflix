import React from "react";
import { MoviesApi, TVApi } from "../../api";
import DetailPresenter from "./DetailPresenter";

const DetailContainer = class extends React.Component{

    constructor(props) {
        super(props);
        const {
            location: {pathname}
        } = props;
        this.state  = {
            result: null, 
            error: null,
            loading: true,
            isMovie: pathname.includes("/movie/")
        };
    
    }

    
    async componentDidMount() {
        const {
            match: {params: {id}},
            history: {push}
        } = this.props;
        const {isMovie} = this.state;
        const parsedID = parseInt(id);
        if (isNaN(parsedID)) {
            return push("/");
        }
        let result;
        try {
            if(isMovie){
                ({data: result} = await MoviesApi.movieDetail(parsedID));
            } else {
                ({data: result} = await TVApi.tvDetail(parsedID));
            }
            console.log(result);
        } catch {
            this.setState({error: "Can't find anything."});
        } finally {
            this.setState({loading: false, result});
        }
    }

    render() {
        const { result, error, loading } = this.state;
        return (
            <DetailPresenter
                result={result}
                error={error}
                loading={loading}
            />
        )
    }
}

export default DetailContainer
import React from 'react'
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import FilmDescription from './FilmDescription';
import { Zoom } from '@mui/material';
export default function FilmCard({ film }) {
    const HtmlTooltip = styled(({ className, ...props }) => (
        <Tooltip {...props} classes={{ popper: className }} />
    ))(({ theme }) => ({

        [`& .${tooltipClasses.tooltip}`]: {

            backgroundColor: '#e3f2fd',
            color: 'black',
            maxWidth: 250,
            fontSize: theme.typography.pxToRem(12),
            border: '1px solid #dadde9',

        },
    }

    ));
    // console.log(film.image_url)
    return (
        <HtmlTooltip
            title={
                <React.Fragment>
                    {/* <Typography color="inherit">Tooltip with HTML</Typography> */}
                    {/* <em>{"And here's"}</em> <b>{'some'}</b> <u>{'amazing content'}</u>.{' '}
                    {"It's very engaging. Right?"} */}
                    <div style={{ height: "300px", overflow: "auto" }}>
                        <FilmDescription film={film} />
                    </div>
                </React.Fragment>
            }
            placement="right"
            arrow
            TransitionComponent={Zoom}
            TransitionProps={{ timeout: 800 }}
            interactive={true}

        >
            <Button className='h-100'>
                <div className="card h-100 border-0" style={{ width: "15rem" }}>
                    <img src={film.posterurl} className="h-100 w-10 card-img-top" alt={film.title} />
                    {/* <div className="card-body text-light"> */}
                        {/* <h5 className="card-title">{film.title}</h5> */}
                        {/* <div class="progress">
                    <div class="progress-bar bg-success" role="progressbar" style={{ width: '25%' }} aria-valuenow={film.imdbRating || Math.floor(Math.random() * 10)} aria-valuemin="0" aria-valuemax="10">⭐</div>
                </div> */}
                        {/* <p className="card-text">Rating: {film.imdbRating || Math.floor(Math.random() * 10)}⭐</p> */}
                        {/* <a href="#" className="btn btn-light">Watch</a> */}
                    {/* </div> */}
                </div>
            </Button>
        </HtmlTooltip>

    )
}

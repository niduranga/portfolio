import React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import {myProjects} from "../utilities/data-fields/myProjects.ts";
import {useSelector} from "react-redux";
import type {RootState} from "../store/store.ts";
import { Link } from "react-router";


const Projects: React.FC = () => {
    const mood = useSelector((state: RootState) => state.appModeChange.appMood)
    return (
        <div className="py-16 px-4 min-h-screen">
            <h2 className={`text-4xl  font-bold text-center mb-12 mt-5 ${mood === false ?"text-gray-700" :"text-white"}`}>
                My Projects
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
                {myProjects.map((card) => (
                    <Link to={`/projects/${card.title}`}>
                        <Card
                            key={card.title}
                            sx={{
                                maxWidth: 345,
                                width: '100%',
                                margin: '0 auto',
                                mt: 2,
                                mb: 2,
                                borderRadius: 3,
                                boxShadow: 3,
                                backgroundColor: '#1f2937', // Tailwind's gray-800
                                color: '#fff',
                                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                                '&:hover': {
                                    transform: 'translateY(-5px)',
                                    boxShadow: 6,
                                },
                            }}
                        >
                            <CardMedia
                                component="img"
                                image={card.image}
                                alt={card.title}
                                sx={{
                                    width: 350,
                                    height: 194,
                                    objectFit: 'cover',
                                    borderTopLeftRadius: 12,
                                    borderTopRightRadius: 12,
                                }}
                            />

                            <CardHeader
                                titleTypographyProps={{
                                    fontWeight: 'bold',
                                    fontSize: '1.2rem',
                                    color: '#fff',
                                }}
                                subheaderTypographyProps={{
                                    fontSize: '0.9rem',
                                    color: 'rgba(255,255,255,0.6)',
                                }}
                                title={card.title}
                                subheader={card.subheader}
                            />
                        </Card>
                    </Link>
                ))}
            </div>
        </div>
    )
};

export default Projects;
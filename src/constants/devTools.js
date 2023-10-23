import Python from '../assets/svg/Python.svg'
import JavaScript from '../assets/svg/JavaScript.svg'
import PHP from '../assets/svg/PHP.svg'
import html from '../assets/svg/html.svg'
import css from '../assets/svg/css.svg'
import React from '../assets/svg/React.svg'
import Angular from '../assets/svg/Angular.svg'
import Flask from '../assets/svg/Flask.svg'
import Django from '../assets/svg/Django.svg'
import MySQL from '../assets/svg/MySQL.svg'
import MongoDB from '../assets/svg/MongoDB.svg'
import Firebase from '../assets/svg/Firebase.svg'
import sqlServer from '../assets/svg/sqlServer.svg'

export const options = [ 
    {
        value : 0, 
        label : 'Lenguajes',
        description: [
            {
                name: 'Python', 
                icon: Python
            },
            {
                name: 'JavaScript',
                icon: JavaScript
            },
            {
                name: 'PHP',
                icon: PHP
            },
            {
                name: 'HTML',
                icon: html
            },
            {
                name: 'CSS',
                icon: css
            }
        ]
    },
    {
        value: 1,
        label: 'Frameworks',
        description : [
            {
                name: 'Flask',
                icon: Flask
            },
            {
                name: 'Django',
                icon: Django
            },
            {
                name: 'Angular',
                icon: Angular
            },
            {
                name:'React',
                icon: React
            },
        ]
    },
    {
        value: 2,
        label: 'Base de datos',
        description: [
            {
                name: 'MySQL',
                icon: MySQL
            },
            {
                name: 'MongoDB',
                icon: MongoDB
            },
            {
                name: 'Firebase',
                icon: Firebase
            },
            {
                name: 'sqlServer',
                icon: sqlServer
            }
        ]
    }
]
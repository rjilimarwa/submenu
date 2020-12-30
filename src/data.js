import { FaCreditCard, FaBook, FaBriefcase } from 'react-icons/fa';
import React from 'react';
const sublinks = [
    {
        page: 'femme',
        links: [
            { label: 'jupe', icon: <FaCreditCard />, url: '/femme' },
{ label: 'jacket', icon: <FaCreditCard />, url: '/femme' },
{ label: 'chemise', icon: <FaCreditCard />, url: '/femme' },
],
},
{
    page: 'homme',
        links: [
    { label: 'jacket', icon: <FaBook />, url: '/homme' },
    { label: 'chemise', icon: <FaBook />, url: '/homme' },
    { label: 'pontalon', icon: <FaBook />, url: '/homme' },
    { label: 'pull', icon: <FaBook />, url: '/homme' },
],
},
{
    page: 'company',
        links: [
    { label: 'about', icon: <FaBriefcase />, url: '/products' },
    { label: 'a-props-nous', icon: <FaBriefcase />, url: '/products' },
],
},
];

export default sublinks;
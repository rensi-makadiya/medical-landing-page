import { Hero } from "../section/Hero"
import { Member } from "../section/Member"
import { Quality } from "../section/Quality"
import { Specialists } from "../section/Specialists"
import { SubScribe } from "../section/Subscribe"
import { WhyUs } from "../section/Why_Us"

export const Home = () =>{
    return(
        <>
        <Hero/>
        <Specialists/>
        <WhyUs/>
        <Member/>
        <Quality/>
        <SubScribe/>
        </>
    )
}
import BackHeader from "../header/BackHeader"
import styled from "styled-components";
const Address = ({setChkadd, setAddr}) => {

    const onSelect = (e) => {
        setAddr(e);
        setChkadd(true);
    }
    return (
        <>
            <BackHeader/>
            <p>근처동네</p>
            <AddrDiv onClick={()=>{onSelect("강원도 원주시 관설동")}}>강원도 원주시 관설동</AddrDiv>
            <AddrDiv onClick={()=>{onSelect("강원도 원주시 반곡동")}}>강원도 원주시 반곡동</AddrDiv>
            <AddrDiv onClick={()=>{onSelect("강원도 원주시 명륜1동")}}>강원도 원주시 명륜1동</AddrDiv>
            <AddrDiv onClick={()=>{onSelect("강원도 원주시 명륜2동")}}>강원도 원주시 명륜2동</AddrDiv>
            <AddrDiv onClick={()=>{onSelect("강원도 원주시 단구동")}}>강원도 원주시 단구동</AddrDiv>
            <AddrDiv onClick={()=>{onSelect("강원도 원주시 일산동")}}>강원도 원주시 일산동</AddrDiv>
            <AddrDiv onClick={()=>{onSelect("강원도 원주시 학성동")}}>강원도 원주시 학성동</AddrDiv>
            <AddrDiv onClick={()=>{onSelect("강원도 원주시 단계동")}}>강원도 원주시 단계동</AddrDiv>
            <AddrDiv onClick={()=>{onSelect("강원도 원주시 우산동")}}>강원도 원주시 우산동</AddrDiv>
            <AddrDiv onClick={()=>{onSelect("강원도 원주시 태장1동")}}>강원도 원주시 태장1동</AddrDiv>
            <AddrDiv onClick={()=>{onSelect("강원도 원주시 태장2동")}}>강원도 원주시 태장2동</AddrDiv>
            <AddrDiv onClick={()=>{onSelect("강원도 원주시 봉산동")}}>강원도 원주시 봉산동</AddrDiv>
            <AddrDiv onClick={()=>{onSelect("강원도 원주시 행구동")}}>강원도 원주시 행구동</AddrDiv>
            <AddrDiv onClick={()=>{onSelect("강원도 원주시 무실동")}}>강원도 원주시 무실동</AddrDiv>
        </>
    )
}

export default Address;

const AddrDiv = styled.div`
width:100%;
border-bottom: 2px solid gray;
font-size: 25px;
cursor:pointer;
`
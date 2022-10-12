 const string = 
`.skin *{
        box-sizing: border-box;
        margin: 0;
        padding:0;
    }
    .skin *::before, *::after{
        box-sizing: border-box;
    }
    .skin{
        background: #ffe600;
        min-height: 50vh;
        position: relative;
    }
    .nose{
        border: 9px solid black;
        border-color: black transparent transparent transparent;
        border-bottom: none;
        width: 0px;
        height: 0px;
        position: relative;
        left: 50%;
        top: 145px;
        margin-left: -10px;
        z-index: 10;
    }
    @keyframes wave {
        0%{
            transform: rotate(0deg);
        }
        33%{
            transform: rotate(16deg);
        }
        66%{
            transform: rotate(-6deg);
        }
        100%{
            transform: rotate(0deg);
        }
    }
    .nose:hover{
        transform-origin: 50% 100%;
        animation: wave 600ms infinite linear;
    }
    .yuan{
        position: absolute;
        width: 18px;
        height: 8px;
    
        top: -17px;
        left: -9px;
        border-radius: 9px 9px 0 0;
        background: black;
    }
    .eye{
        border: 2px solid black;
        width: 64px;
        height: 64px;
        position: absolute;
        left: 50%;
        top: 100px;
        margin-left: -32px;
        background: #2e2e2e;
        border-radius: 50%;
    
    }
    .eye::before{
        content: '';
        display: block;
        border: 3px solid #000;
        width: 30px;
        height: 30px;
        background: #fff;
        border-radius: 50%;
        position: relative;
        left: 4px;
        top: 2px;
    
    }
    .eye.left{
        transform: translateX(-100px);
    }
    .eye.right{
        transform: translateX(100px);
    }
    .mouth{
        width: 200px;
        height: 200px;
        position: absolute;
        left: 50%;
        top: 170px;
        margin-left: -100px;
    }
    .mouth .up{
        position: relative;
        top: -20px;
        z-index: 1;
    }
    .mouth .up .lip{
        border: 3px solid black;
        height: 30px;
        width: 100px;
        border-top-color: transparent;
        border-right-color: transparent;
        margin-left: -50px;
        position: absolute;
        left: 50%;
        background: #ffe600;
    }
    
    .mouth .up .lip.left{
        border-radius: 0 0 0 50px;
        transform: rotate(-15deg)translate(-53px);
    }
    .mouth .up .lip::before{
        content: '';
        display: block;
        width: 9px;
        height: 30px;
        position: absolute;
        bottom: 0;
        background: #ffe600;
    }
    .mouth .up .lip.left::before{ 
        right: -6px;
    }
    .mouth .up .lip.right{
        border-radius: 0 0 50px 0;
        transform: rotate(15deg) translate(53px) ;
    
    }
    .mouth .up .lip.right::before{
        left: -6px;
    
    }

    .mouth .down{
        /* border: 1px solid red; */
        height: 180px;
        top: 5px;
        position: absolute;
        width: 100%;
        overflow: hidden;
    }
    .mouth .down .yuan1{
        border: 3px solid black;
        width: 150px;
        height: 1000px;
        position: absolute;
        bottom: 0;
        left: 50%;
        border-radius:  75px/300px;
        margin-left: -75px;
        background: #a01e15;
        overflow: hidden;
    }
    .mouth .down .yuan1 .yuan2{
        border: 1px solid black;
        width: 200px;
        height: 300px;
        position: absolute;
        bottom: -160px;
        left:50%;
        margin-left: -100px;
        background: #ff485f;
        border-radius: 100px;
    }
    .face{
        position: absolute;
        border: 3px solid black;
        left: 50%;
        width: 88px;
        height: 88px;
        top: 200px;
        margin-left: -44px;
        z-index: 3;
    }
    .face.left{
        transform: translateX(-180px);
        background: #ff0000;
        border-radius: 50%;
    
    }
    .face.right{
        transform: translateX(180px);
        background: #ff0000;
        border-radius: 50%;
    
    }
`
export default string
/* add all data you want to load here (like json) */
/* memo: i imported the images this way instead of the require he used */
import img01 from '../../utils/images/img01.svg';
import img02 from '../../utils/images/img02.svg';
import img03 from '../../utils/images/img03.svg';

/* About Section */
export const homeObjOne={
id:'about',
lightBg:false,
lightText:true,
lightTextDesc:true,
/* green text at the start */
topLine: 'Premium Bank',
headLine: 'Unlimited Transaction with zero fees',
description:'Get access to our exclsive app that allows you to send unlimited transactions without getting charged any fees.',
buttonLabel:'About Us',
/* because it is the text is in the first section (the left part is the text so i will start with text if it is the img then img startwill be true*/
imgStart:false,
/* can add photos later to the public folder and call for it in the import top of the file */
img: img01,
alt: 'Img Name',
dark:true,
primary:true,
darkText:false
};
/* more data section */
export const homeObjTwo={
    id:'discovery',
    /* the container bg */
    lightBg:true,
    /*  */
    lightText:false,
    lightTextDesc:false,
    /* green text at the start */
    topLine: 'Premium Bank',
    headLine: 'Unlimited Transaction with zero fees',
    description:'Get access to our exclsive app that allows you to send unlimited transactions without getting charged any fees.',
    buttonLabel:'Get Started',
    /* because it is the text is in the first section (the left part is the text so i will start with text if it is the img then img startwill be true*/
    imgStart:true,
    /* can add photos later to the public folder and call for it in the import top of the file */
    img: img02,
    alt: 'Img Name',
    /* text inside the button color */
    dark:false,
    /* color of button */
    primary:false,
    darkText:true
    };

    /* Sign Up Section */
export const homeObjThree={
    id:'signup',
    lightBg:false,
    lightText:true,
    lightTextDesc:true,
    /* green text at the start */
    topLine: 'Premium Bank',
    headLine: 'Unlimited Transaction with zero fees',
    description:'Get access to our exclsive app that allows you to send unlimited transactions without getting charged any fees.',
    buttonLabel:'Sign Up!',
    /* because it is the text is in the first section (the left part is the text so i will start with text if it is the img then img startwill be true*/
    imgStart:false,
    /* can add photos later to the public folder and call for it in the import top of the file */
    img: img03,
    alt: 'Img Name',
    dark:true,
    primary:true,
    darkText:false
    };
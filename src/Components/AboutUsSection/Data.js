/* add all data you want to load here (like json) */
import {img01} from '../../utils/images/'
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
buttonLabel:'Get Started',
/* because it is the text is in the first section (the left part is the text so i will start with text if it is the img then img startwill be true*/
imgStart:false,
/* can add photos later to the public folder and call for it in the import top of the file */
img: img01,
alt: 'Img Name',
dark:true,
primary:true,
darkText:false
};
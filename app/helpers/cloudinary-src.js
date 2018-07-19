import { helper } from '@ember/component/helper';

export function cloudinarySrc(params) {
  return `https://res.cloudinary.com/radio4000/image/upload/q_60,w_50,h_50,c_thumb,c_fill,fl_lossy/${params[0]}.jpg`
}

export default helper(cloudinarySrc);

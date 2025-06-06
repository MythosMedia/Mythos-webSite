function flatDeep(arr, d = 1) {
  return d > 0 ? arr.reduce((acc, val) => acc.concat(Array.isArray(val) ? flatDeep(val, d - 1) : val), [])
               : arr.slice();
}

const slugify = function(text) {
    return text
      .toString()
      .replace(/\s+/g, '-') // Replace spaces with -
      .replace(/[^\w-]+/g, '') // Remove all non-word chars
      .replace(/--+/g, '-') // Replace multiple - with single -
      .replace(/^-+/, '') // Trim - from start of text
      .replace(/-+$/, '') // Trim - from end of text
}
const handleScroll = (e, sectionId) => {
  e.preventDefault();
  if (sectionId) {
    const section = document.getElementById(slugify(sectionId));
    section.scrollIntoView({ behavior: 'smooth' });
  }else{
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
};

function containsObject(obj, list) {
  var i;
  for (i = 0; i < list.length; i++) {
      if (list[i].slug === obj.slug) {
          return i;
      }
  }

  return -1;
}


export {flatDeep, slugify, containsObject,handleScroll};
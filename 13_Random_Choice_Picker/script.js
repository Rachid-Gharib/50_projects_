const tagsEl = document.getElementById('tags');
const textarea = document.getElementById('textarea');

textarea.focus();

textarea.addEventListener('keyup', (event) => {
     createTags(event.target.value);

     if (event.key === 'Enter') {
          setTimeout(event.target.value = '', 10);
          randomSelect();
     }


})

function createTags(input) {
     tagsEl.innerHTML = '';
     const arrayStrings = input.split(',').filter(tag => tag.trim() !== '').map(tag => tag.trim());
     arrayStrings.forEach(string => {
          const span = document.createElement('span');
          span.classList.add('tag');
          span.innerText = string;
          tagsEl.appendChild(span);
     })
}

function randomSelect(){
     const times = 30;

     const interval = setInterval(() => {
          const randomTag = pickRandomTag();
          highlightTag(randomTag);

          setTimeout(() => {
               unHighlightTag(randomTag);
          }, 100)

     },100)

     setTimeout(() =>{
          clearInterval(interval);
          setTimeout(() => {
               const randomTag = pickRandomTag();
               highlightTag(randomTag)
          }, 100)

     }, times * 100)
}

function pickRandomTag(){
     const tags = document.querySelectorAll('.tag');
     return tags[Math.floor(Math.random() * tags.length)]
}

function highlightTag(tag){
     tag.classList.add('highlight');
}

function unHighlightTag(tag){
     tag.classList.remove('highlight');
}